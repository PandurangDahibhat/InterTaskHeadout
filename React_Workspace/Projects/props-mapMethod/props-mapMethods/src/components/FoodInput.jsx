import styles from "./foodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter a food item here...."
      onKeyDown={handleKeyDown}
    ></input>
  );
};
export default FoodInput;
