import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { getTasks, addTasks, deleteTasks } from "./operations";



const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        deleteTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted: (state, action) => {
            for (const task of state) {
                if (task.id === action.payload) {
                  task.completed = !task.completed;
                  break;
                }
            }

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                console.log(action);
                state.items = action.payload
            })
            .addCase(getTasks.rejected, (state,action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(addTasks.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(addTasks.fulfilled, (state,action) => {
                state.isLoading = false
                state.error = null
                state.items.push(action.payload.data)
            })
            .addCase(addTasks.rejected, (state,action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(deleteTasks.pending,  (state,action) => {
                state.isLoading = true
            })
            .addCase(deleteTasks.fulfilled, (state,action) => {
                state.isLoading = false
                state.error = null
                state.items.filter(task => task.id === action.payload.id)
            })
            .addCase(deleteTasks.rejected, (state,action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const {addTask, deleteTask, toggleCompleted} = tasksSlice.actions
export const tasksReducers = tasksSlice.reducer