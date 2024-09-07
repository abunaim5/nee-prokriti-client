import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Layout, Badge, Input, Empty } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import SideDrawer from "../../../Components/SideDrawer/SideDrawer";
import useSearchProducts from "../../../hooks/useSearchProducts";
import { useState } from "react";
import DrawerCard from "../../../Components/DrawerCard/DrawerCard";

const { Header } = Layout;

const navLinks = <>
    <li className='hover:text-[#00BADB]'><Link to='/'>Home</Link></li>
    <Badge size="small" color='#00BADB' className="text-lg hover:text-[#00BADB] cursor-pointer" count={'New'}>
        <li><Link>Shop</Link></li>
    </Badge>
    <li className='hover:text-[#00BADB]'><Link to='/products/all'>Products</Link></li>
    <Badge size="small" color='#FFA800' className="text-lg hover:text-[#00BADB] cursor-pointer" count={'Sale'}>
        <li><Link>Sale</Link></li>
    </Badge>
    <li className='hover:text-[#00BADB]'><Link>Support</Link></li>
</>

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [products, isProductLoading] = useSearchProducts({ searchText })

    const handleSearchDrawer = () => {
        setOpen(true)
    }

    const handleSearch = e => {
        const text = e.target.value;
        setSearchText(text);
    }

    const searchDrawerElem = <>
        <Input
            name='search'
            className='rounded-none w-full'
            placeholder="Search"
            size="large"
            suffix={<IoSearchOutline />}
            onChange={handleSearch}
        />
        <h1 className='mt-5 shadow-md text-base font-bold p-3'>Search results</h1>
        <div>
            <div className={`flex items-center justify-center h-96 ${products?.length ? 'hidden' : ''}`}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
            <div className='flex flex-col gap-6 mt-6'>
                {
                    products?.map(product => <DrawerCard key={product._id} product={product} loading={isProductLoading} />)
                }
            </div>
        </div>
    </>

    return (
        <Header className="bg-transparent h-fit py-6 px-4 lg:px-8 xl:px-16">
            <SideDrawer title='Search Products' place='right' open={open} setOpen={setOpen} drawerElem={searchDrawerElem} />
            <div className="flex items-center">
                <div className='flex items-center gap-2 flex-1'>
                    <HiOutlineMenuAlt1 className='block lg:hidden text-3xl' />
                    <div className="logo flex-1 text-2xl md:text-4xl font-extrabold">
                        NEEPROKRITI
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center justify-center gap-10 text-lg'>
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center justify-end gap-4 text-2xl flex-1">
                    <IoSearchOutline onClick={handleSearchDrawer} className="hover:text-[#00BADB] cursor-pointer" />
                    <FiUser className="hidden md:block hover:text-[#00BADB] cursor-pointer" />
                    <Badge size="small" className="hidden md:block text-2xl hover:text-[#00BADB] cursor-pointer" count={1}>
                        <IoMdHeartEmpty />
                    </Badge>
                    <Badge size="small" className="text-2xl hover:text-[#00BADB] cursor-pointer" count={7}>
                        <FiShoppingCart />
                    </Badge>
                </div>
            </div>
        </Header>
    );
};

export default Navbar;