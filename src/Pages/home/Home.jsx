import { Container } from "@mui/material";
import PricingPlan from "./PricingPlan";
import ArticleCarosole from "./ArticleCarosole/ArticleCarosole";
import Publisher from "./publisher/Publisher";
import Statistic from "./Statistic";
import HomModal from "./HomModal";
import Reviews from "../../Components/Review/Reviews";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            
            <HomModal/>
            <ArticleCarosole/>
            <PricingPlan/>
            <Publisher/>
            <Statistic/>
            <Reviews/>
            
           
        </div>
    );
};

export default Home;