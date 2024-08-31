import { Link } from "react-router-dom";
import { footContents } from "../../../constants/constants";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='text-lg bg-[#F6F6F8]'>
            <div className='flex justify-between px-16 py-28'>
                {
                    footContents.map((content, idx) => <div key={idx}>
                        <h1 className='text-2xl mb-4'>{content.name}</h1>
                        <p className='w-2/3'>{content.description}</p>
                        <div className={`flex gap-2 ${content.cls}`}>
                            {
                                content.routes.map((route, idx) => <Link key={idx} className={`text-gray-500 hover:text-[#00BADB] ${route.name === FaFacebookSquare ? 'mt-2 text-3xl' : route.name === FaInstagramSquare ? 'mt-2 text-3xl' : ''}`}>{route.name === FaFacebookSquare ? <FaFacebookSquare /> : route.name === FaInstagramSquare ? <FaInstagramSquare /> : route.name}</Link>)
                            }
                        </div>
                    </div>)
                }
            </div>
            <div className='px-16 flex items-center justify-between py-4 bg-white'>
                <p>All Rights Reserved &copy; {currentYear} Neeprokriti - Developed by <a href='https://www.linkedin.com/in/abunaim7' target='_blank' className='underline'>Abu Naim</a></p>
                <div className='flex items-center gap-5'>
                    <Link>Shop</Link>
                    <Link>About Us</Link>
                    <Link>Contact Us</Link>
                    <Link>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;