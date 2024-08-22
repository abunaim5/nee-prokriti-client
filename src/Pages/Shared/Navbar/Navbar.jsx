import { Input } from "antd";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { Layout, Badge } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const navLinks = <>
    <li className='hover:text-[#00BADB]'><Link>Home</Link></li>
    <Badge size="small" className="text-base hover:text-[#00BADB] cursor-pointer" count={'New'}>
        <li><Link>Shop</Link></li>
    </Badge>
    <li className='hover:text-[#00BADB]'><Link>Products</Link></li>
    <Badge size="small" className="text-base hover:text-[#00BADB] cursor-pointer" count={'Sale'}>
        <li><Link>Sale</Link></li>
    </Badge>
    <li className='hover:text-[#00BADB]'><Link>Pages</Link></li>
    <li className='hover:text-[#00BADB]'><Link>Blog</Link></li>
</>


const Navbar = () => {
    return (
        <Header className="bg-transparent h-fit mt-6">
            <div className="flex items-center">
                <div className='flex-1'>
                    <Input type='search' name='search' size="large" className="w-full lg:w-[70%] rounded-[4px]" placeholder="Search for products" suffix={<IoIosSearch />} />
                </div>
                <div className="logo flex-1 text-4xl font-extrabold text-center">
                    Nee
                </div>
                <div className="flex items-center justify-end gap-4 text-2xl flex-1">
                    <FiUser className="hover:text-[#00BADB] cursor-pointer" />
                    <Badge size="small" className="text-2xl hover:text-[#00BADB] cursor-pointer" count={1}>
                        <IoMdHeartEmpty />
                    </Badge>
                    <Badge size="small" className="text-2xl hover:text-[#00BADB] cursor-pointer" count={1}>
                        <FiShoppingCart />
                    </Badge>
                </div>
            </div>
            <div className='pt-12 pb-6'>
                <ul className='flex items-center justify-center gap-10 text-base font-semibold'>
                    {navLinks}
                </ul>
            </div>
        </Header>
    );
};

export default Navbar;