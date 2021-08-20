import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Post from '../Post/main';
import { PostsContainer } from './styles';
import { Box as SystemBox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({

}));

const Posts = () => {

  return (
    <PostsContainer container spacing={2}>
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
    </PostsContainer>
  )
}

export default Posts;