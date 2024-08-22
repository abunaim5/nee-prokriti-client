import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Layout } from "antd";

const { Content } = Layout;

const Main = () => {
    return (
        <Layout className='bg-white'>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default Main;