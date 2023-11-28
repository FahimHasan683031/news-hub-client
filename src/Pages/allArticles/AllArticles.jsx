import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Container, Grid } from "@mui/material";
import ArticleCard from "../../Shared/Header/ArticleCard";

const AllArticles = () => {
    const axiosSecure = useAxiosSecure()
    const { data: articles = [], isLoading, error, refetch } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles')
            return res.data;
        }
    })

    return (
        <div>
            this is all articles page
            <Container sx={{maxWidth:100, margin:'0 auto'}}>
            <Grid container spacing={4}>
                
               {
                articles?.map(article=><ArticleCard key={article._id} article={article}/>)
               }
                
            </Grid>
            </Container>
        </div>
    );
};

export default AllArticles;