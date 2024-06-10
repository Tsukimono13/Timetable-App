import { RootState } from "../../../../config/store";

export const getTimetableData = (state: RootState) => state.timetable.data || [];
export const getTimetableDataIsLoading = (state: RootState) => state.timetable.isLoading;
export const getTimetableDataError = (state: RootState) => state.timetable.error;