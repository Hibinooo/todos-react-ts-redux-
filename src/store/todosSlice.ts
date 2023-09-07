import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types/types'

interface TodosState {
  value: Array<Todo>
}


const initialState: TodosState = {
  value: [],
}


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
    },
    changeTodo: (state, action: PayloadAction<string>) => {
      const a = state.value.find(c => c.id === action.payload)
      if (a) {
        a.completed = !a.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(c => c.id !== action.payload)
    },
  },
})

export const { addTodo, changeTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer