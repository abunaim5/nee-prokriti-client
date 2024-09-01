import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Pagination } from 'antd';

const Products = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mb-16'>
            <BreadCrumb location={location} name='Products' />
            <div className='px-4 xl:px-16 my-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12'>
                    {
                        products.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
                </div>
            </div>
            <Pagination defaultCurrent={1} total={100} align='center' />
        </div>
    );
};

export default Products;