import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: 'Contact', // media, starred, contact
  }
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: { // corrected typo here
    // toggle sidebar
    toogleSidebar(state) { // This should be toggleSidebar, not toogleSidebar
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebar(state, action) {
      state.sidebar.type = action.payload.type;
    }
  }
});

// Thunk function to toggle the sidebar
export const {toogleSidebar, updateSidebar} = slice.actions;


export default slice.reducer;
