import { Box, Button, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { imgPackageMore, translateXX } from '../../animations';
import FindPackage from '../../assets/img/FindPackage.png';
import { useScroll } from '../../Hooks/useScroll';
import './styles.scss';
export const HomeMoreFind = (): JSX.Element => {
  const [element, controls] = useScroll();
  return (
    <div ref={element}>
      <Box component="section" className="container-HomeMore">
        <Box className="container-img">
          <motion.div
            variants={imgPackageMore}
            animate={controls}
            transition={{ delay: 0.1, type: 'tween' }}
            ref={element}
          >
            <img
              src={FindPackage}
              alt="Imagem de Entregas"
              className="img-HomeMore"
            />
          </motion.div>
        </Box>
        <Box className="containerText">
          <motion.div
            variants={translateXX}
            animate={controls}
            transition={{ type: 'tween' }}
          >
            <Typography variant="h6" className="label-title">
              LOCALIZE SUAS ENTREGAS
            </Typography>
            <Typography variant="h1" className="title">
              Veja onde está a sua entrega em tempo real.
            </Typography>
            <Typography variant="body1" className="body">
              We designed and tested prototypes that helped identify pain points
              in the account creation process. Together, we shaped the new
              standard.
            </Typography>
            <Button className="btn-search">Encontrar</Button>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};
