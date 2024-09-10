import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Badge } from "antd";
import useProducts from "../../../hooks/useProducts";

const NewProducts = () => {
    const [products, isProductLoading] = useProducts({currentPage: 1, itemsPerPage: 10, collection: 'all'});

    if(isProductLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='mb-10 px-4 xl:px-16 mt-16'>
            <SectionTitle
                title='New Arrivals'
                description='Here’s some of our most popular products people are in love with.'
            />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12'>
                {
                    products.map((product, idx) => <Badge.Ribbon key={idx} text="New" placement='start' color="volcano">
                        <ProductCard product={product} />
                    </Badge.Ribbon>)
                }
            </div>
        </div>
    );
};

export default NewProducts;