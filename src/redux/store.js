import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasksReducers } from './tasksSlice'
import { filtersReducers } from './filterSlice'



const reducers = combineReducers({
    tasks: tasksReducers,
    filter: filtersReducers
})


export const store = configureStore({reducer: reducers})
