import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

interface SimpleMenuProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  anchorEl: null | HTMLElement,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

const SimpleMenu = ({ handleClick, anchorEl, setAnchorEl}:SimpleMenuProps) => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.currentTarget);
    
  //   setAnchorEl(e.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  )
};

export default SimpleMenu