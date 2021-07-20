import React from 'react';
import { Link } from 'react-router-dom';
import { Header, LinkContainer, Page } from './styles';
import { faBolt, faKeyboard, faRocket, faBaseballBall, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {

  return (
    <>
      <Header>Main Page</Header>
      <LinkContainer>
        <Link to="/">메인페이지</Link>
        <Link to="/login">로그인페이지</Link>
        <Link to="/signup">회원가입페이지</Link>
      </LinkContainer>
      <ul>
        <Link to="#t1">
          <FontAwesomeIcon icon={faBolt} />
        </Link>
        <Link to="#t2">
          <FontAwesomeIcon icon={faKeyboard} />
        </Link>
        <Link to="#t3">
          <FontAwesomeIcon icon={faRocket} />
        </Link>
        <Link to="#t4">
          <FontAwesomeIcon icon={faBaseballBall} />
        </Link>
        <Link to="#t5">
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </ul>
      <Page id="p1">
        <section><FontAwesomeIcon icon={faBolt} /><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!</span></section>  
      </Page>
      <Page id="p2">
        <section><FontAwesomeIcon icon={faKeyboard} /><span className="title">Keyboard</span></section>
      </Page>
      <Page id="p3">
        <section><FontAwesomeIcon icon={faRocket} /><span className="title">Rocket</span></section>
      </Page>
      <Page id="p4">
        <section><FontAwesomeIcon icon={faBaseballBall} /><span className="title">BaseballBall</span></section>
      </Page>
      <Page id="p5">
        <section><FontAwesomeIcon icon={faPlusCircle} /><span className="title">PlusCircle</span></section>
      </Page>
    </>
  )
};

export default Main;