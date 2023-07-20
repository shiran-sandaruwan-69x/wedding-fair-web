import React from 'react';
import videoFile from "../login_form/login_form_video/proposing.mp4";
import {Button, Form, Input} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import './SignupFormComp.css'

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
                                <Input/>
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
                                <Input />
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
                                <Input.Password />
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
                                <Input.Password />
                            </Form.Item>



                        </Form>
                    </div>
                    <div className='signup-footer-page'>
                        <div className='signup-button-div'>
                            <Button type='link' className='signup-button'>sign up</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignupFormComp;