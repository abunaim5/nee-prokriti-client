import Banner from "../Banner/Banner";
import CategoryRoutes from "../CategoryRoutes/CategoryRoutes";
import Collections from "../Collections/Collections";
import NewProducts from "../NewProducts/NewProducts";

const Home = () => {
    return (
        <div>
            {/* <Offers /> */}
            <Banner />
            <Collections />
            {/* <CategoryRoutes /> */}
            <NewProducts />
        </div>
    );
};

export default Home;