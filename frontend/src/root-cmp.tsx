import React, { Fragment } from 'react';
import logo from './logo.svg';
import './assests/img/styles/main.scss';
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home-page';
import { AppHeader } from './cmps/app-header';
import { LoginSignUp } from './pages/login-page';
import { ClientIndex } from './pages/client-index';
import { ClientList } from './pages/client-list';

function App() {
  return <Fragment>
    <div className="App">
      <AppHeader />
      <div className='app-main-container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/client" element={<ClientList />} />
          <Route path="/client/:clientId" element={<ClientIndex />} />
        </Routes>
      </div>
    </div>

  </Fragment>
}

export default App;
