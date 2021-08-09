import React, { useState } from 'react';
import { SketchPicker, ChromePicker, ColorResult, Color } from 'react-color';

type fromparentfuncProps = {
  ChangeMainColor: (color: ColorResult) => void
  mainColor: Color 
}

const Sketch = ({ ChangeMainColor, mainColor }: fromparentfuncProps) => {
  const handleChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    ChangeMainColor(color);
  };

  return (
    <>
      <SketchPicker 
        color={mainColor}
        onChange={handleChange}
        width="300px"
      />
    </>
  )
};

export default Sketch;
