import { Box } from '@material-ui/core';

import React from 'react';

import { Header } from '../../components/Header';
import { CardsHomeFind } from '../../components/HomeFindComponents/Cards';
import { TextContainerHome } from '../../components/HomeFindComponents/TextContainerHome';
import './styles.scss';

export const HomeFind = (): JSX.Element => {
  return (
    <Box className="home-container" component="section">
      <Header />
      <TextContainerHome />
      <CardsHomeFind />
    </Box>
  );
};
