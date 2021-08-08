import React from 'react';
import { Link } from 'react-router-dom';
// import { Container, LinkContainer, Page } from './styles';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Main = () => {

  const Bada = () => {
    const style = {
      display: "inline-block",
      backgroundColor: "orange",
      padding: 8,
    }
    return <motion.div drag="x" dragConstraints={{ left: -100, right: 100 }} style={style}>Hello</motion.div>
  }

  return (
    <>
      {/* <Container>
        <LinkContainer>
          <Bada/>
          <Link to="#t1" id="t1">
            <Fa icon="bolt" size="4x" />
          </Link>
          <Link to="#t2" id="t2">
            <Fa icon="keyboard" />
          </Link>
          <Link to="#t3" id="t3">
            <Fa icon="rocket" />
          </Link>
          <Link to="#t4" id="t4">
            <Fa icon="basketball-ball" />
          </Link>
          <Link to="#t5" id="t5">
            <Fa icon="plus-circle" />
          </Link>
        </LinkContainer>
        <Page id="p1">
          <section><Fa icon="bolt" /><span className="title">Bolt</span><span className="disc">Like this pen to see the magic!</span></section>  
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
      </Container> */}
    </>
  )
};

export default Main;