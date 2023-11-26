import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuthContext from "../../Hooks/useAuthContext";



const AddArticles = () => {

    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
    }, [location])
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthContext()
    const formHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const publisher = form.publisher.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const date = new Date().toLocaleDateString('en-US')

        //   image upload to imgBb
        const data = new FormData()
        data.append('image', image)
        fetch('https://api.imgbb.com/1/upload?key=f5f995dbfff98c6b0a7f18d30bf596c3', {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const article = { image: data.data.display_url, title, publisher, description, tags, email: user.email, date, status: "pending" }
        
                    console.log(article)
                }
            })
            .catch(err => console.log(err.message))

        



        // axiosSecure.post('/api/v1/services', service)
        //     .then(data => {
        //         if (data.data.insertedId) {
        //             toast.success('Successfully Add Service!')
        //             form.reset()
        //         }

        //     })
        //     .catch(err => console.log(err.message))
    }

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-lg mx-auto bg-teal-100 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">

                <h1 className="text-center text-teal-600 mb-12 md:text-5xl text-2xl font-bold">Add Article</h1>


                <div className=" w-full">
                    <label>
                        Article Title
                    </label>
                    <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " placeholder="Enter Service Name" type="text" name="title" id="" />
                </div>

                <div className=" w-full">
                    <label>
                        Article Tags
                    </label>
                    <input type="text" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="tags" placeholder="Enter tags separate by coma (,)" id="" />
                </div>

                <div className="w-full">
                    <label >
                        Select publisher
                    </label>
                    <select name="publisher" defaultValue='deafult' className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" id="">
                        <option disabled value='deafult' >Select publisher</option>
                        <option value="rokomari">Rokomari</option>
                        <option value="rokomari">Rokomari</option>
                        <option value="rokomari">Rokomari</option>

                    </select>
                </div>

                <div className=" w-full">
                    <label >
                        Article Image
                    </label>
                    <input type="file" name="image" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded " id="" />

                </div>

                <textarea required className=" md:my-6 drop-shadow-lg w-full p-3 rounded flex-1" name="description" placeholder="Enter Article Description" id="" rows="7"></textarea>



                <input className="w-full font-bold  cursor-pointer py-3 rounded-md text-white bg-teal-600" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddArticles;



