const React = require('react');
const { useState, useRef, memo, useCallback, useEffect } = React;

//클릭하면 className="..." 이 바뀌게 하고 ...은 useState로.
const Td = ({ rowIndex, cellIndex, cellData, dispatch, state }) => {
  const [tdStyle, setTdStyle] = useState("before_click");

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);

    dispatch({ type: 'CLICK_CELL', row: rowIndex, cell: cellIndex}); // 2 state변경후3
    dispatch({ type: 'SET_RECENTCELLS' }); // 3
    console.log('Td: ', state);

    setTdStyle("after_click");
  });
  useEffect(() => {
    console.log('Td useEffet');
    // SetGame.jsx에서 recentCells의 엘레멘트 배열이 두 개고,
    // 다음 배열이 푸쉬되어서 3개가 되기 전에 3-2 할 것.
    // [[x1,y2],[x2,y2]] recentCells를 가져와서 알고리즘 적용.
    if (rowIndex === 5 && cellIndex === 5) {
      setTimeout(() => {
        setTdStyle("after_click");
      }, 3000);
    }
  },[cellData]);
  return (
    <>
      <td className={tdStyle} onClick={onClickTd}>{cellData}</td>
    </>
  );
};
module.exports = Td;