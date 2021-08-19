import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, Favorite, MoreVert, Share } from '@material-ui/icons';
import React from 'react';
import { ExpandMore } from './styles';
import img from './../../images/colorfulplace.jpg'

const useStyles = makeStyles((theme) => ({
  card: {
    // maxWidth: "345px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  }
}));

const Post = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader 
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title="Title"
          subheader="subheader"
        />
        <CardMedia 
          className={classes.media}
          image={img}
          // src={img}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Content
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded}>
          <Container>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>a</Typography>
            <Typography paragraph>b</Typography>
            <Typography paragraph>c</Typography>
          </Container>
        </Collapse>
      </Card>
    </>
  );
}

export default Post;