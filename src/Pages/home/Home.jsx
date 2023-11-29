import { Container } from "@mui/material";
import PricingPlan from "./PricingPlan";
import ArticleCarosole from "./ArticleCarosole/ArticleCarosole";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            
            
            <ArticleCarosole/>
            <PricingPlan/>
           
        </div>
    );
};

export default Home;