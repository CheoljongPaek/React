import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import { HomeBtn, HomeContainer, HomeTitle } from './styles';

const Home = () => {

  return (
    <>
      <Header />
      <HomeContainer className="home container">
        <HomeTitle>
          Welcome to Pizza Joint
        </HomeTitle>
        <Link to="/test/menu/whoami/base">
          <HomeBtn>
            Create Your Pizza
          </HomeBtn>
        </Link>
      </HomeContainer>
    </>
  );
};

export default memo(Home);