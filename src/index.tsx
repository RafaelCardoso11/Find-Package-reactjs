import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { ScrollTop } from './components/scrollTop';
import './styles/globalStyles.scss';
// import { Deliveries } from './templates/Deliveries';
import { HomeApp } from './templates/HomeApp';
import { HomeFind } from './templates/HomeFind';
import { HomeFooter } from './templates/HomeFooter';
import { HomeMoreFind } from './templates/HomeMore';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <Deliveries /> */}
    <HomeFind />
    <HomeMoreFind />
    <HomeApp />
    <HomeFooter />
    <ScrollTop />
  </React.StrictMode>,
  document.getElementById('root'),
);
