import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { News } from './News';
import { Setting } from './Setting';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
