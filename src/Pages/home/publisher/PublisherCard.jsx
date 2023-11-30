
const PublisherCard = ({publisher}) => {
    return (
        <div className="drop-shadow-md bg-white text-center w-[220px] mb-4">
            <img className="h-[100px] w-[100px] rounded-md mx-auto" src={publisher.logo} alt="" />
            <h1 className="text-xl font-bold text-neutral-800 my-4">{publisher.name}</h1>
        </div>
    );
};

export default PublisherCard;