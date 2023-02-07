import React from 'react';
import './button.css';

interface ButtonProps{
  legend?: string;
}

const Button = (props:ButtonProps)=>{
  const {legend} = props; 
  return (
    <button>{legend}</button>
  )
}

export default Button;