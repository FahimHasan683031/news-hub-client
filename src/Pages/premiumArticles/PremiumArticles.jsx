import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Container, Grid } from "@mui/material";
import ArticleCard from "../../Shared/Header/ArticleCard";

const PremiumArticles = () => {
  const axiosSecure=useAxiosSecure()
  const type = "premium"
  const [articles, setArticles] = useState([])
  useEffect(() => {
        
    axiosSecure.get(`/articles?type=${type}&status=approve`)
        .then(data => setArticles(data.data))
}, [ axiosSecure])

    return (
        <div>
          <div className="mb-12   bg-no-repeat bg-cover relative bg-top py-8 lg:py-14">
                <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808e0]"></div>
                <div className="text-center relative z-20">
                    <h1 className="text-4xl lg:text-5xl  font-bold text-teal-500">Premium Articles</h1>
                    
                </div>

            </div>
             <Container sx={{ margin: '0 auto' }}>
                <Grid container spacing={4}>

                    {
                        articles?.map(article => <ArticleCard key={article._id} article={article} />)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default PremiumArticles;