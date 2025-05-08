import React from 'react';
import { useSelector } from 'react-redux';

const SelectedFruits = () => {
  const selectedFruits = useSelector(state => state.fruits.selectedFruits);

  return (
    <div>
      <h3>Seçilmiş Meyvələr:</h3>
      <ul>
        {selectedFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedFruits;
