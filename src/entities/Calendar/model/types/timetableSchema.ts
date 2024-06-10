import { TimetableEntry } from "./timetable";

export interface TimetableSchema {
    isLoading: boolean;
    error?: string;
    data?: TimetableEntry;
}
