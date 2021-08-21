import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ImgContainer, HeaderContainer, HeaderTitles } from './styles';
import mainImg from './../../images/fooda.jpg'

const useStyles = makeStyles((theme) => ({

}));

const Header = () => {

  return (
    <HeaderContainer elevation={0}>
      <HeaderTitles>
        <span className="titleSm">Food</span>
        <span className="titleLg">Blog</span>
      </HeaderTitles>
      <ImgContainer>
        <img className="headerImg" src={mainImg} alt="cooking" />
      </ImgContainer>
      {/* <div>hmm</div> */}
    </HeaderContainer>
  )
}

export default Header;