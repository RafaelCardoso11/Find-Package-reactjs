import './styles.scss';
import { Box, Typography } from '@material-ui/core';
import { CardComponent } from '../../components/HomeFindComponents/Cards/Card';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import smartphone from '../../assets/img/smartphone.png';
import smartphoneBackgroud from '../../assets/img/smartphoneBackgroud.svg';

import { motion } from 'framer-motion';
import { useScroll } from '../../Hooks/useScroll';
import { translateYY50, translateXX, opacity1 } from '../../animations';

export const HomeApp = (): JSX.Element => {
  const [element, controls] = useScroll();
  return (
    <Box component="section" className="container-app">
      <Box component="div" className="contentTextApp">
        <Box className="container-text">
          <motion.div
            ref={element}
            variants={opacity1}
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.3, type: 'spring', stiffness: 20 }}
          >
            <Typography variant="h6" className="label-title">
              APP CORREIOS
            </Typography>
            <Typography variant="h1" className="title">
              Baixe o nosso APP e confira suas entregas em sua mão.
            </Typography>
            <Typography variant="body1" className="body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              sed placeat, incidunt aliquam sapiente reprehenderit iste velit in
              blanditiis corrupti.
            </Typography>
          </motion.div>
        </Box>
        <motion.div
          ref={element}
          variants={translateYY50}
          animate={controls}
          transition={{ delay: 0.3, type: 'tween' }}
        >
          <Box component="div" className="cards-home moreApp">
            <CardComponent
              title="Baixar na AppleStore"
              icon={<AppleIcon className="iconCard" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sed
            placeat"
              cardDisplay="block"
            />
            <CardComponent
              title="Disponível no Google Play"
              icon={<ShopIcon className="iconCard" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sed
            placeat"
              cardDisplay="block"
            />
          </Box>
        </motion.div>
      </Box>
      <motion.div
        ref={element}
        variants={translateXX}
        animate={controls}
        transition={{ delay: 0.3, type: 'tween' }}
        initial={{ y: 0, opacity: 1 }}
      >
        <Box className="container-smartphone">
          <img
            src={smartphone}
            alt="Smartphone dos correios"
            className="index-1"
          />
          <img
            src={smartphoneBackgroud}
            alt="Smartphone dos correios"
            className="index2"
          />
        </Box>
      </motion.div>
    </Box>
  );
};
