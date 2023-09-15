import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    firstName: null,
    lastName: null,
    email: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, { payload }) => {
            //actionからpayloadを分割代入
            state.token = payload.token;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.email = payload.email;
        },
        userLogout: (state) => {
            state.token = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
        },
        userName: (state, { payload }) => {
            // 名前を更新する処理
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        },
    },
});
//console.log(userSlice);
export const { userLogin, userLogout, userName } = userSlice.actions;
export default userSlice.reducer;
