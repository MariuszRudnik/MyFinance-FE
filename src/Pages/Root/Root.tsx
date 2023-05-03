import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { Setting } from '../Setting';
import { UrlTypes } from '../../types/UrlTypes';
import { LoginPage } from '../Access/LoginPage';
import { AddWallet } from '../AddWallet';
import { Operations } from '../Operations';
import { RegisterPage } from '../Access/Register';
import { LoadingElements } from '../../components/Atoms/LoadingElements/LoadingElements';
import { theme } from '../../theme/mainTheme';
import { UserPageTemplates } from '../../templates/UserPageTemplates';
import { CategoryPage } from '../Wallet/CategoryPage';
import { AddTransaction } from '../../components/Molecules/AddTransation/AddTransaction';

function Root({ login, loginAccess, userAccess }: any) {
  let access = null;
  fetch('https://my-finances-be-mariuszrudnik.vercel.app/api/login', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'mariusz@ps7.pl',
      password: '111'
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  useEffect(() => {
    const getUser = async () => {
      await fetch('https://my-finances-be-mariuszrudnik.vercel.app/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'no-cors'
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
        .catch(() => {
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
                <Route
                  path={`/${UrlTypes.ListOfWallet}/:id/operations/*`}
                  element={<Operations />}
                />
                <Route
                  path={`/${UrlTypes.ListOfWallet}/:id/add-wallet`}
                  element={<AddTransaction />}
                />
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
