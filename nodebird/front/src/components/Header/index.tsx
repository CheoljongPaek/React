import { Link } from "react-router-dom";
import { CircleMenu, HContainer, Logo } from './styles';
import Square from '@components/multisquare'

const Header = () => {
  return (
    <HContainer id='header'>
      <div className='container'>
        {/* <Square /> */}
        <div className='row space-between'>
          <Logo className='logo'>
            <Link to='/'>JIMMY FERMIN</Link>
          </Logo>
          <CircleMenu>MENU</CircleMenu>
        </div>
      </div>
    </HContainer>
  );
};

export default Header;