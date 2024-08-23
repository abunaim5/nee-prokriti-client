import { Image } from 'antd';
import pants from '../../../assets/icons/pants.png'
import dress from '../../../assets/icons/dress.png'
import shoes from '../../../assets/icons/shoes.png'
import cap from '../../../assets/icons/cap.png'
import handbag from '../../../assets/icons/handbag.png'
import jacket from '../../../assets/icons/jacket.png'
import diamond from '../../../assets/icons/diamond-ring.png'
import tshirt from '../../../assets/icons/tshirt.png'
import glasses from '../../../assets/icons/glasses.png'
import { Link } from 'react-router-dom';

const routes = [
    {
        name: 'Pants',
        img: pants,
        path: '/'
    },
    {
        name: 'Dresses',
        img: dress,
        path: '/'
    },
    {
        name: 'Shoes',
        img: shoes,
        path: '/'
    },
    {
        name: 'Caps & Hats',
        img: cap,
        path: '/'
    },
    {
        name: 'Handbags',
        img: handbag,
        path: '/'
    },
    {
        name: 'Sweaters & Jackets',
        img: jacket,
        path: '/'
    },
    {
        name: 'Jewelry',
        img: diamond,
        path: '/'
    },
    {
        name: 'T-shirt',
        img: tshirt,
        path: '/'
    },
    {
        name: 'Glasses',
        img: glasses,
        path: '/'
    }
]

const CategoryRoutes = () => {
    return (
        <div className='flex items-center justify-between gap-2 px-20 py-24'>
            {
                routes.map((route, idx) => <Link key={idx} to={route.path}>
                    <div className='text-base text-center hover:text-[#00BADB]'>
                        <Image
                            className='object-contain'
                            preview={false}
                            width={80}
                            src={route.img}
                        />
                        <h3 className='mt-2'>{route.name}</h3>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default CategoryRoutes;