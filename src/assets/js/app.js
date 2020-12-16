"use strict"

let data1 = prompt("Введите данные");
let data2 = prompt("Введите данные");

function func(num1, num2) {

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Ошибка");
  }

  let firstNum = Number(num1);
  let secondNum = Number(num2);
  let binary = "";
  let arr = [];
  let octal = "";
  let hexadecimal = "";
  if (secondNum === 2) {
    while (firstNum > 1) {
      firstNum /= 2;
      let r1 = firstNum % 2;
      let r2 = parseInt(r1);
      let r3 = String(r2);
      bynary += r3;
    }
    console.log(binary);

  } else if (secondNum === 8) {
    let r1 = firstNum % 8;
    let r2 = parseInt(r1);
    arr.unshift(r2);

    while (firstNum >= 7) {
      firstNum /= 8;
      let r1 = firstNum % 8;
      let r2 = parseInt(r1);
      arr.unshift(r2);
    }
    for (let i = 0; i < arr.length; i++) {
      octal += arr[i];
    }
    console.log(octal);
  } else if (secondNum === 16) {
    let r1 = firstNum % 16;
    let r2 = parseInt(r1);
    arr.unshift(r2);

    while (firstNum >= 15) {
      firstNum /= 16;
      let r1 = firstNum % 16;
      let r2 = parseInt(r1);
      arr.unshift(r2);
    }
    for (let i = 0; i < arr.length; i++) {
      hexadecimal += arr[i];
    }
    console.log(hexadecimal);
  }
}
func(data1, data2);


