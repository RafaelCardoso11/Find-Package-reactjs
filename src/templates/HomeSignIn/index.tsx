import {
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { modalType, valuesType } from './types';
import './styles.scss';
import correiosLogo from '../../assets/img/correios.svg';
import { motion } from 'framer-motion';
const validationSchema = yup.object({
  email: yup
    .string()
    .email('O Email digitado é invalido.')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .min(8, 'O mínimo de caracteres é 8 digitos.')
    .required('A senha é obrigatório.'),
});
export const HomeSign = (props: modalType): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: valuesType) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { open, handleClose } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        className="modal-container"
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: '30vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <Box className="modal-content" component="div">
              <Box component="header" className="container-headerModal">
                <img src={correiosLogo} alt="Logo correios" className="logo" />
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  className="email"
                />
                <TextField
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  className="password"
                />
                <Button
                  color="primary"
                  variant="outlined"
                  fullWidth
                  type="submit"
                  className="btn-login"
                >
                  Entrar
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  className="btn-register"
                >
                  Registrar
                </Button>
                <Typography variant="h6" className="forgotPassword">
                  Esqueceu a senha?
                </Typography>
              </form>
            </Box>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
};
