import { FC, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { useAppDispatch } from '../hooks/reduxHooks'
import { addTodo } from '../store/todosSlice'



const TodoInputText: FC = () => {
  const [inputText, setInputText] = useState<string>('')

  const dispatch = useAppDispatch()

  const saveTodo = () => {
    dispatch(addTodo(
      {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        title: inputText,
        completed: false
      }
    ));
    setInputText('')
  }

  return (
    <Box >
      <TextField fullWidth value={inputText} placeholder='Введите название задачи' variant="outlined" onChange={(e) => setInputText(e.target.value)} />
      <Button fullWidth disabled={!(inputText.length > 0)} variant="contained" onClick={saveTodo}>Сохранить</Button>
    </Box>
  )
}

export default TodoInputText