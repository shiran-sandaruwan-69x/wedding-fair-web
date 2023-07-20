import React from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined, LoadingOutlined} from '@ant-design/icons';
import './LoginForm.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import videoFile from './login_form_video/proposing.mp4'
import BannerFormComp from "../banner_form/BannerFormComp";
import {Link} from "react-router-dom";


const LoginForm = () => {
    const handleSubmit = (values) => {
        console.log(values); // Handle form submission logic here
    };

    //---------------- login form validation -----------------------------------------


    const validateEmail = (_, value, callback) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
           // callback('Please enter a valid email address.');
            message.error('Please enter a valid email address.')
        } else {
            callback();
        }
    };

    const googleIconActionEvent=()=>{
        alert('gg')
    }

    // const carouselContainer = document.querySelector('.carousel-container');
    //
    // carouselContainer.addEventListener('click', () => {
    //     carouselContainer.classList.toggle('paused');
    // });


    return (

       <>

           <div className="video-background">
               <video autoPlay loop muted>
                   <source src={videoFile} type="video/mp4" />

               </video>

               <div className="login-page-container">
                   <div className="login-form-container">
                       <h1 className='login-form-hello'>Hello Again!</h1>
                       <h2>𝒘𝒆𝒅𝒅𝒊𝒏𝒈 𝒇𝒂𝒊𝒓 - 𝒍𝒐𝒈𝒊𝒏</h2>

                       <div className='login-page-content'>
                           <section>
                               <div className='user-div-icon'></div>
                               <div className='password-div-icon'></div>
                           </section>
                           <section>
                               <Form layout='vertical'>
                                   <Form.Item label='email' className='email'
                                              rules={[
                                                  {
                                                      required:true,
                                                      message:''
                                                  },
                                                  {
                                                      type:'email',
                                                      message:''
                                                  },
                                                  {
                                                      validator:validateEmail
                                                  }
                                              ]}
                                   >
                                       <Input />
                                   </Form.Item>
                                   <Form.Item label='password'>
                                       <Input/>
                                   </Form.Item>
                               </Form>
                           </section>

                       </div>
                       <section className='login-form-footer'>
                           <div className='recoveryPassword'>
                               <a href="#">Recovery Password</a>
                           </div>
                           <div className='login-div'>
                               <Button htmlType='submit' type='link'
                                       style={{width:'50%'}}
                                       className='login-btn'
                               >sign in<LoadingOutlined /></Button>
                           </div>
                           <div className='footer-continue-with'>
                               <h2>or continue with</h2>
                           </div>
                           <div className='footer-login-options'>
                               <div className='login-form-google-icon' onClick={googleIconActionEvent}></div>
                               <div className='login-form-fakebook-iocn'></div>
                               <div className='login-form-insagram-iocn'></div>
                           </div>
                           <div className='footer-register'>
                               <p className='not-member'>Not a member? </p> <Link className='register-now' to='/signup'>Register Now</Link>
                           </div>
                       </section>
                   </div>
               </div>

           </div>

       </>


    );
};

export default LoginForm;
