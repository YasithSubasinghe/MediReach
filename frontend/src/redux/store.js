// import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/user";

// const Store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default Store;             //redux error handle by me

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

