import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/login';
import SingUp from './pages/Authentication/singUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<App />}></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sing-Up" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
