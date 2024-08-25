import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Layout, FloatButton } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";

const { Content } = Layout;

const Main = () => {
    return (
        <Layout className='bg-white'>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
            <FloatButton.BackTop
                icon={<RiArrowUpSLine />}
                className='rounded-none w-14 h-14 shadow-md'
            />
        </Layout>
    );
};

export default Main;