import banner1 from '../../../assets/banner2.png'
import banner2 from '../../../assets/banner3.png'
import { Button } from 'antd';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination, Arrow } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const banners = [
    {
        title: 'Fashion For Her',
        subtitle: 'New Arrival',
        img: banner1
    },
    {
        title: 'Fashion For Her',
        subtitle: 'New Arrival',
        img: banner2
    },
    {
        title: 'Fashion For Her',
        subtitle: 'New Arrival',
        img: banner1
    },
];


const Banner = () => {
    const _plugins = [
        new AutoPlay({ duration: 4000 }),
        new Arrow(),
        new Pagination({ type: 'scroll' })
    ];

    return (
        <div className='h-[320px] md:h-[450px] lg:h-[calc(100vh-88px)]'>
            <Flicking circular={true} plugins={_plugins}>
                {
                    banners.map((banner, idx) => <div key={idx} className='w-full h-full bg-no-repeat bg-right-top md:bg-top bg-cover object-contain flex-1' style={{ backgroundImage: `url(${banner.img})` }}>
                        <div className='flex items-center px-16 xl:px-72 h-full w-full text-white'>
                            <div className='w-full'>
                                <h3 className='text-xl md:text-2xl lg:text-3xl'>{banner.subtitle}</h3>
                                <h1 className='text-3xl md:text-6xl lg:text-8xl mt-2 md:mt-4 mb-4 md:mb-7'>{banner.title}</h1>
                                <Button className='rounded-none px-5 md:px-14 md:py-7' size={'large'}>
                                    Shop Now
                                </Button>
                            </div>
                        </div>

                    </div>)
                }
                <ViewportSlot>
                    <span className="flicking-arrow-prev"></span>
                    <span className="flicking-arrow-next"></span>
                    <div className="flicking-pagination"></div>
                </ViewportSlot>
            </Flicking>
            {/* <div className='flicking-pagination' ref={paginationRef} /> */}
        </div>
    );
};

export default Banner;