import React, { FC, CSSProperties, useCallback } from 'react';
import { CreateMenu, CloseModalButton } from './styles';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
  closeButton?: boolean;
}
//closeButton props는 Menu 컴포넌트를 사용하는 곳에서 props로 안 갖고 있어도
//defaultProps를 했기에 true로 여긴다.
const Menu: FC<Props> = ({children, style, show, onCloseModal, closeButton}) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
    
  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  )
};
Menu.defaultProps = {
  closeButton: true,
};

export default Menu;