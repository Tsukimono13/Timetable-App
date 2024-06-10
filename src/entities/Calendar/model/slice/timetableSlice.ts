import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TimetableSchema } from '../types/timetableSchema';
import { fetchTimetableData } from '../services/fetchTimetable/fetchTimetable';
import { TimetableEntry } from '../types/timetable';

const initialState: TimetableSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const timetableDataSlice = createSlice({
    name: 'timetable',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTimetableData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchTimetableData.fulfilled,
                (state, action: PayloadAction<TimetableEntry>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchTimetableData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: timetableDataActions } = timetableDataSlice;
export const { reducer: timetableDataReducer } = timetableDataSlice;
