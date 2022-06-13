import styles from './styles.module.css';
import { useState, useEffect } from "react";
import { Form } from "../form/component";
import { TodoList } from '../todos/todos-list/component';
import { StatusBar } from '../status-bar/component';

export const Main = () => {
   const [inputText, setInputText] = useState('');
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState('all');
   const [filteredTodos, setFilteredTodos] = useState([]);

   useEffect(() => {
      filterHandler(); 
   }, [todos, status]);

   const filterHandler = () => {
      switch(status) {
         case 'completed':
            setFilteredTodos(todos.filter(todo => todo.completed === true));
            break;
         case 'active':
            setFilteredTodos(todos.filter(todo => todo.completed === false));
            break;      
         default:
            setFilteredTodos(todos);
            break;      
      }
   };

   return(
      <main className={styles.root}>
         <StatusBar
            status={status} 
            setStatus={setStatus}
            todos={todos}
            setTodos={setTodos}
         />
         <Form 
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos} 
         />
         <TodoList
            filteredTodos={filteredTodos}
            setTodos={setTodos}
         />
      </main>
   )
}