import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuthContext from "../Hooks/useAuthContext";

const PremiumButton = ({updateView,article}) => {
    const {user}=useAuthContext()
    const axiosSecure = useAxiosSecure()
  const [author, setAuthor] = useState()
  useEffect(() => {
    axiosSecure.get(`/users/${user?.email}`)
      .then(res => setAuthor(res.data))

  }, [user, axiosSecure])

    return (
        <div>
            <div className='flex justify-between items-center'>
                {
                    author?.rol==='premium'||author?.rol==='admin'?<Link onClick={updateView} to={`/articleSingle/${article._id}`}><button className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Details</button></Link>:<Link to={`/subscription`}><button className='px-4 py-[6px] ml-4 my-4 text-white bg-emerald-600 rounded-sm'>Tack Subscription</button></Link>
                }
                <button className='text-emerald-600 px-2 py-1 h-9 mr-4 rounded-full bg-emerald-200 border border-emerald-600'>Premium</button>
            </div>
        </div>
    );
};

export default PremiumButton;
