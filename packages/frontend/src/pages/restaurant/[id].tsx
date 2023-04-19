import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

const ProductListPage = ({ id }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-100 justify-center items-center bg-[url('/back-food.jpg')] bg-cover">
      <div className="m-4 p-4 rounded-2xl inset-0 bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl">
        <h1>Food Offered by Restaurant: </h1>
        <h3>{`Its Cooking... :)`}</h3>
        <Link href="/" className=" text-blue-900 underline underline-offset-2">
          Take me Home
        </Link>
        <button
          onClick={() => router.back()}
          className="bg-purple-600 text-white font-bold mx-2 py-1 px-4 rounded"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
