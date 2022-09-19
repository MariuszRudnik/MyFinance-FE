import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import News from './News';
import { Setting } from './Setting';
import { UrtTypes } from '../types/UrtTypes';
import { Provider } from 'react-redux';
import store from '../store';
import { LoginPage } from './Access/LoginPage';
import { AddWallet } from './AddWallet';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={`/${UrtTypes.News}`} element={<News />} />
            <Route path={`/${UrtTypes.AddWallet}`} element={<AddWallet />} />
            <Route path={`/${UrtTypes.ListOfWallet}`} element={<AddWallet />} />
            <Route path={`/${UrtTypes.Setting}`} element={<Setting />} />
            <Route path={`/${UrtTypes.Login}`} element={<LoginPage />} />
          </Routes>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
