const button = document.querySelectorAll("#button");

function onClickBtn(event) {
  const value = parseInt(event.target.textContent);
  if (typeof value === NaN) {
    event.target.textContent = "";
  }
  console.log(value);
}

button.forEach((btn) => {
  addEventListener("click", onClickBtn);
});
// 다시짜기
