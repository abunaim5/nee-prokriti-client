import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {
    const location = useLocation();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <BreadCrumb location={location} />
            <div className='min-h-[calc(100vh-272px)] flex items-center py-10'>
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
                        label="Full Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
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
                            type='text'
                            placeholder="Name"
                            size="large"
                        />
                    </Form.Item>
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
                            type='email'
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
                            type='password'
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Button type="primary" htmlType="submit" size='large' className='w-full rounded-none'>
                            Sign Up
                        </Button>
                        <h5 className='mt-4 text-center'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></h5>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;