import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Post from '../Post/main';
import { PostsContainer } from './styles';
import { Box as SystemBox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({

}));

const Posts = () => {
  const [isOpened, setIsOpened] = useState(false);
  const postGrid = isOpened ? 12 : 4;
  //게시글마다 id 부여해서 사용? -> 어느 카드가 열렸는지 api 있나 보기.
  //id...

  return (
    <PostsContainer container spacing={2}>
      <SystemBox 
        component={Grid} 
        item 
        xs={postGrid} 
        md={postGrid}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post setIsOpened = {setIsOpened}/>
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={postGrid} 
        md={postGrid}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post setIsOpened = {setIsOpened}/>
      </SystemBox>
      {/* <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox>
      <SystemBox 
        component={Grid}
        item 
        xs={4} 
        md={4}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Post />
      </SystemBox> */}
    </PostsContainer>
  )
}

export default Posts;