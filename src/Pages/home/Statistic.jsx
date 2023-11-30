import { CountUp } from 'use-count-up'

const Statistic = () => {
    return (
        <div className='max-w-screen-md mx-auto'>
            <h1 className='text-3xl font-bold text-center text-emerald-600 mb-14'>STATISTIC</h1>
            <div className='flex gap-x-7 justify-center '>
                <div className='text-center p-8' >
                    <div className='text-3xl text-teal-600 font-bold'>
                        <CountUp className="text-2xl font-bold text-neutral-800" isCounting end={10} duration={3.2} />+
                    </div>
                    <h2 className='text-2xl font-bold my-4'>Total User</h2>
                </div>
                <div className='text-center p-8' >
                    <div className='text-3xl text-teal-600 font-bold'>
                        <CountUp className="text-2xl font-bold text-neutral-800" isCounting end={5} duration={3.2} />+
                    </div>
                    <h2 className='text-2xl font-bold my-4'>Premium Users</h2>
                </div>

            </div>

        </div>
    );
};

export default Statistic;