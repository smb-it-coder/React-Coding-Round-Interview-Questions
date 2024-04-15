import React, { useState } from 'react';
import './style.css';
/*
Differences between forEach() and map() methods:
The forEach() method does not returns a new array based on the given array. 
 The map() method returns an entirely new array. The forEach() method returns “undefined“. 
 The map() method returns the newly created array according to the provided callback function.1
*/

// ======Map vs forEach===========

const numArr = [1, 2, 3];
const res = numArr.map((el) => el * 2);
console.log(numArr, res);

const res2 = numArr.forEach((val, i, arr) => (arr[i] = val * 2));
console.log(numArr, res2);

const person = {
  name: 'Deepak',
  age: 28,
  printInfo: function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};
person.printInfo();

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


// ============Merge 2 duplicate array and sort===========

const removeDup = (arr) => {
  let uniq_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let isUniq = false;
    let element = arr[i];
    // debugger
    for (let j = 0; j < uniq_arr.length; j++) {
      if (element === uniq_arr[j]) {
        isUniq = true;
        break;
      }
    }
    if (!isUniq) {
      uniq_arr.push(element);
    }
  }
  return uniq_arr;
};

const sortDup = (newArr) => {
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; newArr.length - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        // [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
};
var Arr_A = ['Ramesh', 'Suresh', 'Deepak', 'Suresh', 'Gopi'];
var Arr_B = ['Gopi', 'vendeesh', 'Deepak', 'Vedneesh'];
var arr = [...Arr_A, ...Arr_B];
var newArr = removeDup(arr);
console.log(sortDup(newArr));
