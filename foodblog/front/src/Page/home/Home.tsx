import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../Component/Header/main';
import Posts from '../../Component/Posts/main';
import Sidebar from '../../Component/Sidebar/main';

const useStyles = makeStyles((theme) => ({

}));

const Home = () => {

  return (
    <>
      <Header />
      <div className="home">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Posts />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Home;