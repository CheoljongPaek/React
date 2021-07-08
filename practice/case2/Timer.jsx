import React, { useContext, useRef, memo, useState, useEffect, useMemo } from 'react';
import { TableContext } from './MineSearch';

const Timer = memo(() => {
  const [ seconds, setSeconds ] = useState(0);
  const { dispatch, Stop } = useContext(TableContext);
  const timeout = useRef(null);
  const timespace = useRef(1);
  console.log('timeout: ', timeout);
  console.log('timespace: ', timespace);

  useEffect(() => {
    if (Stop) {
      // clearInterval(timeout.current);
    } else {
      console.log('out setInterval');
      timeout.current = setInterval(() => {
        console.log('in setInterval');
        setSeconds((prevSeconds) => prevSeconds + timespace.current);
      }, timespace.current*1000);
    }
    return () => {
      console.log('clear');
      clearInterval(timeout.current);
    }
  }, [Stop]);

  return useMemo(() => (
    <div>
      Timer: {seconds}
    </div>
  ),[seconds]);
});

export default Timer;