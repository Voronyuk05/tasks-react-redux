import { nanoid } from "nanoid"
export const addTask = (text) => {
    return {
        type: 'tasks/addTask',
        payload: {
            id: nanoid(),
            text: text,
            completed: false
        }  
  }
}