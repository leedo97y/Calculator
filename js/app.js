const form = document.querySelector("form");
const displayBox = document.querySelector(".display-box");
const inputNumber = document.querySelectorAll("#button");
const inputResult = document.querySelector("#btn-result");
const inputClear = document.querySelector("#btn");

const display = (e) => {
  const value = e.target.value;
  displayBox.value += value;
};

const calculate = (e) => {
  displayBox.value = eval(e.target.form[0].value);
};
// eval 코드를 일단 쓰긴 했지만, 해킹 당할 위험이 크다.

const clear = () => {
  displayBox.value = "";
};

inputNumber.forEach((item) => {
  item.addEventListener("click", display);
});

inputResult.addEventListener("click", calculate);
inputClear.addEventListener("click", clear);
