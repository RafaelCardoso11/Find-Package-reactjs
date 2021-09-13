import { ListItemText } from '@material-ui/core';
import './styles.scss';
import { itemListType } from './types';
export const ItemListNav = (props: itemListType): JSX.Element => {
  return <ListItemText className="items-list">{props.item}</ListItemText>;
};
