import MenuToggle from '@components/Menu/MenuToggle';
import React, { useCallback, FC, useState } from 'react';
import { CreateModal } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const Modal:FC<Props> = ({children, show, onCloseModal}) => {
  const [scrollToBottom, setScrollToBottom] = useState(1);
  console.log('modal');

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const customStyle = {
    opacity: `${scrollToBottom}`
  }
  
  if (show === false) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <>
        <CreateModal id="createmodal" onClick={onCloseModal}>
          {/* {children} */}
          <div onClick={stopPropagation}>
          <MenuToggle customStyle={customStyle} toggle={onCloseModal} />

            {children}
          </div>
        </CreateModal>
      </>
    )
  }
};

export default Modal;