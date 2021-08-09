import React, { useState } from 'react';
import { Container, ColorPickerBox } from '../styles';
import { SketchPicker, ChromePicker, ColorResult, Color } from 'react-color';
import Sketch from '../Components/ColorpickerAssets/Sketch';
// import Photoshop from '../Components/ColorpickerAssets/Photoshop';

interface MainColorProps {
  mainColor: Color;
}

const ColorPicker = () => {
  const [mainColor, setMainColor] = useState<Color>('#333');
  // console.log(mainColor); 
  const ChangeMainColor = (color: ColorResult) => {
    setMainColor(color.rgb)    
  };

  return (
    <>
      <Container className="container">
        <ColorPickerBox>
          <Sketch mainColor={mainColor} ChangeMainColor={ChangeMainColor} />
        </ColorPickerBox>
      </Container>
    </>
  )
};
//최적화 memo
export default ColorPicker;
//overflow 