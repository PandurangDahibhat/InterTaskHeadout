import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalval] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setcalval(" ");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setcalval(result);
    } else {
      const newDispayVal = calVal + buttontext;
      setcalval(newDispayVal);
    }
  };

  return (
    <div className={styles.stylling}>
      <div>
        <h1>Calculator</h1>
      </div>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </div>
  );
}

export default App;
