import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'; // Import the reducer from userSlice

// Configure store
const store = configureStore({
    reducer: {
        savedProp: userReducer, // Use userReducer, which is userSlice.reducer
    },
});

export default store;
