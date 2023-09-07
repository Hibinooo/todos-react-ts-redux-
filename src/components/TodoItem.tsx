import { FC } from 'react'
import { ListItemButton, Checkbox, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material'
import { Todo } from '../types/types'
import { useAppDispatch } from '../hooks/reduxHooks'
import { changeTodo, deleteTodo } from '../store/todosSlice'
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  todo: Todo
};


const TodoItem: FC<Props> = (Props) => {

  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(changeTodo(Props.todo.id))
  }

  const delTodo = () => {
    dispatch(deleteTodo(Props.todo.id))
  }

  return (
    <ListItemButton>
      <Tooltip title={Props.todo.completed ? 'Отметить как не выполненное' : 'Отметить как выполненное'}>
        <Checkbox onChange={handleChange} checked={Props.todo.completed} />
      </Tooltip>
      <ListItemText>
        <Typography sx={{ textDecoration: Props.todo.completed ? 'line-through' : '' }}>
          {Props.todo.title}
        </Typography>
      </ListItemText>
      <Tooltip title="Удалить задачу">
        <ListItemIcon onClick={delTodo}>
          <DeleteIcon />
        </ListItemIcon>
      </Tooltip>

    </ListItemButton>
  )
}

export default TodoItem