import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // isFetching: false,
    token: null,
    // rememberMe: false,
    // error: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            (state.user = null),
                (state.isFetching = true),
                (state.token = null),
                (state.rememberMe = false),
                (state.error = false);
        },
    },
    loginSuccess: (state, { payload }) => {
        (state.user = payload),
            (state.isFetching = false),
            (state.token = payload.token),
            (state.rememberMe = payload.rememberMe),
            (state.error = false);

        if (payload.rememberMe || localStorage.getItem("firstName")) {
            localStorage.setItem("firstName", payload.firstName);
            localStorage.setItem("lastName", payload.lastName);
        }
    },
    loginError: (state, { payload }) => {
        (state.user = null),
            (state.isFetching = false),
            (state.token = null),
            (state.rememberMe = false),
            (state.error = payload.error);
    },
});
//console.log(authSlice);
export const { loginStart, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
