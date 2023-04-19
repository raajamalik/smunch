import React from 'react';

interface ReviewProps {
  title: string;
  content: string;
  rating: number;
  createdDate: Date;
}

const Review: React.FC<ReviewProps> = ({ title, content, rating, createdDate }) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(createdDate);

  return (
    <div className="m-4 p-4 rounded-lg bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl">
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      <p className="text-base mb-2">{content}</p>
      <p className="text-gray-500 text-sm">Rating: {rating}/5</p>
      <p className="text-gray-500 text-xs mb-2">{formattedDate}</p>
    </div>
  );
};

export default Review;
