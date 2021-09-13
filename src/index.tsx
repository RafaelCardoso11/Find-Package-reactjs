import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globalStyles.scss';
import { HomeApp } from './templates/HomeApp';
import { HomeFind } from './templates/HomeFind';
import { HomeFooter } from './templates/HomeFooter';
import { HomeMoreFind } from './templates/HomeMore';

ReactDOM.render(
  <React.StrictMode>
    <HomeFind />
    <HomeMoreFind />
    <HomeApp />
    <HomeFooter />
  </React.StrictMode>,
  document.getElementById('root'),
);
