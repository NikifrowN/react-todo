import styles from './styles.module.css';
import SubmitIcon from './icons/submit.svg';

export const Form = ({inputText, setInputText, todos, setTodos}) => {
   const inputTextHandler = (e) => {
      setInputText(e.target.value);
   };

   const submitTodoHandler = (e) => {
      e.preventDefault();
      if (inputText.length > 0) {
         setTodos([
            ...todos, 
            {
               id: Math.floor(Math.random() * 10000),
               text: inputText,
               completed: false,
            }
         ]);
         setInputText('');
      }
   };

   return(
      <form className={styles.root}>
         <input
            className={styles.input}
            value={inputText}
            onChange={inputTextHandler}
            type="text"
         />
         <button 
            className={styles.btn}
            onClick={submitTodoHandler}
         >
            <img src={SubmitIcon} alt="submit button"/>
         </button>
      </form>
   );
}