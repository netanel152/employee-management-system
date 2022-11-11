import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./Components/features/EmployeeSlice";
export const store = configureStore({
  reducer: {
    employeeActions: EmployeeReducer,
  },
});
