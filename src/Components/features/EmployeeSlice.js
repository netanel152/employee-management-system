import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllEmployeesContent,
  getAllManagersContent,
  addNewEmployeeAPI,
  deleteEmployeeAPI,
  editEmployeeAPI
} from "../../Services/EmployeeService";

export const getAllEmployee = createAsyncThunk(
  "EmployeeSlice/getAllEmployee",
  async (data, thunkAPI) => {
    try {
      const res = await getAllEmployeesContent();
      return res;
    } catch (error) {}
  }
);

export const getAllManagers = createAsyncThunk(
  "EmployeeSlice/getAllManagers",
  async (data, thunkAPI) => {
    try {
      const res = await getAllManagersContent();
      return res;
    } catch (error) {}
  }
);

export const addNewEmployee = createAsyncThunk(
  "EmployeeSlice/addNewEmployee",
  async (data, thunkAPI) => {
    try {
      const res = await addNewEmployeeAPI(data);
      thunkAPI.dispatch(getAllEmployee());
      return res;
    } catch (error) {}
  }
);

export const deleteExistEmployee = createAsyncThunk(
  "EmployeeSlice/deleteExistEmployee",
  async (data, thunkAPI) => {
    try {
      const res = deleteEmployeeAPI(data);
      thunkAPI.dispatch(getAllEmployee());
      return res;
    } catch (error) {}
  }
);

export const editEmployee = createAsyncThunk(
  "EmployeeSlice/editEmployee",
  async (data, thunkAPI) => {
    try {
      const res = await editEmployeeAPI(data);
      thunkAPI.dispatch(getAllEmployee());
      return res;
    } catch (error) {}
  }
);

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
  extraReducers: {
    [getAllEmployee.pending]: (state, action) => {
    },
    [getAllEmployee.fulfilled]: (state, action) => {
      state.allEmployeesData = action.payload;
    },
    [getAllManagers.pending]: (state, action) => {
    },
    [getAllManagers.fulfilled]: (state, action) => {
      state.allManagersData = action.payload;
    },
    [addNewEmployee.fulfilled]: (state, action) => {
      state.newEmployee = action.payload;
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
