import { createSlice } from "@reduxjs/toolkit";

export const EmployeeSlice = createSlice({
  name: "employeeActions",
  initialState: {
    allEmployeesData: [],
    allManagersData: [],
    newEmployee: {},
    isManager: false,
    currentEditEmployee: {},
    showEditModal: false,
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
    setIsManager: (state, action) => {
      state.isManager = action.payload;
    },
    setCurrentEditEmployee: (state, action) => {
      state.currentEditEmployee = action.payload;
    },
    setEditModal: (state, action) => {
      state.showEditModal = action.payload;
    },
  },
});

export const {
  setAllEmployeesData,
  setAllManagersData,
  setIsManager,
  setCurrentEditEmployee,
  setEditModal,
} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
