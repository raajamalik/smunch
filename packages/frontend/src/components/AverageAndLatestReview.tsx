import React from "react";

interface Props {
    averageRating?: number;
    latestReview?: string;
}

const AverageAndLatestReview: React.FC<Props> = ({ averageRating, latestReview }) => {
    if(!averageRating) {
        return <div>No Reviews</div>
    }
    return (
        <div>
            <p className="text-gray-500">{`Average Rating ${averageRating}`}&#9733;</p>
            <div className="flex items-center mt-2">
                <p className="text-gray-500">Latest Review: </p>
                { latestReview ? <span>{latestReview} </span> : <span>No reviews yet</span>}
            </div>
        </div>
    );
};

export default AverageAndLatestReview;