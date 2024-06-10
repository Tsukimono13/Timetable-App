import { configureStore } from '@reduxjs/toolkit'
import { timetableDataReducer } from '../entities/Calendar/model/slice/timetableSlice'

export const store = configureStore({
  reducer: {
    timetable: timetableDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch