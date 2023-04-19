import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW_MUTATION } from '@/graphql/mutations';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/lib/redux/hooks';
import { OrderItemType, User } from '@/types/types';

const NewReview = () => {
  const router = useRouter();
  const { product, productId, restaurantId } = useAppSelector<OrderItemType>((state) => state.order);
  const currentUser = useAppSelector<User>((state) => state.user);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    authorId: 2,//Number(currentUser.id),
    restaurantId: restaurantId,
    rating: 0,
    productId: productId,
  });

  const [createReview, { loading, error }] = useMutation(CREATE_REVIEW_MUTATION, {
    onCompleted(data, clientOptions) {
      setSuccess(true);
    },
    onError: (error) => {
      setIsError(true);
    },
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);
    createReview({
      variables: {
        createReviewInput: {
          authorId: 2, // Replace with actual author ID
          restaurantId: restaurantId,
          title: formData.title,
          content: formData.content,
          rating: formData.rating,
          productId: productId,
        },
      },
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: parseInt(event.target.value),
    });
  };

  const handleBack = () => {
    router.back();
  };


  return (
    <Layout>
    <div className="min-h-screen py-10 text-gray-900 flex flex-col items-center  bg-gray-100 ">
      <h2 className="text-2xl mb-4">You are reviewing {product}</h2>
      <form onSubmit={handleFormSubmit} className="w-full max-w-md items-center m-4 p-4 rounded-lg bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl">
        <div className="mb-4">
          <label htmlFor="reviewTitle" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="reviewTitle"
            required
            aria-required
            value={formData.title}
            onChange={handleInputChange}
            className="border p-3 w-full text-gray-800 border-purple-600 rounded outline-4 outline-offset-4 outline-purple-200"
            placeholder="Enter a title for your review"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reviewContent" className="block mb-2">
            Content
          </label>
          <textarea
            name="content"
            id="reviewContent"
            maxLength={500}
            rows={5}
            value={formData.content}
            onChange={handleInputChange}
            className="border p-3 w-full border-purple-600 text-gray-800 rounded outline-4 outline-offset-4 outline-purple-200"
            placeholder="Enter your review content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2">
            Rating(1-5, 1 lowest, 5 highest)
          </label>
          <input
            type="number"
            name="reviewRating"
            id="reviewRating"
            value={formData.rating}
            onChange={handleRatingChange}
            min="1"
            max="5"
            required
            aria-required
            className="border p-3 w-full border-purple-600 rounded outline-4 outline-offset-4 outline-purple-200"
            placeholder="Enter a rating between 1 and 5"
          />
        </div>
        <div className='flex flex-row'>
        <button type="button" onClick={handleBack} className="items-start border text-purple-600 border-purple-600 py-1 px-4 rounded outline-4 outline-offset-4 outline-purple-200">
          Back
        </button>
        <div className='flex-grow'></div>
        <button type="submit" disabled={ loading } className="item-end border bg-purple-600 text-white py-1 px-4 rounded outline-4 outline-offset-4 outline-purple-200">
          {loading ? 'Saving...' : 'Save Review'}
        </button>

        </div>
        {isError && <p className="text-red-500 mt-2">An error occurred while saving your review.</p>}
        {success && <p className="text-green-600 mt-2">Reivew Saved Successfully</p>}
      </form>
    </div>
    </Layout>
    );
};

export default NewReview;