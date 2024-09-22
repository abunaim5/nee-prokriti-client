import { Card, Image } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
    const { name, image, price } = product;

    return (
        <Card
            className='border-none rounded-none'
            styles={{
                body: { padding: 0 }
            }}
            cover={<div className='overflow-hidden border-[1px]' style={{ borderRadius: 0 }}>
                <Image preview={false} alt={`${name} image`} className='hover:scale-110 transform transition-transform ease-in-out duration-1000 cursor-pointer' src={image} />
            </div>}
        >
            <div className='flex items-center justify-between border-[1px] p-3 mt-4'>
                <div>
                    <h1 className='text-lg hover:text-primary cursor-pointer'>{name}</h1>
                    <div className='flex items-center gap-3'>
                        <h3 className='text-base'>&#2547;{price}</h3>
                        <h3 className='text-base text-gray-400 line-through'>&#2547;{price}</h3>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-xl'>
                    <div className='border-r-[1px] h-10' />
                    <FiShoppingCart className='cursor-pointer' />
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;