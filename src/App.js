import React, { useState } from 'react';
import './style.css';

const numArr = [1, 2, 3];

const res = numArr.map((el) => el * 2);
console.log(numArr, res); // [1, 2, 3] [2, 4, 6]

const res2 = numArr.forEach((el, i, arr) => (arr[i] = el * 2));
console.log(numArr, res2); // [2, 4, 6] undefined

const obj = {
  name: 'Ram',
  age: 21,
  printInfo: function () {
    console.log(`My name is ${this.name}, and my age is ${this.age}`);
  },
};

obj.printInfo(); // My name is Ram, and my age is 21

export default function App() {
  const ERROR_MSG = 'Age is must be greater than 18';
  const [text, setText] = useState('');
  const [isError, setError] = useState(false);
  const handleTextInput = (e) => {
    setError(false);
    console.log(e.target.value);
    setText(e.target.value);
    if (e.target.value < 18) {
      setError(true);
    }
  };
  return (
    <div>
      <input value={text} onChange={handleTextInput} />
      <br />
      {isError ? ERROR_MSG : null}
    </div>
  );
}
