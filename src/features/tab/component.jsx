import styles from './styles.module.css';

export const Tab = ({activeTab, label, value, onClick}) => (
   <button 
      className={activeTab !== value ?  styles.tab : styles.active}
      value={value}
      onClick={onClick}
   >
      {label}
   </button>
)