import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
  );
};
export default WelcomeMsg;
