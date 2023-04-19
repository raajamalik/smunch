import React from "react";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100 flex flex-col justify-center items-center bg-[url('/back-food.jpg')] bg-cover">
      <div className="m-4 p-4 rounded-2xl inset-0 bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl"><h1>You can chagne your address here</h1>
      <h3>Development in progress...</h3>
      <Link href="/" className=" text-blue-900 underline underline-offset-2">Take me Home</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
