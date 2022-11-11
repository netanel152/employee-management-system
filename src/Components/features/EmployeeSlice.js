import { createSlice } from "@reduxjs/toolkit";

export const EmployeeSlice = createSlice({
  name: "employeeActions",
  initialState: {
    allEmployeesData: [{}],
    allManagersData: [],
    newEmployee: {},
  },
  reducers: {
    setAllEmployeesData: (state, action) => {
      state.allEmployeesData = action.payload;
    },
    setAllManagersData: (state, action) => {
      state.allManagersData = action.payload;
    },
    setNewEmployee: (state, action) => {
      state.newEmployee = action.payload;
    },
  },
});

export const { setAllEmployeesData, setAllManagersData } =
  EmployeeSlice.actions;

export default EmployeeSlice.reducer;
