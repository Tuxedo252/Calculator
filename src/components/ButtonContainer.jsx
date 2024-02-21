import React from 'react';
import '../index.css';

export default function ButtonContainer({ onButtonClick }) {
    const buttons = [
        "C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]
    return (
        <div className="buttonContainerStyle">
            {buttons.map(item => <button onClick={() => onButtonClick(item)} key={item} className="buttonStyle">{item}</button>)}
        </div>
    )
}
