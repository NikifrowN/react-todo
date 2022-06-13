import styles from './styles.module.css';
import { Todo } from "../todo/component";

export const TodoList = ({filteredTodos, setTodos}) => {
   return(
      <div className={styles.root}>
         <ul className={styles.list}>
            {filteredTodos.map((todo) => (
               <Todo 
                  key={todo.id}
                  todo={todo}
                  todos={filteredTodos}
                  setTodos={setTodos}
               />
            ))}
         </ul>
      </div>
   )
}