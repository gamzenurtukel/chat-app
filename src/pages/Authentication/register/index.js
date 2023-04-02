import './styles.scss';

import { Fragment, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { LockOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import register from '../../../lottie/register.json';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../../../firebase';
import { useDispatch } from 'react-redux';

function Register() {
  const [loading, setLoading] = useState([]);
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const singInOnClick = () => {
    setLoading(true);

    createUserWithEmailAndPassword(
      auth,
      formState.email,
      formState.password
    ).then((userCredential) => {
      setLoading(false);
    });

    setFormState({ ...formState, username: '', email: '', password: '' });
  };
  const onFinish = (e) => {
    form.resetFields();
  };

  return (
    <div className="register-container">
      <div className="register-lottie">
        <Lottie animationData={register} speed={1} />
      </div>
      <div className="regiter-form">
        <p className="form-title">Chat App</p>
        <Form
          layout="vertical"
          className="form"
          autoComplete="off"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="User Name"
            autoComplete="off"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              className="login-form-input"
              size="large"
              placeholder="User Name"
              prefix={<AiOutlineUser />}
              onChange={(e) =>
                setFormState({ ...formState, username: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              className="login-form-input"
              size="large"
              placeholder="Email"
              prefix={<AiOutlineMail />}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              className="login-form-input"
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              loading={loading}
              onClick={singInOnClick}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className="form-subtitle">
          Already have an account?{' '}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Register;
