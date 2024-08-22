import manBg from '../../../assets/man.png'
import womenBg from '../../../assets/women.png'
import { Button } from 'antd';

const banners = [
    {
        title: 'Fashion For Her',
        subtitle: 'New Arrival',
        img: womenBg
    },
    {
        title: 'Fashion For Him',
        subtitle: 'New Arrival',
        img: manBg
    }
];

const Banner = () => {
    return (
        <div className='h-[120vh]'>
            <div className='flex h-full text-white'>
                {
                    banners.map((banner, idx) => <div key={idx} className='flex items-center h-full bg-no-repeat bg-center bg-cover object-contain flex-1' style={{ backgroundImage: `url(${banner.img})` }}>
                        <div className='px-16 w-full'>
                            <h3 className='text-2xl font-bold'>{banner.subtitle}</h3>
                            <h1 className='text-7xl mt-4 mb-7'>{banner.title}</h1>
                            <Button className='rounded-none px-14 py-7' size={'large'}>
                                Shop Now
                            </Button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Banner;