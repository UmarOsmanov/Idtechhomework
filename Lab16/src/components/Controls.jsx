import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAll, clearAll } from '../features/fruitsSlice';

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '20px 0' }}>
      <button onClick={() => dispatch(selectAll())}>Bütün meyvələri seç</button>
      <button onClick={() => dispatch(clearAll())} style={{ marginLeft: '10px' }}>Bütün meyvələri sil</button>
    </div>
  );
};

export default Controls;
