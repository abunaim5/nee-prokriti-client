import women from '../../../assets/women.png'
import men from '../../../assets/1.png'
import kid from '../../../assets/3.png'
import accessories from '../../../assets/accessories.png'
import homeDecor from '../../../assets/home-decor.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const collections = [
    {
        img: women,
        btnName: 'Women',
        colSpan: 2
    },
    {
        img: men,
        btnName: 'Men',
        colSpan: 2
    },
    {
        img: kid,
        btnName: 'Kids',
        colSpan: 2
    },
    {
        img: accessories,
        btnName: 'Accessories',
        colSpan: 3
    },
    {
        img: homeDecor,
        btnName: 'Home Decor',
        colSpan: 3
    },
];

const Collections = () => {
    return (
        <div className='min-h-screen grid grid-cols-6 grid-rows-1 md:grid-rows-2 gap-4 mt-16 px-4 lg:px-8 xl:px-16'>
            {
                collections.map((collection, idx) => {
                    let colSpanClass = '';
                    switch (collection.colSpan) {
                        case 2:
                            colSpanClass = 'md:col-span-2';
                            break;
                        case 3:
                            colSpanClass = 'md:col-span-3'
                            break;
                        default:
                            colSpanClass = 'md:col-span-1'
                    }
                    return (
                        <Link key={idx} className={`col-span-6 ${colSpanClass}`}>
                            <div className={`flex items-end justify-center pb-6 h-[50vh] lg:h-[85vh] bg-no-repeat bg-top bg-cover`} style={{ backgroundImage: `url(${collection.img})` }}>
                                <Button className='rounded-none w-[145px] lg:w-[190px] px-7 lg:px-14 py-5 lg:py-7' size={'large'}>
                                    {collection.btnName}
                                </Button>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Collections;