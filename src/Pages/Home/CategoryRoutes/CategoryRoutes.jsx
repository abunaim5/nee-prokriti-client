import { Image } from 'antd';
import pants from '../../../assets/icons/pants.png'
import dress from '../../../assets/icons/dress.png'
import shoes from '../../../assets/icons/shoes.png'
import cap from '../../../assets/icons/cap.png'
import handbag from '../../../assets/icons/handbag.png'
import jacket from '../../../assets/icons/jacket.png'
import diamond from '../../../assets/icons/diamond-ring.png'
import tshirt from '../../../assets/icons/tshirt.png'
import glasses from '../../../assets/icons/glasses.png'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const routes = [
    {
        name: 'Pants',
        img: pants,
        path: '/'
    },
    {
        name: 'Dresses',
        img: dress,
        path: '/'
    },
    {
        name: 'Shoes',
        img: shoes,
        path: '/'
    },
    {
        name: 'Caps & Hats',
        img: cap,
        path: '/'
    },
    {
        name: 'Handbags',
        img: handbag,
        path: '/'
    },
    {
        name: 'Sweaters & Jackets',
        img: jacket,
        path: '/'
    },
    {
        name: 'Jewelry',
        img: diamond,
        path: '/'
    },
    {
        name: 'T-shirt',
        img: tshirt,
        path: '/'
    },
    {
        name: 'Glasses',
        img: glasses,
        path: '/'
    }
]

const CategoryRoutes = () => {
    return (
        <div className='py-20'>
            <Swiper
                height={50}
                slidesPerView={1}
                spaceBetween={10}
                style={{
                    paddingBottom: 45,
                    '--swiper-pagination-color': '#00BADB'
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                    1080: {
                        slidesPerView: 9,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    routes.map((route, idx) => <SwiperSlide key={idx}>
                        <Link to={route.path}>
                            <div className='font-medium text-center hover:text-[#00BADB]'>
                                <Image
                                    className='object-contain'
                                    preview={false}
                                    width={80}
                                    src={route.img}
                                />
                                <h3 className='mt-2'>{route.name}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CategoryRoutes;