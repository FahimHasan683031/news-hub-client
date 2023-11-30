import { useEffect, useState } from 'react';
import { CountUp } from 'use-count-up'
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Statistic = () => {
    const axiosSecure=useAxiosSecure()
    const [users, setUsers] = useState([])
    const [premiumUsers, setPremiumUsers] = useState([])
    useEffect(() => {
          
      axiosSecure.get(`/users`)
          .then(data => setUsers(data.data))
      axiosSecure.get(`/users?rol=premium`)
          .then(data => setPremiumUsers(data.data))
  }, [ axiosSecure])
    return (
        <div className='max-w-screen-md mx-auto'>
            <h1 className='text-3xl font-bold text-center text-emerald-600 mb-14'>STATISTIC</h1>
            <div className='flex gap-x-7 justify-center '>
                <div className='text-center p-8' >
                    <div className='text-3xl text-teal-600 font-bold'>
                        <CountUp className="text-2xl font-bold text-neutral-800" isCounting end={users.length} duration={3.2} />+
                    </div>
                    <h2 className='text-2xl font-bold my-4'>Total User</h2>
                </div>
                <div className='text-center p-8' >
                    <div className='text-3xl text-teal-600 font-bold'>
                        <CountUp className="text-2xl font-bold text-neutral-800" isCounting end={premiumUsers.length} duration={3.2} />+
                    </div>
                    <h2 className='text-2xl font-bold my-4'>Premium Users</h2>
                </div>

            </div>

        </div>
    );
};

export default Statistic;