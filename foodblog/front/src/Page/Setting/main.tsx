import { makeStyles } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import React from 'react';
import { SubmitBtn } from '../Write/styles';
import { TitleLine, SettingContainer, Title, ImageLine, SettingForm, SettingInput, InputLine, DeleteBtn } from './styles';

const useStyle = makeStyles({
  grow: {
    flexGrow: 1,
    flexBasis: "10%",
  },
  image: {
    height: '7rem',
    width: '7rem',
    borderRadius: '2rem',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  settingIcon: {
    cursor: 'pointer'
  }
});

const Setting = () => {
  const classes = useStyle();
  const inputFile = React.useRef<HTMLInputElement>();

  const onClickImg = () => {
    inputFile.current.click();
  }
  
  return (
    <SettingContainer>
      <TitleLine>
        <Title>Update Your Account</Title>
        <DeleteBtn onClick={()=> console.log('DeleteBtn')}>Delete Account</DeleteBtn>
      </TitleLine>
      <SettingForm>
        <label>Profile Picture</label>
        <ImageLine>
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.image}
            onClick={onClickImg}
          />
          <label htmlFor="fileInput">
            <Settings className={classes.settingIcon}/>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            className="settingsPPInput"
            ref={inputFile}
          />
        </ImageLine>
        <InputLine>
          <SettingInput>
            <label htmlFor="text">Username</label>
            <input id="text" type="text" placeholder="CJPaek" name="name" />
          </SettingInput>
          <SettingInput>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="cjpaek0122@gmail.com" name="email" />
          </SettingInput>
          <SettingInput>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" name="password" />
          </SettingInput>
          <SubmitBtn className="settingsSubmitButton" type="submit">
            Update
          </SubmitBtn>
        </InputLine>
      </SettingForm>
    </SettingContainer>
  )
};

export default Setting;