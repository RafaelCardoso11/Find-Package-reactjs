import './styles.scss';
import { Typography, Box, InputBase, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import { translateY50 } from '../../../animations';
import { useScroll } from '../../../Hooks/useScroll';

// import { useFormik } from 'formik';
// import * as yup from 'yup';

export const TextContainerHome = (): JSX.Element => {
  const [element, controls] = useScroll();
  return (
    <Box className="content-home" component="div">
      <motion.div
        variants={translateY50}
        ref={element}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
      >
        <Typography variant="h5" className="label-title">
          Serviços de entrega e rastreio
        </Typography>
      </motion.div>

      <motion.div
        variants={translateY50}
        ref={element}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
      >
        <Typography variant="h1" className="title-home">
          Rastreie a sua entrega agora
        </Typography>
      </motion.div>

      <motion.div
        ref={element}
        variants={translateY50}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.3, type: 'tween' }}
      >
        <Typography variant="body1" className="body-home">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </Typography>
      </motion.div>

      <Box className="component-main-home" component="main">
        <InputBase
          className="input-findPackage"
          placeholder="Código de rastreio"
        />
        <Button className="btn-search">Encontrar</Button>
      </Box>
      <Typography variant="h5" className="labelFooter-home">
        Mais de 50.000 pessoas utilzam todos os dias
      </Typography>
    </Box>
  );
};
