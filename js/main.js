// variable declaration
const calcOut = document.querySelector(".output");
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
const calcGrid = document.querySelector(".calc-grid");

// topkeys
const topKeys = ["del", "root", "div", "back"];
const bottomKeys = [".", 0, "="];

// Create calc keys
const generateCalcKeys = () => {
  topKeys.forEach((key) => {
    let el = document.createElement("div");
    el.id = key;
    el.addEventListener("click", handleKeyClick);
    el.innerHTML = `
    <img src="/images/${key}.png" 
    alt= "${key} - image"
    style="height:100%;width:auto;margin:auto"
     >`;
    calcGrid.appendChild(el);
  });

  //add opkeys
  for (let i = 1; i <= 9; i++) {
    const key = document.createElement("div"),
      key2 = document.createElement("div");
    key.innerHTML = i;
    key.id = i;
    key.addEventListener("click", handleKeyClick);
    calcGrid.appendChild(key);

    if (i === 3) {
      key2.innerHTML = "*";
      key2.id = "*";
      key2.addEventListener("click", handleKeyClick);
      calcGrid.appendChild(key2);
    } else if (i === 6) {
      key2.innerHTML = "-";
      key2.id = "-";
      key2.addEventListener("click", handleKeyClick);
      calcGrid.appendChild(key2);
    } else if (i === 9) {
      key2.innerHTML = "+";
      key2.id = "+";
      key2.addEventListener("click", handleKeyClick);
      calcGrid.appendChild(key2);
    }
  }

  // Add bottom keys
  bottomKeys.forEach((key) => {
    let el = document.createElement("div");
    el.innerHTML = key;
    el.id = key;
    el.addEventListener("click", handleKeyClick);
    if (key === "=") {
      el.style = "width : 46%;";
    }
    calcGrid.appendChild(el);
  });
};

generateCalcKeys();

function handleKeyClick(e) {
  let opStr = operation.innerHTML;
  opStr += ["+", "-", "*", "div", "="].includes(e.target.id)
    ? ` ${e.target.id} `
    : e.target.id;

  operation.innerHTML = opStr;
}
