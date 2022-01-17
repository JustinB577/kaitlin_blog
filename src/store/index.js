import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { showList: false };

const navigationSlice = createSlice({
  name: 'navigationDropdown',
  initialState,
  reducers: {
    toggleDropdown(state) {
      state.showList = !state.showList;
    }
  }
});

const store = configureStore({
  reducer: { navigation: navigationSlice.reducer }
});

export const navigationActions = navigationSlice.actions;

export default store;
