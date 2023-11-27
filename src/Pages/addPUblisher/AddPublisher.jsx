import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const AddPublisher = () => {

    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
    }, [location])
    const axiosSecure = useAxiosSecure()
    const formHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const logo = form.logo.files[0];


        //   image upload to imgBb
        const data = new FormData()
        data.append('image', logo)
        fetch('https://api.imgbb.com/1/upload?key=f5f995dbfff98c6b0a7f18d30bf596c3', {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const article = { logo: data.data.display_url, name }


                    axiosSecure.post('/publishers', article)
                        .then(data => {
                            if (data.data.insertedId) {
                                toast.success('Successfully Add Service!')
                                form.reset()
                                console.log(data)
                            }
                        })
                        .catch(err => console.log(err.message))
                }
            })
            .catch(err => console.log(err.message))





    }

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-md mx-auto bg-teal-100 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">

                <h1 className="text-center text-teal-600 mb-12 md:text-4xl text-2xl font-bold">Add Publisher</h1>


                <div className=" w-full">
                    <label>
                        Publisher Name
                    </label>
                    <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " placeholder="Enter Publisher Name" type="text" name="name" id="" />
                </div>

                <div className=" w-full">
                    <label >
                        Publisher Logo
                    </label>
                    <input type="file" name="logo" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded " id="" />

                </div>

                <input className="w-full font-bold mt-3 cursor-pointer py-3 rounded-md text-white bg-teal-600" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddPublisher;



