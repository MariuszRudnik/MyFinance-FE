import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage';
import News from '../News';
import { Setting } from '../Setting';
import { UrlTypes } from '../../types/UrlTypes';
import { LoginPage } from '../Access/LoginPage';
import { AddWallet } from '../AddWallet';
import { ListOfWallet } from '../ListOfWallet';
import { UrlAddress } from '../../types/UrlAddress';
import { RegisterPage } from '../Access/Register';

function Root({ login, loginAccess, userAccess }: any) {
  let access = null;
  useEffect(() => {
    const getUser = async () => {
      await fetch(UrlAddress.User, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
        .then((res) => {
          if (res.status !== 200) throw new Error('Something went wrong or you are not login');
          return res.json();
        })
        .then((res) => {
          loginAccess(true);
          userAccess(res);
        })
        .catch((error) => {
          loginAccess(false);
        });
    };
    getUser();
  }, []);

  if (login.login === true) {
    access = true;
  } else {
    access = null;
  }

  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={access ? <MainPage /> : <LoginPage />} />
          <Route path={`/${UrlTypes.News}`} element={access ? <News /> : <LoginPage />} />
          <Route path={`/${UrlTypes.AddWallet}`} element={access ? <AddWallet /> : <LoginPage />} />
          <Route
            path={`/${UrlTypes.ListOfWallet}`}
            element={access ? <ListOfWallet /> : <LoginPage />}
          />
          <Route path={`/${UrlTypes.Setting}`} element={access ? <Setting /> : <LoginPage />} />
          <Route path={`/${UrlTypes.Login}`} element={access ? <LoginPage /> : <LoginPage />} />
          <Route path={`/${UrlTypes.Register}`} element={<RegisterPage />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
