import { Paper, List, Button, Box, Typography } from '@mui/material'
import { FC, useState } from 'react'
import TodoInputText from './TodoInputText'
import { useAppSelector } from '../hooks/reduxHooks'
import TodoItem from './TodoItem'
import { Todo } from '../types/types'
const Todos: FC = () => {

  const [completedTodo, setCompletedTodo] = useState<boolean>(false)

  const todos: Array<Todo> = useAppSelector((state) => state.todos.value)


  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
      <Paper sx={{ padding: "2em", textAlign: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box>
          <Typography variant='h4'>
            Задачник
          </Typography>
        </Box>
        <TodoInputText />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", border: "1px solid #1565C0" }}>
          <Typography sx={{ backgroundColor: "#1565C0", color: "white", padding: "5px" }}>
            {completedTodo ? 'Completed' : 'Active'}
          </Typography>
          {
            todos.filter(c => c.completed === completedTodo).length <= 0 ?
              <>
                <Typography>
                  Нет задач
                </Typography>
              </>
              :
              <List>
                {todos.filter(c => c.completed === completedTodo).map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </List>
          }
          <Box>
            <Button variant="text" onClick={() => setCompletedTodo(false)}>active</Button>
            <Button variant="text" onClick={() => setCompletedTodo(true)} >completed</Button>
          </Box>
        </Box>
      </Paper >
    </Box>
  )
}

export default Todos