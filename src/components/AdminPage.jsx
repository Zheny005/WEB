import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AuthModal from './Authorization';
import '../App.css';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const removeItem = index => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <Layout className="admin-layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2" onClick={() => setModalVisible(true)}>Auth Modal</Menu.Item>
                    <Menu.Item key="3" onClick={addItem}>Add item</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '215px 50px' }}>

                {modalVisible && (
                    <AuthModal
                        onClose={() => setModalVisible(false)}
                    />
                )}

                <TransitionGroup className="item-list">
                    {items.map((item, index) => (
                        <CSSTransition key={index} timeout={500} classNames="item">
                            <div className="item" onClick={() => removeItem(index)}>
                                {item}
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="admin-content">Content for Admin Dashboard</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Admin Page Footer</Footer>
        </Layout>
    );
};


export default AdminPage;