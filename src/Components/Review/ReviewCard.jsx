import BasicRating from "./Reating";


const ReviewCard = ({review}) => {
   
    const {comment,rating,image,name}=review
    return (
        <div  className="grid mb-10 grid-cols-5 gap-4">
           <div className="border-r-2 border-gray-200 col-span-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full my-3" src={image} alt="" />
            <h1 className="text-lg text-teal-600 font-bold">{name}</h1>
            </div>
            <div className="col-span-3">
                <BasicRating rating={rating}></BasicRating>
                <p className="text-sm font-normal leading-6 text-gray-500">{comment}</p>
            </div> 
        </div>
    );
};

export default ReviewCard;