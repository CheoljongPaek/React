import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ImgContainer, HeaderContainer, HeaderTitles } from './styles';
import mainImg from './../../images/cooking.jpg'

const useStyles = makeStyles((theme) => ({

}));

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderTitles>
        <span className="titleSm">Food</span>
        <span className="titleLg">Blog</span>
      </HeaderTitles>
      <ImgContainer>
        <img className="headerImg" src={mainImg} alt="cooking" />
      </ImgContainer>
    </HeaderContainer>
  )
}

export default Header;