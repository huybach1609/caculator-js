const display1EL = document.querySelector("#subDisplay");
const display2EL = document.querySelector("#mainDisplay");
const tempResultEL = document.querySelector(".temp-result");
const numbersEL = document.querySelectorAll(".number");
const operationEL = document.querySelectorAll(".operation");
const equalEL = document.querySelector(".equal");
const clearAllEL = document.querySelector(".all-clear");
const lastEntity = document.querySelector('.last-entity')

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// ghi vao man hinh
numbersEL.forEach((number) => {
  number.addEventListener("click", (e) => {
    // check xem có 1 dot hay chưa
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2EL.innerText = dis2Num;
  });
});

// chức năng thêm + - * /
operationEL.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (!dis2Num && !dis1Num) return;
    haveDot = false;
    lastOperation = e.target.innerText;
    if (dis2Num && dis1Num && lastOperation) {
      mathOperation();
      console.log("if");
    } else {
      result = parseFloat(dis2Num);
      console.log("else");
    }
    clearVar(lastOperation);
  });
});

function clearVar(name = "") {
  var status = display1EL.innerHTML;
  // add subdis
  dis1Num += dis2Num + " " + name + " ";
  display1EL.innerText = dis1Num;
  // clear main
  display2EL.innerText = "";
  dis2Num = "";
  // ghi vao ket qua
  if (status != "0") {
    display2EL.innerText = result;
  }
}

// tinh toan & ghi ket qua
function mathOperation() {
  if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "*") {
    result = parseFloat(result) / 100;
  }
}
// '=' operation
equalEL.addEventListener("click", () => {
  mathOperation();
  clearVar();
});

clearAllEL.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1EL.innerHTML = "0";
  display2EL.innerHTML = "0";
  result = "";
  tempResultEL.innerHTML = "";
});
lastEntity.addEventListener("click",()=>{
  display2EL.innerHTML = ''
  dis2Num = ''
})
// test function
function test() {
  operationEL.forEach((op) => {
    console.log(op);
  });
}

