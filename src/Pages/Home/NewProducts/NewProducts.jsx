import { FiShoppingCart } from "react-icons/fi";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Card, Image } from 'antd';

const NewProducts = () => {
    return (
        <div className='mb-10 px-16'>
            <SectionTitle
                title='New Arrivals'
                description='Here’s some of our most popular products people are in love with.'
            />
            <div className='grid grid-cols-5 gap-5 mt-12'>
                <Card
                    className='border-none cursor-pointer rounded-none'
                    styles={{
                        body: { padding: 0, }
                    }}
                    cover={<Image alt="example" className='border-[1px]' style={{ borderRadius: 0,  }} src="https://i.postimg.cc/wjXSCGDx/Untitled-design-3.png" />}
                >
                    <div className='flex items-center justify-between border-[1px] p-4 mt-5'>
                        <div>
                            <h1 className='text-lg hover:text-[#00BADB] cursor-pointer'>Sunsets Lotus Kauai Keyhole</h1>
                            <h3 className='text-base'>$550</h3>
                        </div>
                        <div className='flex items-center gap-3 text-xl'>
                            <div className='border-r-[1px] h-12' />
                            <FiShoppingCart />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default NewProducts;