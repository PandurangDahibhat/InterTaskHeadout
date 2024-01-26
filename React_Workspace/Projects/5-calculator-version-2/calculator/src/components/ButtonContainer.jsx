//import styles from "./Display.module.css";
import styles from "./ButtonsContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => {
        return (
          <button
            className={styles.button}
            onClick={() => onButtonClick(buttonNames)}
          >
            {buttonNames}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
