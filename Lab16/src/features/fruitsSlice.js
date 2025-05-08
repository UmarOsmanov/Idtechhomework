import { createSlice } from '@reduxjs/toolkit';

const initialFruits = ['Alma', 'Armud', 'Banan', 'Nar', 'Üzüm'];

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState: {
    allFruits: initialFruits,
    selectedFruits: [],
  },
  reducers: {
    toggleFruit(state, action) {
      const fruit = action.payload;
      if (state.selectedFruits.includes(fruit)) {
        state.selectedFruits = state.selectedFruits.filter(f => f !== fruit);
      } else {
        state.selectedFruits.push(fruit);
      }
    },
    selectAll(state) {
      state.selectedFruits = [...state.allFruits];
    },
    clearAll(state) {
      state.selectedFruits = [];
    }
  },
});

export const { toggleFruit, selectAll, clearAll } = fruitsSlice.actions;
export default fruitsSlice.reducer;
