import React, { Fragment } from 'react';
import logo from './logo.svg';
import './assests/img/styles/main.scss';
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home-page';

function App() {
  return <Fragment>
    <div className="App">

      <div className='app-main-container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>

  </Fragment>
}

export default App;