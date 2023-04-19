import Image from "next/image";
import React from "react";
import AverageAndLatestReview from "./AverageAndLatestReview";
import { useRouter } from "next/router";

interface SearchItemProps {
  id: number;
  name: string;
  averageRating: number;
  latestReview: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
  id,
  name,
  averageRating,
  latestReview,
}) => {
  const router = useRouter();
  const handleRestaurantClick = (id: number) => {
    router.push(`/restaurant/${id}`);
  };

  return (
    <li onClick={() => handleRestaurantClick(id)} className="flex items-center m-4 p-4 rounded-2xl inset-0 bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex-shrink-0 w-24 h-24">
        <Image className="w-full h-full object-cover rounded-md" src='/good-food.jpg' alt={name} width={200} height={0}/>
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <AverageAndLatestReview
          averageRating={averageRating}
          latestReview={latestReview}
        />
      </div>
    </li>
  );
};

export default SearchItem;
