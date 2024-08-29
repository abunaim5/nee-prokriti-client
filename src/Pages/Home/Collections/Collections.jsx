import women from '../../../assets/women.png'
import men from '../../../assets/1.png'
import kid from '../../../assets/3.png'
import accessories from '../../../assets/accessories.png'
import homeDecor from '../../../assets/home-decor.png'
import { Button } from 'antd';

const collections = [
    {
        img: women,
        btnName: 'Women',
        colSpan: 'col-span-2'
    },
    {
        img: men,
        btnName: 'Men',
        colSpan: 'col-span-2'
    },
    {
        img: kid,
        btnName: 'Kids',
        colSpan: 'col-span-2'
    },
    {
        img: accessories,
        btnName: 'Accessories',
        colSpan: 'col-span-3'
    },
    {
        img: homeDecor,
        btnName: 'Home Decor',
        colSpan: 'col-span-3'
    },
]

const Collections = () => {
    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 mt-16 px-4 lg:px-8 xl:px-16'>
            {
                collections.map((collection, idx) => <div key={idx} className={`flex items-end justify-center pb-6 ${collection.colSpan} h-[50vh] lg:h-[85vh] bg-no-repeat bg-top bg-cover`} style={{ backgroundImage: `url(${collection.img})` }}>
                    <Button className='rounded-none w-[145px] lg:w-[190px] px-7 lg:px-14 py-5 lg:py-7' size={'large'}>
                        {collection.btnName}
                    </Button>
                </div>)
            }
        </div>
    );
};

export default Collections;