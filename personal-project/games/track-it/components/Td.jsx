const React = require('react');
const { useState, useRef, memo, useCallback, useEffect } = React;

//클릭하면 className="..." 이 바뀌게 하고 ...은 useState로.
const Td = ({ rowIndex, cellIndex, cellData, dispatch, state, recentCells }) => {
  const [tdStyle, setTdStyle] = useState("before_click");

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);

    dispatch({ type: 'CLICK_CELL', row: rowIndex, cell: cellIndex}); // 2 state변경후3
    dispatch({ type: 'SET_RECENTCELLS' }); // 3

    setTdStyle("after_click");
  });
  useEffect(() => {
    console.log('Td useEffect: ', rowIndex, cellIndex);
    // [[x1,y2],[x2,y2]] recentCells를 가져와서 알고리즘 적용.
    // recentCells.length가 1이면 쉬고 2일 때 적용.
    if (recentCells.length === 2) {
      const firstRow = recentCells[0][0];
      const firstCell = recentCells[0][1];
      const secondRow = recentCells[1][0];
      const secondCell = recentCells[1][1];
      const diffRow = secondRow - firstRow;
      const diffCell = secondCell - firstCell;
      // second가 first보다 오른쪽 아래 위치
      if (diffRow > 0 && diffCell > 0) {
        // if (rowIndex === 3 && cellIndex === 3) {
        //   setTdStyle("after_click");
        // }
        //diffRow is 3 here.
        //so i is 0,1,2
        for (let i = 0; i < diffCell; i++) {
          setTimeout(() => {
            if (rowIndex === secondRow && cellIndex === secondCell - i -1) {
              console.log('time');
              setTdStyle("after_click");
            }
          }, 2000);
        }
      }      
    }
  });
  return (
    <>
      <td className={tdStyle} onClick={onClickTd}>{cellData}</td>
    </>
  );
};
module.exports = Td;