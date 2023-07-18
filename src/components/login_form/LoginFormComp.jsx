import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoginForm = () => {
    const handleSubmit = (values) => {
        console.log(values); // Handle form submission logic here
    };

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <h2>𝒘𝒆𝒅𝒅𝒊𝒏𝒈 𝒇𝒂𝒊𝒓 - 𝒍𝒐𝒈𝒊𝒏</h2>

                <div className='login-page-content'>
                   <section>
                       <div className='user-div-icon'></div>
                       <div className='password-div-icon'></div>
                   </section>
                    <section>
                        <Form layout='vertical'>
                            <Form.Item label='email' className='email'>
                                <Input/>
                            </Form.Item>
                            <Form.Item label='password'>
                                <Input/>
                            </Form.Item>
                        </Form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
