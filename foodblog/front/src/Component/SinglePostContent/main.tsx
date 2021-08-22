import React from 'react';
import { Container as BaseContainer, IconButton, makeStyles } from '@material-ui/core';
import { ContentContainer, EditContainer, ImgContainer, MainInfo, PostTitle, SubContainer, SubInfo } from './styles';
import image from './../../images/cooking.jpg'
import { DeleteTwoTone, EditTwoTone } from '@material-ui/icons';

const useStyle = makeStyles({
  grow: {
    flexGrow: 1,
    flexBasis: "10%",
  },
});

const SinglePostContent = () => {
  const classes = useStyle();
  return (
    <BaseContainer maxWidth="xl">
      <ContentContainer>
        <ImgContainer>
          <img src={image} alt="img" />
        </ImgContainer>
        <SubContainer>
          <div className={classes.grow}/>
          <PostTitle>
            Title is Here
          </PostTitle>
          <EditContainer className={classes.grow}>
            <IconButton edge="end">
              <EditTwoTone/>
            </IconButton>
            <IconButton edge="end">
              <DeleteTwoTone />
            </IconButton>
          </EditContainer>
        </SubContainer>
        <SubInfo variant="subtitle2">
          <span className="author"><b>CJ Paek</b></span>
          <div className={classes.grow}/>
          <span className="date">1 hour ago</span>
        </SubInfo>
        <MainInfo variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor eligendi ratione impedit minus excepturi officiis maxime perspiciatis quod ipsum ad modi ab, ipsa eveniet laudantium esse. Dolores, cumque dolorem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor eligendi ratione impedit minus excepturi officiis maxime perspiciatis quod ipsum ad modi ab, ipsa eveniet laudantium esse. Dolores, cumque dolorem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor eligendi ratione impedit minus excepturi officiis maxime perspiciatis quod ipsum ad modi ab, ipsa eveniet laudantium esse. Dolores, cumque dolorem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor eligendi ratione impedit minus excepturi officiis maxime perspiciatis quod ipsum ad modi ab, ipsa eveniet laudantium esse. Dolores, cumque dolorem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor eligendi ratione impedit minus excepturi officiis maxime perspiciatis quod ipsum ad modi ab, ipsa eveniet laudantium esse. Dolores, cumque dolorem.
        </MainInfo>
      </ContentContainer>
    </BaseContainer>
  )
};

export default SinglePostContent;