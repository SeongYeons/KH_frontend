import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 프로젝트에서 리액트 라우터를 적용하기 위해 APP 컴포넌트를 
    // BrowserRouter 컴포넌트로 감싼다.
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();
