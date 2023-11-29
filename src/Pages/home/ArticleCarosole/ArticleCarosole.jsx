import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ArticleCard from "../../../Shared/Header/ArticleCard";
import CarosoleCard from "./CarosoleCard";


const ArticleCarosole = () => {
    const axiosSecure = useAxiosSecure()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axiosSecure.get(`/articles?status=approve&limit=6&sort=-1`)
            .then(data => setArticles(data.data))
    }, [axiosSecure,])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-20">
                
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            articles?.map(article=><SwiperSlide key={article._id}>
                                <CarosoleCard article={article}/>
                            </SwiperSlide>)
                        }
                        

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ArticleCarosole;