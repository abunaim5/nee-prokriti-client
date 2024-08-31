import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';

const Products = () => {
    const location = useLocation();


    return (
        <div>
            <BreadCrumb location={location} name='Products' />
        </div>
    );
};

export default Products;