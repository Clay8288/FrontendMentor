let bill = document.getElementById("input-bill");
let tipsBtn = document.querySelectorAll("#reduc")
let customTips = document.getElementById("custom")
let people = document.getElementById("input-people");
let user = document.querySelector(".user");
let tip = document.querySelector(".amount-tip");
let total = document.querySelector(".amount-total");
let resetBtn = document.querySelector(".reset");
let error = document.getElementById("error");


if (bill.value === '') {

  resetBtn.style.opacity = 0.2
  resetBtn.style.cursor = "not-allowed"

}

// We calculate all differents tips amount
tipsBtn.forEach((tipBtn) =>
  tipBtn.addEventListener("click", function (e) {
    tipBtn.className = "clicked"
    console.log(bill.value)
    tipBtn.style.backgroundColor = "hsl(172, 67%, 45%)"

    let tipPercentage = +tipBtn.innerText.slice(0, -1) / 100;
    let billValue = +bill.value;
    let peopleValue = +people.value;

    resetBtn.style.opacity = 1
    resetBtn.style.cursor = "pointer"

    const tipCalculate = function () {
      return ((billValue * tipPercentage) / peopleValue).toFixed(2);
    };

    const totalCalculate = function () {
      return (((billValue * tipPercentage) + billValue) / peopleValue).toFixed(2);
    };

    if (people.value == '') {

      error.innerHTML = "Can't be zero"
      error.style.color = "red"
      user.style.border = "0.1rem solid red"

    } else {

      tip.innerText = "$" + tipCalculate();
      total.innerText = "$" + totalCalculate();

    }

  }));


// We calculate the custom tips
customTips.addEventListener("input", function () {

  let customValue = +customTips.value / 100;
  let billValue = +bill.value;
  let peopleValue = +people.value;

  const tipCalculate = function () {
    return ((billValue * customValue) / peopleValue).toFixed(2);
  };

  const totalCalculate = function () {
    return (((billValue * customValue) + billValue) / peopleValue).toFixed(2);
  };

  if (people.value == '') {

    error.innerHTML = "Can't be zero"
    error.style.color = "red"
    user.style.border = "0.1rem solid red"

  } else {

    tip.innerText = "$" + tipCalculate();
    total.innerText = "$" + totalCalculate();
  }

})


// We reset all inputs
resetBtn.addEventListener("click", () => {
  document.location.reload();
  bill.value = "";
  people.value = "";
});