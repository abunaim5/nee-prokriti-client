import { useLoaderData, useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Pagination, Select } from 'antd';
import useProducts from '../../hooks/useProducts';
import { useState } from 'react';

const Products = () => {
    const location = useLocation();
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [sortPriceVal, setSortPriceVal] = useState('default');
    const { count } = useLoaderData();
    const [products, isProductLoading] = useProducts({ currentPage, itemsPerPage, sortPriceVal });

    // handle pagination
    const handlePageAndItemsPerPage = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    };

    // handle sorting by price
    const onChange = (value) => {
        setSortPriceVal(value);
    };

    if (isProductLoading) {
        return <h1>Loading...</h1>
    };

    return (
        <div className='mb-16'>
            <BreadCrumb location={location} name='Products' />
            <div className='px-4 xl:px-16 my-16'>
                <div className='flex justify-end'>
                    <Select
                        style={{
                            width: 120,
                            borderRadius: 0
                        }}
                        placeholder="Sort by price"
                        optionFilterProp="label"
                        onChange={onChange}
                        options={[
                            {
                                value: 'default',
                                label: 'Default',
                            },
                            {
                                value: 'low',
                                label: 'Low to High',
                            },
                            {
                                value: 'high',
                                label: 'High to Low',
                            },
                        ]}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12'>
                    {
                        products.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
                </div>
            </div>
            <Pagination onChange={handlePageAndItemsPerPage} total={count} align='center' />
        </div>
    );
};

export default Products;