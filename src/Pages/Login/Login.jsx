import { Button, Checkbox, Divider, Flex, Form, Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { FcGoogle } from 'react-icons/fc';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const location = useLocation();

    return (
        <>
            <BreadCrumb location={location} />
            <div className='h-[calc(100vh-272px)] flex items-center py-6'>
                <Form
                    className='mx-auto w-full md:w-[420px] px-4 md:px-0'
                    name="basic"
                    layout='vertical'
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    style={{
                        // maxWidth: 400,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        layout="vertical"
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Input
                            className='rounded-none w-full'
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        layout="vertical"
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Input.Password
                            className='rounded-none w-full'
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password?</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Button type="primary" htmlType="submit" size='large' className='w-full rounded-none'>
                            Sign In
                        </Button>
                        <Divider plain>Login with social account</Divider>
                        <Button type="primary" ghost size='large' className='w-full rounded-none text-2xl'>
                            <FcGoogle />
                        </Button>
                        <h5 className='mt-3 text-center'>New Customer? <Link to='/register' className='text-primary'>Create Account</Link></h5>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;