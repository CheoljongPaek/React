const React = require('react');
const { useState, useRef, memo, useCallback } = React;

//클릭하면 className="..." 이 바뀌게 하고 ...은 useState로.
const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
  const [tdStyle, setTdStyle] = useState("before_click");

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);

    dispatch({ type: 'CLICK_CELL', row: rowIndex, cell: cellIndex}); // 2 state변경후3
    console.log('between dispatch'); // 1
    dispatch({ type: 'SET_RECENTCELLS' }); // 3
    setTdStyle("after_click");
  });
  return (
    <>
      <td className={tdStyle} onClick={onClickTd}>{cellData}</td>
    </>
  );
};
module.exports = Td;