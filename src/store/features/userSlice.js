import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
    isAuthenticated: false,
    user: null,
    firstName: "Yumi",
    lastName: "Jar",
    email: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
        },
    },
});
console.log(userSlice);
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
