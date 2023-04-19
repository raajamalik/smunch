import React, { useEffect } from "react";
import Link from "next/link";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ME, USER_REVIEWS_QUERY } from "@/graphql/queries";
import Review from "@/components/Review";
import Layout from "@/components/Layout";

const ReviewPage = () => {
  const {
    data: userData,
    loading: userLoading,
    networkStatus: userNetworkStatus,
    error: userErrror,
  } = useQuery(ME, {
    variables: { userInput: { id: 2 } },
  });

  const [
    getReviews,
    { data: reviewData, loading: reviewLoading, error: reviewError },
  ] = useLazyQuery(USER_REVIEWS_QUERY);

  useEffect(() => {
    if (userNetworkStatus === 7) {
      getReviews({
        variables: { userReviewInput: { userId: Number(userData.me.id) } },
      });
    }
  }, [getReviews, userData, userLoading, userNetworkStatus]);

  return (
    <Layout>
      <div className="min-h-screen text-gray-900 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl">My Reviews</h1>
        <div className="flex flex-wrap justify-center max-h-96 overflow-y-auto">
          {reviewData?.userReviews?.map((review: any) => (
            <div key={review.id} className="w-full sm:w-1/2 p-2">
              <Review {...review} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-purple-600 underline underline-offset-2">
          <Link href="/order">Rate your experience. Go to your orders.</Link>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewPage;
