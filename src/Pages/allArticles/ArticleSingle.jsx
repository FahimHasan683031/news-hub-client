import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const ArticleSingle = () => {
    const axiosSecure = useAxiosSecure()

    const params = useParams()
    const { data: article = [] } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/articles/${params.id}`)
            return res.data;
        }
    })
    const { image, title, publisher, description,  date,  } = article
    return (
        <div className="max-w-screen-sm mx-auto my-14">
            
                
                <div className="rounded-md   mb-5">
                    <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="px-5">
                        <h1 className="text-2xl my-4 font-bold text-teal-600">{title}</h1>
                        <p>Date:{date}</p>
                        <p className="my-4 font-medium text-base ">Publisher:{publisher}</p>
                        <p className="font-medium text-slate-600 text-[15px] leading-8">{description}</p>
                        <div className="my-10 flex justify-between">
                            

                            
                        </div>


                    </div>
                </div>
            </div>
        
    );
};

export default ArticleSingle;
