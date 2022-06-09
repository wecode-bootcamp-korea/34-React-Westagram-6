// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 범석's 컴포넌트
import LoginBeomSeok from './pages/beomseok/Login/Login.js';
import MainBeomSeok from './pages/beomseok/Main/Main';

// 희윤's 컴포넌트
import LoginHeeYun from './pages/heeyun/Login/Login';
import MainHeeYun from './pages/heeyun/Main/Main';

//  혜림's 컴포넌트
import LoginHyeRim from './pages/hyerim/Login/Login';
import MainHyeRim from './pages/hyerim/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-beomseok" element={<LoginBeomSeok />} />
        <Route path="/Main-beomseok" element={<MainBeomSeok />} />
        <Route path="/Login-heeyun" element={<LoginHeeYun />} />
        <Route path="/Main-heeyun" element={<MainHeeYun />} />
        <Route path="/Login-hyerim" element={<LoginHyeRim />} />
        <Route path="/Main-hyerim" element={<MainHyeRim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
