import { Card, Image } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
    const {name, image, price} = product;

    return (
        <Card
            className='border-none cursor-pointer rounded-none'
            styles={{
                body: { padding: 0 }
            }}
            cover={<Image preview={false} alt="example" className='border-[1px]' style={{ borderRadius: 0 }} src={image} />}
        >
            <div className='flex items-center justify-between border-[1px] p-3 mt-4'>
                <div>
                    <h1 className='text-lg hover:text-[#00BADB] cursor-pointer'>{name}</h1>
                    <h3 className='text-base'>&#2547;{price}</h3>
                </div>
                <div className='flex items-center gap-3 text-xl'>
                    <div className='border-r-[1px] h-10' />
                    <FiShoppingCart />
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;