import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

//as yerine : araştır
const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: (Math.floor(Math.random() * 1000) + 1).toString(),
          isModerator: false,
        },
      };
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export const { logIn, logOut, toggleModerator } = auth.actions;

export default auth.reducer;
