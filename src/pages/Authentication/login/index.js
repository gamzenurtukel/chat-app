import './styles.scss';

import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { AiOutlineMail } from 'react-icons/ai';
import { LockOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import login1 from '../../../lottie/login.json';
import { Link } from 'react-router-dom';
import { login } from '../../../redux/slices/userSlice';
import { auth, signInWithEmailAndPassword } from '../../../firebase';
import { useDispatch } from 'react-redux';

function Login() {
  const [loading, setLoading] = useState([]);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const loginOnClick = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="login-lottie">
        <Lottie animationData={login1} speed={1} />
      </div>
      <div className="login-form">
        <p className="form-title">Chat App</p>
        <Form layout="vertical" className="form" autoComplete="off">
          <Form.Item
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              className="login-form-input"
              size="large"
              placeholder="Email"
              prefix={<AiOutlineMail />}
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
              }}
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
              onChange={(e) => {
                setFormState({ ...formState, password: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              loading={loading}
              onClick={loginOnClick}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className="form-subtitle">
          New on our platform?{' '}
          <span>
            <Link to="/register">Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
