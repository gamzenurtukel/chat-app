import './App.scss';

import LandingPage from './pages/landingPage';
import 'antd/dist/reset.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../src/redux/slices/userSlice';
import { useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import Login from './pages/Authentication/login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return <div>{!user ? <Login /> : <LandingPage />}</div>;
}

export default App;
