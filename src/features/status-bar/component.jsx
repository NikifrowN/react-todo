import styles from './styles.module.css';
import { useState } from 'react';
import { Tab } from '../tab/component';

export const StatusBar = ({setStatus, todos, setTodos}) => {
   const [activeTab, setActiveTab] = useState('all');

   const statusHandler = (e) => {
      setStatus(e.target.value);
      setActiveTab(e.target.value);
   };

   const deleteCompletedHandler = () => {
      setTodos(todos.filter((item) => item.completed !== true))
   };

   let activeTodos = todos.filter(todo => todo.completed === false).length;

   return(
      <div className={styles.root}>
         <p>
            Active todos: {activeTodos}
         </p>
         <div className={styles.tabs}>
            <Tab
               activeTab={activeTab}
               value='all'
               label='All'
               onClick={statusHandler}
            />
            <Tab 
               activeTab={activeTab}
               value='active'
               label='Active'
               onClick={statusHandler}
            />
            <Tab
               activeTab={activeTab}
               value='completed'
               label='Completed'
               onClick={statusHandler}
            />
         </div>
         <button 
            className={styles.btn}
            onClick={deleteCompletedHandler}
         >
            Clear completed
         </button>
      </div>
   )
}