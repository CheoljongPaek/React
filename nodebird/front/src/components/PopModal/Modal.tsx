import React from "react";
// import { Link } from 'react-router';
import {motion, AnimatePresence} from 'framer-motion';
import { VFC } from 'react';
import { Backdrop, PopModal } from './styles';
import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import { Link } from 'react-router-dom';

const backdrop = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const Modal = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  return (
    <AnimatePresence exitBeforeEnter>
      {state.popModal.showModal && (
        <Backdrop className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <PopModal className="modal"
            variants={modal}
            // initial="hidden"
            // animate="visible"
          >
            <p>Want to make another pizza?</p>
            <Link to="/menu/whoami/main">
              <button>Start Again</button>
            </Link>
          </PopModal>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}

export default Modal