import { Container } from "@mui/material";
import PricingPlan from "./PricingPlan";
import ArticleCarosole from "./ArticleCarosole/ArticleCarosole";
import Publisher from "./publisher/Publisher";
import Statistic from "./Statistic";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            
            
            <ArticleCarosole/>
            <PricingPlan/>
            <Publisher/>
            <Statistic/>
           
        </div>
    );
};

export default Home;