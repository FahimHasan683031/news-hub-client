import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const navigate = useNavigate()
    const axiosSecure =useAxiosSecure()
    const {user}=useAuthContext()
    const [duration, setDuration] = useState()
    const premiumInfo = {
        duration: duration === '2 Minute' && 2 || duration === '1 Month' && 43200 || duration === '6 Month' && 259200 || duration === '1 Year' && 518400,
        tekDate: new Date()
    }
    const subscriptionHandle = () => {
        axiosSecure.patch(`/premiumUser/${user?.email}`, { rol:'premium',premiumInfo:premiumInfo })
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Successfully Taken Subscription!')
                    navigate('/')
                }
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div >
            <div className=" bg-teal-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-screen-lg mx-auto px-6 ">
                    <div >
                        <h1 className="text-3xl font-bold text-emerald-600 mb-3">Take 50% Discount!!</h1>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Join With Ous.</h2>
                        <p className="text-gray-700 leading-8 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui non est error cumque, blanditiis modi enim nisi. Itaque vero voluptates nulla totam praesentium. Officiis quisquam harum laudantium tempore magni.</p>
                    </div>
                    <img className="w-full" src="https://i.ibb.co/rHBbbjj/undraw-subscriptions-re-k7jj-removebg-preview-1.png" alt="" />
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="max-w-lg mx-auto bg-teal-100 drop-shadow-lg my-10 px-6 py-8 rounded-lg text-base text-black" action="">




                    <div className=" w-full">
                        <label>
                            Your Name
                        </label>
                        <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " placeholder="Enter your Name" type="text" name="title" id="" />
                    </div>

                    <div className=" w-full">
                        <label>
                            Your Email
                        </label>
                        <input type="text" required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="tags" placeholder="Enter your email" id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Select Subscription Duration
                        </label>
                        <select onChange={(e) => setDuration(e.target.value)} required name="publisher" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" id="">

                            <option></option>
                            <option>2 Minute</option>
                            <option>1 Month</option>
                            <option>6 Month</option>
                            <option>1 Year </option>

                        </select>
                    </div>

                    <p className="text-lg font-medium mb-5">Price:{duration === '2 Minute' && '10' || duration === '1 Month' && '50' || duration === '6 Month' && '100' || duration === '1 Year' && '150'}$</p>

                    <button onClick={subscriptionHandle} className="w-full font-bold  cursor-pointer py-3 rounded-md text-white bg-teal-600">Checkout</button>
                </div>

            </div>
        </div>
    );
};

export default Subscription;