import styles from './styles.module.css';
import CompleteIcon from '../icons/complete.svg';
import DeleteIcon from '../icons/delete.svg';

export const Todo = ({todo, todos, setTodos}) => {
   const deleteHandler = () => {
      setTodos(todos.filter((item) => item.id !== todo.id))
   }
   const completeHandler = () => {
      setTodos(todos.map((item) => {
         if(item.id === todo.id) {
            return {
               ...item, 
               completed: true,
            };
         };
         return item;
      }))
   }

   return(
      <div className={styles.root}>
         <li className={todo.completed ? styles.completed : ''}>
            {todo.text}
         </li>
         <button aria-label="complete" onClick={completeHandler}>
            <img src={CompleteIcon} alt="complete button"/>
         </button>
         <button aria-label="delete" onClick={deleteHandler}>
            <img src={DeleteIcon} alt="delete button"/>
         </button>
      </div>
   )
}