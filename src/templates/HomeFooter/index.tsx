import { Box, Typography } from '@material-ui/core';

import logoCorreios from '../../assets/img/correios.svg';
import logoTT from '../../assets/img/TT-logo.svg';
import logoFB from '../../assets/img/fb-logo.svg';
import logoGO from '../../assets/img/Google-logo.svg';
import './styles.scss';
import { ListFooter } from '../../components/ListFooter';
import { ColumnType } from './types';

export const HomeFooter = (): JSX.Element => {
  const column1: ColumnType = {
    title: 'Help menu',
    items: [
      {
        name: 'about',
      },
      {
        name: 'Features',
      },
      {
        name: 'Works',
      },
    ],
  };
  const column2: ColumnType = {
    title: 'Support',
    items: [
      {
        name: 'Contact',
      },
      {
        name: 'Help & Support',
      },
      {
        name: 'Privacy Policy',
      },
    ],
  };
  const column3: ColumnType = {
    title: 'Products',
    items: [
      {
        name: 'Shades Pro',
      },
      {
        name: 'Essential Blocks',
      },
      {
        name: 'vApp Landing Page',
      },
    ],
  };
  return (
    <Box component="footer" className="footerContainer">
      <Box component="div" className="container-logo">
        <img
          src={logoCorreios}
          alt="Logo dos correios"
          className="logo-correios"
        />
        <Typography variant="body1" className="description-logo">
          Big, small, online, offline, local. Size doesn matter. We work on
          diverse projects for top brands as well as for cool startups.
        </Typography>
        <Box component="footer">
          <img src={logoTT} alt="Logo do Twitter" className="socialNetwork" />
          <img src={logoFB} alt="Logo do Facebook" className="socialNetwork" />
          <img src={logoGO} alt="Logo do Google" className="socialNetwork" />
        </Box>
      </Box>
      <Box component="div" className="list-container">
        <ListFooter {...column1} />
        <ListFooter {...column2} />
        <ListFooter {...column3} />
      </Box>
    </Box>
  );
};
