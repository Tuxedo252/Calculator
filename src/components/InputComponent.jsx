import React from 'react';
import '../index.css';

export default function InputComponent({ textToDisplay }) {
    return <><input type="text" className="inputStyle" placeholder="0" value={textToDisplay} readOnly /></>

}
