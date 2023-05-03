// @types/react/index.d.ts

declare module 'react' {
  interface Attributes {
    css?: any;
  }
}
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './components/Assets/i18next/i18next';
import Root from './Pages/Root/RootConstainer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { LoadingElements } from './components/Atoms/LoadingElements/LoadingElements';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'styled-components/macro';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { MainProvider } from './components/Context/MainProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainProvider>
          <Suspense fallback={<LoadingElements />}>
            <Root />
            <ToastContainer />
          </Suspense>
        </MainProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
