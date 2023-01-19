import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { Setting } from '../Setting';
import { UrlTypes } from '../../types/UrlTypes';
import { LoginPage } from '../Access/LoginPage';
import { AddWallet } from '../AddWallet';
import { ListOfWallet } from '../ListOfWallet';
import { UrlAddress } from '../../types/UrlAddress';
import { RegisterPage } from '../Access/Register';
import { LoadingElements } from '../../components/Atoms/LoadingElements/LoadingElements';
import { theme } from '../../theme/mainTheme';
import { UserPageTemplates } from '../../templates/UserPageTemplates';
import { CategoryPage } from '../Wallet/CategoryPage';

function Root({ login, loginAccess, userAccess, walletList }: any) {
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
          // walletList();
          userAccess(res);
          loginAccess(true);
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
      <React.Suspense fallback={<LoadingElements />}>
        <MainTemplate>
          {access ? (
            <UserPageTemplates activeColor={theme.primary}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path={`/${UrlTypes.AddWallet}`} element={<AddWallet />} />
                <Route path={`/${UrlTypes.ListOfWallet}/:id/*`} element={<ListOfWallet />} />
                <Route path={`/${UrlTypes.ListOfWallet}/:id/category`} element={<CategoryPage />} />
                <Route path={`/${UrlTypes.Setting}`} element={<Setting />} />
                <Route path={`/${UrlTypes.Login}`} element={<LoginPage />} />
              </Routes>
            </UserPageTemplates>
          ) : (
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path={`/${UrlTypes.Register}`} element={<RegisterPage />} />
            </Routes>
          )}
        </MainTemplate>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default Root;
