import React, { useState } from 'react';
import './style.css';
/*
Differences between forEach() and map() methods:
The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.1
*/
const numArr = [1, 2, 3];
const res = numArr.map((el) => el * 2);
console.log(numArr, res);

const res2 = numArr.forEach((val, i, arr) => (arr[i] = val * 2));
console.log(numArr, res2);

const person = {
  name: "Deepak",
  age: 28,
  printInfo: function() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}
person.printInfo()

export default function App() {
  const ERROR_MSG = 'Age is less than 18';
  const [text, setText] = useState('');
  const [isError, setError] = useState(false);

  const handleInputError = (e) => {
    setError(false);
    console.log(e.target.value);
    setText(e.target.value);
    if (e.target.value < 18) {
      setError(true);
    }
  };
  return (
    <div>
      <input type={text} onChange={handleInputError} />
      <br />
      {isError ? ERROR_MSG : null}
    </div>
  );
}
