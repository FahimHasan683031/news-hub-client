import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuthContext from "../../Hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";



const UpdateArticles = () => {
const navigate = useNavigate()
 const id = useParams().id
 const { data: article = [] } = useQuery({
     queryKey: ['article'],
     queryFn: async () => {
         const res = await axiosSecure.get(`/articles/${id}`)
         return res.data;
     }
 })
 const{ image, title, publisher, description, tags,  status, view, type }=article
    const axiosSecure = useAxiosSecure()
    
    
    // load providers data
    const { data: providers = [] } = useQuery({
        queryKey: ['MYservicesData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/publishers')
            return res.data;
        }
    })
    const { user } = useAuthContext()
    const formHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const publisher = form.publisher.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const date = new Date().toLocaleDateString('en-US')

        const updateArticle = { image, title, publisher, description, tags, email: user.email, date, status, view, type }

                    const newTags = tags.split(",")
                    axiosSecure.get('/articlesTags')
                        .then(data => {
                            const oldCollection = data.data[0].tags;
                            newTags.map(tag => {
                                if (!oldCollection.includes(tag)) {
                                    oldCollection.push(tag)
                                }
                                const updateTags = { tags: oldCollection }
                                axiosSecure.put(`/articlesTags/${data.data[0]._id}`, updateTags)
                                    .then(data => console.log(data.data))
                                    .catch(err => console.log(err.message))
                            })
                            axiosSecure.put(`/articles/${article._id}`, updateArticle)
                                .then(res => {
                                    
                                    if (res.data.modifiedCount) {
                                        toast.success('Successfully Update Article!')
                                        form.reset()
                                        navigate('/myArticles')
                                    }
                                })
                                .catch(err => console.log(err.message))
                        })
                        .catch(err => console.log(err.message))
                





    }

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-lg mx-auto bg-teal-100 drop-shadow-lg my-10 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">

                <h1 className="text-center text-teal-600 mb-12 md:text-5xl text-2xl font-bold">Update Article</h1>


                <div className=" w-full">
                    <label>
                        Article Title
                    </label>
                    <input defaultValue={title} className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " placeholder="Enter Article Name" type="text" name="title" id="" />
                </div>

                <div className=" w-full">
                    <label>
                        Article Tags
                    </label>
                    <input defaultValue={tags} type="text" required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="tags" placeholder="Enter tags separate by coma (,)" id="" />
                </div>

                <div className="w-full">
                    <label >
                        Select publisher
                    </label>
                    <select  name="publisher" defaultValue={publisher} className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" id="">
                        <option disabled value='deafult' >Select publisher</option>
                        {
                            providers?.map(provider => <option key={provider._id} value={provider?.name}>{provider.name}</option>)
                        }

                    </select>
                </div>

                <div className=" w-full">
                    <label >
                        Article Image
                    </label>
                    
                    <input defaultValue={image} type="url" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="image" id="" />

                </div>

                <textarea defaultValue={description} className=" md:my-6 drop-shadow-lg w-full p-3 rounded flex-1" name="description" placeholder="Enter Article Description" id="" rows="7"></textarea>



                <input className="w-full font-bold  cursor-pointer py-3 rounded-md text-white bg-teal-600" type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateArticles;



