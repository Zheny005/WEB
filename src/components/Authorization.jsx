import React, { useState } from 'react';
import { Modal, Button, Spin, Input } from 'antd';

const AuthModal = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOk = () => {
        setLoading(true);
        // Можна реалізувати тут логіку авторизації
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 2000); // Приклад для демонстрації, що після завантаження змінюється стан
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}>
                Open Modal
            </Button>
            <Modal
                title="Authorization"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk} loading={loading}>
                        {loading ? 'Logging in' : 'Login'}
                    </Button>,
                ]}
            >
                {loading ? (
                    <div style={{ textAlign: 'center' }}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <div>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input.Password
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AuthModal;