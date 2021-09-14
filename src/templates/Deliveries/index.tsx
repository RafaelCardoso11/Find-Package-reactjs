import { Box } from '@material-ui/core';
import './styles.scss';
export const Deliveries = (): JSX.Element => {
  return (
    <Box component="section" className="container-deliveries">
      <Box component="div" className="cards-deliveries"></Box>
      <Box component="div" className="cards-deliveries"></Box>
      <Box component="div" className="cards-deliveries"></Box>
      <Box component="div" className="cards-deliveries"></Box>
    </Box>
  );
};
