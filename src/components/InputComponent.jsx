import React from 'react';
import styles from './InputComponent.module.css';

export default function InputComponent({ textToDisplay }) {
    return <><input type="text" className={styles.inputStyle} placeholder="0" value={textToDisplay} readOnly /></>

}
