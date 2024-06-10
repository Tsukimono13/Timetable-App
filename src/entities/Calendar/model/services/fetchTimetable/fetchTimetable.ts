import { createAsyncThunk } from "@reduxjs/toolkit";
import { TimetableEntry } from "../../types/timetable";
import axios from "axios";

export const fetchTimetableData = createAsyncThunk<TimetableEntry, string, { rejectValue:  string  }>(
  "timetableData/fetchTimetableData",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TimetableEntry>("http://localhost:3001/timetable");

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
