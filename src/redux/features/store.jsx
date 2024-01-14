import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import markdownSlice from "./markdownSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
    marks: markdownSlice,
  },
});
