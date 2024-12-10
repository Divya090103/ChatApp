import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open:false,
    type:'Contact'
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toogleSidebar(state) {
      console.log("Current type:", state.sidebar.type); // This will log the current type
      state.sidebar.open = !state.sidebar.open;
      state.sidebar.type='Contact'

     
    },
    updateSidebar(state, action) {
      
        console.log("update the sidebar")
        console.log("updated value",action.payload.type)
        state.sidebar.type = action.payload.type;
  
    },
  },
});

export const { toogleSidebar, updateSidebar } = appSlice.actions;
export default appSlice.reducer;

