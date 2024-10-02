import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Button, Checkbox, Form, Input } from 'antd';
import { Controller, useForm } from "react-hook-form";

const Register = () => {
    const location = useLocation();
    const { control, handleSubmit, formState: { errors } } = useForm();

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
                    layout='vertical'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleSubmit(onFinish)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full Name"
                        validateStatus={errors.name ? 'error' : ''}
                        help={errors.name?.message}
                    >
                        <Controller
                            name='name'
                            control={control}
                            rules={{ required: 'Please input your name!' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className='rounded-none w-full'
                                    type='text'
                                    placeholder="Name"
                                    size="large"
                                />
                            )}
                        />
                    </Form.Item>
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
                        <Controller
                            name='agreement'
                            control={control}
                            rules={{
                                required: 'You must accept the agreement.'
                            }}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    I have read the <a className='text-primary' href="">agreement</a>.
                                </Checkbox>
                            )}
                        />
                        {errors.agreement && <p className='text-[#FF4D4F]'>{errors.agreement?.message}</p>}
                    </Form.Item>

                    <Form.Item>
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