// import { combineReducers } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
// import authReducer from "./authSlice";
// import taskReducer from "./taskSlice";

// export default combineReducers({
//   counter: counterReducer,
//   auth: authReducer,
//   task: taskReducer,
// });

import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    user: {},
    isAuth: false,
    tasks: [],
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.user = { ...action.payload.user };
      state.isAuth = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
    updateUser: (state, action) => {
      state.user = { ...action.payload.user };
    },
    setTasks: (state, action) => {
      state.tasks = [...action.payload];
    },
    changeTask: (state, action) => {
      let task = state.tasks.findIndex((x) => x._id === action.payload._id);
      if (task > -1) {
        let _stateTemp = [...state.tasks];
        _stateTemp[task] = action.payload;
        state.tasks = [..._stateTemp];
      }
    },
    removeTask: (state, action) => {
      let _stateTemp = state.tasks.filter((x) => x._id !== action.payload);
      state.tasks = [..._stateTemp];
    },
    pushTask: (state, action) => {
      state.tasks = state.tasks.concat(action.payload);
    },
  },
});

export const {
  authenticate,
  logout,
  updateUser,
  setTasks,
  changeTask,
  removeTask,
  pushTask,
} = appSlice.actions;

export default appSlice.reducer;
