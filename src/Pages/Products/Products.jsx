import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Pagination, Select } from 'antd';
import useProducts from '../../hooks/useProducts';
import { useEffect, useState } from 'react';
import { Input, Empty } from 'antd';
import { IoSearchOutline } from 'react-icons/io5';
import { debounce } from 'lodash';

const Products = () => {
    const location = useLocation();
    const collection = location.pathname.split('/')[2]
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [sortPriceVal, setSortPriceVal] = useState('default');
    const navigate = useNavigate();
    const { count } = useLoaderData();
    const [products, isProductLoading] = useProducts({ currentPage, itemsPerPage, sortPriceVal, searchText, collection });

    // handle pagination
    const handlePageAndItemsPerPage = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    };

    // handle sorting by price
    const onChange = (value) => {
        setSortPriceVal(value);
    };

    const handleSearch = e => {
        const text = e.target.value;
        setSearchText(text);
    }

    useEffect(() => {
        const debouncedNavigate = debounce(() => {
            const url = searchText ? `/products/${collection}?search=${encodeURIComponent(searchText)}` : `/products/${collection}`
            navigate(url);
        }, 500);
        debouncedNavigate();
        return () => {
            debouncedNavigate.cancel();
        };
    }, [collection, searchText, navigate])

    if (isProductLoading) {
        return <h1>Loading...</h1>
    };

    return (
        <div className='mb-16'>
            <BreadCrumb location={location} />
            <div className='px-4 xl:px-16 my-16'>
                <div className='flex gap-4 items-center justify-between'>
                    <Input
                        className='rounded-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
                        placeholder="Search products"
                        size="large"
                        suffix={<IoSearchOutline />}
                        onChange={handleSearch}
                    />
                    <Select
                        style={{
                            width: 150,
                            borderRadius: 0
                        }}
                        size='large'
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
                <div className={`mt-12 ${count && 'hidden'}`}>
                    <Empty />
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12 ${!count && 'hidden'}`}>
                    {
                        products.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
                </div>
            </div>
            <Pagination className={!count && 'hidden'} onChange={handlePageAndItemsPerPage} total={count} align='center' responsive={true} />
        </div>
    );
};

export default Products;