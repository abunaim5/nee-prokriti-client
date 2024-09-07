import { useLoaderData, useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Checkbox, Pagination, Select } from 'antd';
import useProducts from '../../hooks/useProducts';
import { useState } from 'react';
import { Empty } from 'antd';
import { CiFilter } from 'react-icons/ci';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
// import { IoSearchOutline } from 'react-icons/io5';
// import { debounce } from 'lodash';

const Products = () => {
    const location = useLocation();
    const collection = location.pathname.split('/')[2]
    const [open, setOpen] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchText, setSearchText] = useState('');
    const [sortPriceVal, setSortPriceVal] = useState('default');
    // const navigate = useNavigate();
    const { count } = useLoaderData();
    const [products, isProductLoading] = useProducts({ currentPage, itemsPerPage, sortPriceVal, collection });
    const axiosPublic = useAxiosPublic();

    const { data: categories = [], isPending: isCategoriesLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories');
            return res.data;
        }
    });

    // console.log(categories);
    const handleFilterDrawer = () => {
        setOpen(true)
    }

    // handle pagination
    const handlePageAndItemsPerPage = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    };

    const handleFilterCategory = checkedValues => {

        console.log(checkedValues);
    }

    // handle sorting by price
    const onChange = (value) => {
        setSortPriceVal(value);
    };

    // const handleSearch = e => {
    //     const text = e.target.value;
    //     setSearchText(text);
    // }

    // useEffect(() => {
    //     const debouncedNavigate = debounce(() => {
    //         const url = searchText ? `/products/${collection}?search=${encodeURIComponent(searchText)}` : `/products/${collection}`
    //         navigate(url);
    //     }, 500);
    //     debouncedNavigate();
    //     return () => {
    //         debouncedNavigate.cancel();
    //     };
    // }, [collection, searchText, navigate])

    if (isProductLoading || isCategoriesLoading) {
        return <h1>Loading...</h1>
    };

    const filterDrawerElem = <>
        <h1 className='shadow-md text-base font-bold p-3'>Categories</h1>
        <div className='flex flex-col gap-3 mt-5'>
            <Checkbox.Group className='gap-3 flex-col' options={categories.map(category => ({
                label: `${category.category.charAt(0).toUpperCase() + category.category.slice(1)} (${category.totalProducts})`,
                value: category.category,
                name: category.category
            }))} onChange={handleFilterCategory} />
        </div>
    </>

    return (
        <div className='mb-16'>
            <BreadCrumb location={location} />
            <SideDrawer title='Filter Products' place='left' open={open} setOpen={setOpen} drawerElem={filterDrawerElem} />
            <div className='px-4 xl:px-16 my-16'>
                <div className='flex gap-4 items-center justify-between'>
                    {/* <Input
                        className='rounded-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
                        placeholder="Search products"
                        size="large"
                        suffix={<IoSearchOutline />}
                        onChange={handleSearch}
                    /> */}

                    <div onClick={handleFilterDrawer} className='flex items-center gap-1 text-2xl hover:text-[#00BADB] cursor-pointer'>
                        <CiFilter />
                        <h4 className='text-lg'>Filter</h4>
                    </div>
                    <Select
                        className='w-36 rounded-none'
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