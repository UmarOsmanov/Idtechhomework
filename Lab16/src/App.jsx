import React from 'react';
import { useSelector } from 'react-redux';
import FruitCard from './components/FruitCard';
import Controls from './components/Controls';
import SelectedFruits from './components/SelectedFruits';

const App = () => {
  const allFruits = useSelector(state => state.fruits.allFruits);

  return (
    <div style={{ padding: '20px', textAlign:'center' }}>
      <h1>Meyvə Seçimi</h1>
      <Controls />
      <div style={{ display: 'flex', flexWrap: 'wrap', textAlign:'center',justifyContent:'center' }}>
        {allFruits.map(fruit => (
          <FruitCard key={fruit} fruit={fruit} />
        ))}
      </div>
      <SelectedFruits />
    </div>
  );
};

export default App;

