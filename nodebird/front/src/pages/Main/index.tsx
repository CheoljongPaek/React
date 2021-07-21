import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer, Page } from './styles';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

const Main = () => {

  return (
    <>
      <LinkContainer>
        <Link to="#t1">
          <Fa icon="bolt" size="4x" />
        </Link>
        <Link to="#t2">
          <Fa icon="keyboard" />
        </Link>
        <Link to="#t3">
          <Fa icon="rocket" />
        </Link>
        <Link to="#t4">
          <Fa icon="basketball-ball" />
        </Link>
        <Link to="#t5">
          <Fa icon="plus-circle" />
        </Link>
      </LinkContainer>
      <Page id="p1">
        <section><Fa icon="bolt" /><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!</span></section>  
      </Page>
      <Page id="p2">
        <section><Fa icon="keyboard" /><span className="title">Keyboard</span></section>
      </Page>
      <Page id="p3">
        <section><Fa icon="rocket" /><span className="title">Rocket</span></section>
      </Page>
      <Page id="p4">
        <section><Fa icon="basketball-ball" /><span className="title">BaseballBall</span></section>
      </Page>
      <Page id="p5">
        <section><Fa icon="plus-circle" /><span className="title">PlusCircle</span></section>
      </Page>
    </>
  )
};

export default Main;