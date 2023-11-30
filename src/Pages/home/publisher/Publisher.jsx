import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PublisherCard from "./PublisherCard";

const Publisher = () => {
    const axiosSecure=useAxiosSecure()
    const [publishers, setPublishers] = useState([])
    useEffect(() => {
          
      axiosSecure.get(`/publishers`)
          .then(data => setPublishers(data.data))
  }, [ axiosSecure])
    return (
        <div className="max-w-screen-xl mx-auto px-7 mb-32">
            <h1 className='text-3xl font-bold text-center text-emerald-600 mb-14'>OUR PUBLISHERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                {
                    publishers?.map(publisher=><PublisherCard key={publisher._id} publisher={publisher} />)
                }
            </div>
            
        </div>
    );
};

export default Publisher;
