import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../globals";
import axios from "axios";

export const getAllMarks = createAsyncThunk("marks/getAllMarks", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get(`${API}/marks`, config);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addMark = createAsyncThunk(
  "marks/addMark",
  async (values, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      console.log(`Bearer ${localStorage.getItem("token")}`);
      const { data } = await axios.post(`${API}/api/markdown`, values,config);
      return data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

const MarkSlice = createSlice({
  name: "marks",
  initialState: {
    marks: [],
    loading: false,
    marksInfo: null,
    error: null,
    success: false,
  },
  reducers: {
    clearSomeState: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMarks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMarks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.marks = payload.data;
      })
      .addCase(getAllMarks.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addMark.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMark.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.marks = payload.data;
      })
      .addCase(addMark.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { clearSomeState } = MarkSlice.actions;
export default MarkSlice.reducer;
