import manBg from '../../../assets/man.png'
import womenBg from '../../../assets/women.png'
import { Button } from 'antd';

const Banner = () => {
    return (
        <div className='h-[120vh]'>
            <div className='flex h-full text-white'>
                <div className='flex items-center h-full bg-no-repeat bg-center bg-cover object-contain flex-1' style={{ backgroundImage: `url(${womenBg})` }}>
                    <div className='px-16 w-full'>
                        <h3 className='text-2xl font-bold'>New Arrival</h3>
                        <h1 className='text-7xl mt-4 mb-7'>Fashion For Her</h1>
                        <Button className='rounded-none px-14 py-7' size={'large'}>
                            Shop Now
                        </Button>
                    </div>
                </div>
                <div className='flex items-center h-full bg-no-repeat bg-center  bg-cover object-contain flex-1' style={{ backgroundImage: `url(${manBg})` }}>
                    <div className='px-16 w-full'>
                        <h3 className='text-2xl font-bold'>New Arrival</h3>
                        <h1 className='text-7xl mt-4 mb-7'>Fashion For Him</h1>
                        <Button className='rounded-none px-14 py-7' size={'large'}>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;