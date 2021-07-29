import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderTitle } from './styles';

const Header = () => {

  return (
    <>
    <HeaderContainer>
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <HeaderTitle className="title">
        <h1>Pizza Joint</h1>
      </HeaderTitle>
    </HeaderContainer>
    </>
  );
};

export default memo(Header);