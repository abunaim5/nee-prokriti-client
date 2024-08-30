import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import NewProducts from "../NewProducts/NewProducts";
import SupportInfo from "../SupportInfo/SupportInfo";

const Home = () => {
    return (
        <div>
            <Banner />
            <Collections />
            <NewProducts />
            <SupportInfo />
        </div>
    );
};

export default Home;