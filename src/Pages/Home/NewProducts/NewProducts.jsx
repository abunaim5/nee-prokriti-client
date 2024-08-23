import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const NewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mb-10 px-4 lg:px-16'>
            <SectionTitle
                title='New Arrivals'
                description='Here’s some of our most popular products people are in love with.'
            />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12'>
                {
                    products.map((product, idx) => <ProductCard key={idx} product={product} />)
                }
            </div>
        </div>
    );
};

export default NewProducts;