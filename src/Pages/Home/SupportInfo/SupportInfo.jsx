import { Image } from 'antd';
import delivery from '../../../assets/icons/fast-delivery.png'
import payment from '../../../assets/icons/payment.png'
import chat from '../../../assets/icons/chat.png'
import replay from '../../../assets/icons/return.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const supports = [
    {
        title: 'Fast Delivery',
        description: '70 Taka shipping on all orders',
        img: delivery
    },
    {
        title: 'Safe Payment',
        description: 'We ensure cash on delivery',
        img: payment
    },
    {
        title: '24/7 Online Support',
        description: '24 hours a day, 7 days a week',
        img: chat
    },
    {
        title: 'Free Return',
        description: 'Simply return it within 7 days',
        img: replay
    }
];

const SupportInfo = () => {
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1080: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    supports.map((support, idx) => <SwiperSlide key={idx}>
                        <div className='text-center'>
                            <Image
                                className='object-contain'
                                preview={false}
                                width={55}
                                src={support.img}
                            />
                            <h1 className='text-lg font-semibold mt-2'>{support.title}</h1>
                            <h5 className='text-base lg:text-lg mt-1'>{support.description}</h5>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SupportInfo;