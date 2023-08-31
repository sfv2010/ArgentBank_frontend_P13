import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    // devTools:
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
});
