import React, { useState } from 'react';
import styles from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import InputComponent from './components/InputComponent';

export default function App() {
  const [inputText, setInputText] = useState("");
  const handleClick = (item) => {
    if (item === "C") {
      setInputText("");
    }
    else if (item === "=") {
      let result = eval(inputText);
      setInputText(result);
    }
    else {
      let newInputText = inputText + item;
      setInputText(newInputText);
    }
  }

  return (
    <center className={styles.mainContainerStyle}>
      <div className={styles.containerStyle}>
        <InputComponent textToDisplay={inputText} />
        <ButtonContainer onButtonClick={handleClick} />
      </div>
    </center>
  )
}
