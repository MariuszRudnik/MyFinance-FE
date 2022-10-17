import React from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage';
import News from '../News';
import { Setting } from '../Setting';
import { UrtTypes } from '../../types/UrtTypes';
import { LoginPage } from '../Access/LoginPage';
import { AddWallet } from '../AddWallet';
import { ListOfWallet } from '../ListOfWallet';

function Root({ login }: any) {
  let access = null;
  if (login.login === false) {
    access = null;
  } else {
    access = true;
  }

  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={access ? <MainPage /> : <LoginPage />} />
          <Route path={`/${UrtTypes.News}`} element={access ? <News /> : <LoginPage />} />
          <Route path={`/${UrtTypes.AddWallet}`} element={access ? <AddWallet /> : <LoginPage />} />
          <Route
            path={`/${UrtTypes.ListOfWallet}`}
            element={access ? <ListOfWallet /> : <LoginPage />}
          />
          <Route path={`/${UrtTypes.Setting}`} element={access ? <Setting /> : <LoginPage />} />
          <Route path={`/${UrtTypes.Login}`} element={access ? <LoginPage /> : <LoginPage />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
