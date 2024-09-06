import { Card, Image } from "antd";

const DrawerCard = ({product, loading}) => {
    const { name, image, price} = product;

    return (
        <Card
            loading={loading ? true : false}
            bordered={false}
            className='flex gap-3 rounded-none'
            styles={{
                body: { padding: 0, paddingRight: 12 }
            }}
            cover={
                <Image preview={false} alt={`${name} image`} className='max-w-24 cursor-pointer' src={image} />
            }
        >
            <h1 className='text-base font-bold hover:text-[#00BADB] cursor-pointer text-gray-600'>{name}</h1>
            <p className='mt-2'>&#2547;{price}</p>
        </Card>
    );
};

export default DrawerCard;