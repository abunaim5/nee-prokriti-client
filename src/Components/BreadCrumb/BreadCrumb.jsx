import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ location, name }) => {
    const { pathname } = location;
    const path = pathname.split('/');

    return (
        <div className='flex flex-col items-center gap-2 justify-center py-12 bg-gray-300 text-white'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <Breadcrumb
                className='font-bold text-base'
                items={[
                    {
                        title: <Link to='/'>Home</Link>,
                    },
                    {
                        title: <span className='text-white'>{path[1].charAt(0).toUpperCase() + path[1].slice(1)}</span>
                    }
                ]}
            />
        </div>
    );
};

export default BreadCrumb;