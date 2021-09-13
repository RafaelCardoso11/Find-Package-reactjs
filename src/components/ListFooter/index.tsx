import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { itemsType, listFooterType } from './types';
import './styles.scss';
export const ListFooter = (props: listFooterType): JSX.Element => {
  const { title, items } = props;
  return (
    <List component="nav" className="column-items">
      <Typography variant="h6" className="title-columnItems">
        {title}
      </Typography>
      {items.map((item: itemsType) => (
        <ListItem className="row-item" key={item.name}>
          <ListItemText primary={item.name} className="item" />
        </ListItem>
      ))}
    </List>
  );
};
