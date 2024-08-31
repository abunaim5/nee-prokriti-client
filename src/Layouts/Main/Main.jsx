import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Layout, FloatButton } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";
import Footer from "../../Pages/Shared/Footer/Footer";

const { Content } = Layout;

const Main = () => {
    return (
        <Layout className='bg-white'>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
            <Footer />
            <FloatButton.BackTop
                shape='square'
                icon={<RiArrowUpSLine />}
                className='rounded-none shadow-md'
            />
        </Layout>
    );
};

export default Main;