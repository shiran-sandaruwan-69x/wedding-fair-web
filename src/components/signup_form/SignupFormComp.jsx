import React from 'react';
import videoFile from "../login_form/login_form_video/proposing.mp4";
import {Button, Form, Input} from "antd";
import {GoogleOutlined, LoadingOutlined, LockOutlined, UserAddOutlined} from "@ant-design/icons";

import './SignupFormComp.css'
import {Link} from "react-router-dom";

function SignupFormComp(props) {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={videoFile} type="video/mp4" />

            </video>

            <div className="signup-page-container">
                <div className="signup-form-container">
                    <div className='header-signup-page'>
                        <h2 className='header-signup-h1'>Hello There! SignUp Here</h2>
                    </div>
                    <div className='signup-form-div'>
                        <Form layout='vertical' className='signup-form'>

                            <Form.Item label='user name'>
                                <Input prefix={<UserAddOutlined className='form-icons'/>}/>
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input prefix={<GoogleOutlined className='form-icons'/>}/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password prefix={<LockOutlined className='form-icons'/>}/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined className='form-icons'/>}/>
                            </Form.Item>



                        </Form>
                    </div>
                    <div className='signup-footer-page'>
                        <div className='signup-button-div'>
                            <Button type='link' className='signup-button'>sign up<LoadingOutlined className='signup-button-loading-icon'/></Button>
                        </div>
                        <div className='footer-register'>
                            <p className='already-member'>Already a member? </p> <Link className='signin-now' to='/signin' >SignIn Now</Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignupFormComp;