import './styles.scss';
import { Box, CardContent, Typography, Card } from '@material-ui/core';
import { CardType } from './types';

export const CardComponent = (props: CardType): JSX.Element => {
  return (
    <Card className="card-home">
      <CardContent className={'card-content' + ' ' + props.cardDisplay}>
        {props.icon}
        <Box>
          <Typography variant="h1" className="title-card">
            {props.title}
          </Typography>
          <Typography variant="body1" className="description-card">
            {props.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
