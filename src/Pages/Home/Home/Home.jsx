import Banner from "../Banner/Banner";
import CategoryRoutes from "../CategoryRoutes/CategoryRoutes";
import Offers from "../Offers/Offers";

const Home = () => {
    return (
        <div>
            <Offers />
            <Banner />
            <CategoryRoutes />
        </div>
    );
};

export default Home;