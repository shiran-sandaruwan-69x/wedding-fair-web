import React, {useState} from 'react';
import './MainPageComp.css'
import {Avatar, Button, Menu} from "antd";
import {
    AppstoreAddOutlined,
    AppstoreOutlined, ContainerOutlined, DesktopOutlined,
    HomeOutlined,
    MailOutlined,
    PieChartOutlined,
    SettingOutlined, UserOutlined
} from "@ant-design/icons";
function MainPageComp(props) {

    //------------ this is for header items -----------------------
    const [current, setCurrent] = useState('mail');

    const navItems = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },

    ]

    //------------ this is left side menu items --------------------

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const leftSideItems = [
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),

        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
    ];

        return (
            <section className='main-page'>
                <section className='nav-bar-main'>
                    <div className='nav-bar-logo'>
                        <h2 className='nav-bar-logo-h2'>𝒘𝒆𝒅𝒅𝒊𝒏𝒈 𝒇𝒂𝒊𝒓</h2>
                    </div>
                    <div className='nav-bar-menu'><Menu selectedKeys={[current]} mode="horizontal" items={navItems}/>
                    </div>
                    <div className='nav-bar-login'>
                        <Avatar
                            className='login-button'
                            style={{
                                backgroundColor: '#0a0a98',
                            }}
                            icon={<UserOutlined />}
                        />
                    </div>
                </section>
                <section className='left-side-menu'>
                    <Menu
                        style={{
                            width: 256,
                        }}
                        mode="vertical"
                        items={leftSideItems}
                    />
                </section>

            </section>
        );

}

export default MainPageComp;