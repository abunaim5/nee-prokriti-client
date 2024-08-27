import Banner from "../Banner/Banner";
import CategoryRoutes from "../CategoryRoutes/CategoryRoutes";
import NewProducts from "../NewProducts/NewProducts";
import Offers from "../Offers/Offers";

const Home = () => {
    return (
        <div>
            {/* <Offers /> */}
            <Banner />
            <CategoryRoutes />
            <NewProducts />
        </div>
    );
};

export default Home;