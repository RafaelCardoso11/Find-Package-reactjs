import { ItemListNav } from './ItemListNav';
import logo from '../../assets/img/correios.svg';
import './styles.scss';
import { Box, Button, List, ListItemIcon } from '@material-ui/core';
import { useState } from 'react';
import { HomeSign } from '../../templates/HomeSignIn';
import { motion } from 'framer-motion';
import { headerAnimation } from '../../animations';
import { useScroll } from '../../Hooks/useScroll';
import { HeaderMobile } from './HeaderMobile';
export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [element, controls] = useScroll();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        variants={headerAnimation}
        animate={controls}
        ref={element}
        initial={{ y: -50, opacity: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
        id="back-to-top-anchor"
      >
        <Box className="header-container" component="header">
          <List className="nav-header-content" component="nav">
            <ListItemIcon>
              <img className="logo-nav" src={logo} alt="Logo" />
            </ListItemIcon>
            <List className="list-nav" component="ul">
              <ItemListNav item="Features" />
              <ItemListNav item="Services" />
              <ItemListNav item="Pricing" />
              <ItemListNav item="Contact" />
            </List>
          </List>
          <Button className="btn-signIn" onClick={handleOpen}>
            Sign In
          </Button>
        </Box>
        <HomeSign
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      </motion.div>
      <HeaderMobile />
    </>
  );
};
