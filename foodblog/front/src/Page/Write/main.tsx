import React from 'react'
import { Box, Container as BaseContainer, IconButton, makeStyles, TextField } from '@material-ui/core';
import { BtnContainer, ContentForm, EditContainer, ImgContainer, MainInfo, SubContainer, SubInfo, SubmitBtn, TitleInput } from './styles';
import { AddAPhotoTwoTone, AddCircleTwoTone, ControlPoint} from '@material-ui/icons';
import image from './../../images/cooking.jpg'

const useStyle = makeStyles({
  grow: {
    flexGrow: 1,
    flexBasis: "10%",
  },
});

const Write = () => {
  const classes = useStyle();
  return (
    <BaseContainer maxWidth="xl">
      <ContentForm>
        <ImgContainer>
          <img src={image} alt="img" />
        </ImgContainer>
        <SubContainer variant="h5">
          <div className={classes.grow}/>
          <div className="InputTitleContainer">
            <TitleInput 
              type="text"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <EditContainer className={classes.grow}>
            <IconButton edge="end">
              <AddAPhotoTwoTone/>
            </IconButton>
            <IconButton edge="end">
              <AddCircleTwoTone />
            </IconButton>
          </EditContainer>
        </SubContainer>
        <SubInfo variant="subtitle2">
          <span className="author"><b>CJ Paek</b></span>
          <div className={classes.grow}/>
          <span className="date">1 hour ago</span>
        </SubInfo>
        <MainInfo variant="body1">
          <TextField 
            id="standard-textarea"
            multiline
            minRows={20}
            fullWidth
            label="content"
            color="secondary"
          />
        </MainInfo>
        <BtnContainer>
          <SubmitBtn type="submit">
            Publish
          </SubmitBtn>
        </BtnContainer>
      </ContentForm>
    </BaseContainer>
  )
};

export default Write;