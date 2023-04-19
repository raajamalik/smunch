import { useRouter } from 'next/router';
import { OrderItemType } from '../types/types';
import { useAppDispatch } from '@/lib/redux/hooks';

interface Props {
  order: OrderItemType;
}

const OrderItem = ({ order }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { product, price, quantity, purchaseDate, review } = order;
  
  const handleAddReview = () => {
    dispatch({
      type: 'order/setOrder',
      payload: order,
    });
    router.push('/review/new-review');
  }

  return (
    <div className="m-4 p-4 rounded-lg bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium">{product}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      <p className="text-gray-600 mb-2">Purchased on {new Date(purchaseDate).toLocaleDateString()}</p>
      <p className="text-gray-600 mb-2">{quantity} {quantity > 1 ? 'items' : 'item'}</p>
      {review ? (
        <div className="mt-2">
          <h3 className="text-lg font-medium mb-2">Review</h3>
          <p className="mb-2">{review.title}</p>
          <p className="text-gray-600 mb-2">{review.content}</p>
          <p className="text-gray-600">Rating: {review.rating}/5</p>
        </div>
      ) : (
        <div className="mt-2">
            <button className="border border-purple-600 text-purple-600 py-1 px-4 rounded hover:bg-purple-600 hover:text-white outline-4 outline-offset-4 outline-purple-200" onClick={handleAddReview}>Add Review</button>
        </div>
        )}
    </div>
  );
};

export default OrderItem;
