import { CloseModalButton } from '@components/Menu/styles';
import React, { useCallback, FC } from 'react';
import { CreateModal } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

//<Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>

const Modal: FC<Props> = ({children, show, onCloseModal}) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;