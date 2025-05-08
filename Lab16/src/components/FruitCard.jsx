import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFruit } from '../features/fruitsSlice';

const FruitCard = ({ fruit }) => {
  const dispatch = useDispatch();
  const selectedFruits = useSelector(state => state.fruits.selectedFruits);
  const isSelected = selectedFruits.includes(fruit);

  return (
    <div
      onClick={() => dispatch(toggleFruit(fruit))}
      style={{
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        backgroundColor: isSelected ? 'lightgreen' : 'white',
        cursor: 'pointer'
      }}
    >
      {fruit}
    </div>
  );
};

export default FruitCard;
