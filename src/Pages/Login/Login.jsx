import { Button, Checkbox, Divider, Flex, Form, Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { FcGoogle } from 'react-icons/fc';
import { Controller, useForm } from 'react-hook-form';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const location = useLocation();
    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <BreadCrumb location={location} />
            <div className='min-h-[calc(100vh-272px)] flex items-center py-10'>
                <Form
                    className='mx-auto w-full md:w-[420px] px-4 md:px-0'
                    layout='vertical'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleSubmit(onFinish)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        validateStatus={errors.email ? 'error' : ''}
                        help={errors.email?.message}
                    >
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'Please input your email!',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email format.'
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className='rounded-none w-full'
                                    type='email'
                                    placeholder="Email"
                                    size="large"
                                />
                            )}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password?.message}
                    >
                        <Controller
                            name='password'
                            control={control}
                            rules={{
                                required: 'Please input your password!',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long.'
                                }
                            }}
                            render={({ field }) => (
                                <Input.Password
                                    {...field}
                                    className='rounded-none w-full'
                                    type='password'
                                    placeholder="Password"
                                    size="large"
                                />
                            )}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item noStyle>
                                <Controller
                                    name='remember'
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                        >
                                            Remember me.
                                        </Checkbox>
                                    )}
                                />
                            </Form.Item>
                            <a href="">Forgot password?</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' className='w-full rounded-none'>
                            Sign In
                        </Button>
                        <Divider plain>Login with social account</Divider>
                        <Button type="primary" ghost size='large' className='w-full rounded-none text-2xl'>
                            <FcGoogle />
                        </Button>
                        <h5 className='mt-4 text-center'>New Customer? <Link to='/register' className='text-primary'>Register</Link></h5>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;