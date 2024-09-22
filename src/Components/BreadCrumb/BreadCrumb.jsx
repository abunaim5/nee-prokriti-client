import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import man from '../../assets/man.png'

const BreadCrumb = ({ location }) => {
    const { pathname } = location;
    const path = pathname.split('/');
    let route = ''
    if (pathname === '/login') {
        route = path[1].charAt(0).toUpperCase() + path[1].slice(1);
    } else {
        route = path[2].charAt(0).toUpperCase() + path[2].slice(1);
    }
    // const route = path[2].charAt(0).toUpperCase() + path[2].slice(1);
    let currentRoute = ''
    if (route === 'All') {
        currentRoute = 'Products'
    } else {
        currentRoute = route;
    }
    // console.log(path, route);

    return (
        <div style={{ backgroundImage: `url(${man})` }} className='flex flex-col items-center gap-2 justify-center py-16 text-white bg-no-repeat bg-cover bg-center'>
            <h1 className='text-xl font-semibold'>{currentRoute}</h1>
            <Breadcrumb
                className='font-bold text-base'
                items={[
                    {
                        title: <Link to='/'>Home</Link>
                    },
                    {
                        title: <span className='text-white'>{currentRoute}</span>
                    }
                ]}
            />
        </div>
    );
};

export default BreadCrumb;