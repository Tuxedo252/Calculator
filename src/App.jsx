import React, { useState } from 'react';
import './index.css';
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
    <center className="mainContainerStyle">
      <div className="containerStyle">
        <InputComponent textToDisplay={inputText} />
        <ButtonContainer onButtonClick={handleClick} />
      </div>
    </center>
  )
}
