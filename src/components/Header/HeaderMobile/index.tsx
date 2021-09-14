import { Box } from '@material-ui/core';
import './styles.scss';
export const HeaderMobile = (): JSX.Element => {
  return (
    <Box component="div" className="container-hamburguer">
      <Box className="line-hamburguer" id="line1" component="div"></Box>
      <Box className="line-hamburguer" id="line2" component="div"></Box>
      <Box className="line-hamburguer" id="line3" component="div"></Box>
    </Box>
  );
};
