import { styled as muistyled, Paper, AppBar, IconButton, Theme } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page one Post */
export const PostContainer = muistyled('div')(({theme}) => ({
}));

export const ExpandMore = muistyled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />
})(({ theme, expand }:{ theme: Theme, expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));