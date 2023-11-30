import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const Reviews = () => {
    
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div  className=" ">
        <div className="max-w-screen-xl mx-auto px-4 mb-28 ">
            <div className="text-center pt-12 mb-20">
                <h1 className="text-center text-4xl font-bold my-4 text-teal-600 ">OUR HAPPY USERS</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews?.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Reviews;