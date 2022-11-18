// function js_style() {
//   let elem = document.getElementById("text");
//   elem.style.fontSize = "25px";
//   elem.style.color = "yellow";
//   elem.style.background = "blue";
//   elem.style.border = "3px solid purple";
//   elem.style.width = "100px";
// }

// function getFormvalue() {
//   let name = document.getElementsByTagName("input");
//   let result = [];
//   for (let elem of name) {
//     result.push(elem.value) && result.length <= 2;
//   }
//   let pElement = document.createElement("p");
//   pElement.innerHTML = `${result[0]} ${result[1]}`;
//   document.body.appendChild(pElement);
// }

// function getAttributes() {
//   let p = document.getElementById("w3r");
//   let pHref = document.createElement("p");
//   let pHreflang = document.createElement("p");
//   let pRel = document.createElement("p");
//   let pTarget = document.createElement("p");
//   let pType = document.createElement("p");
//   pHref.innerHTML = p.href;
//   pHreflang.innerHTML = p.hreflang;
//   pRel.innerHTML = p.rel;
//   pTarget.innerHTML = p.target;
//   pType.innerHTML = p.type;
//   document.body.appendChild(pHref);
//   document.body.appendChild(pHreflang);
//   document.body.appendChild(pRel);
//   document.body.appendChild(pTarget);
//   document.body.appendChild(pType);
// }

// function insert_Row() {
//   let table = document.getElementById("sampleTable");
//   let trCount = table.querySelectorAll("tr").length;
//   let cellCount = 1;
//   table.insertAdjacentHTML('beforeend', `<tr><td class="td">Row${++trCount} cell${cellCount}</td><td class="td">Row${trCount} cell${++cellCount}</td></tr>`)
// }

// function changeContent() {
//   let table = document.querySelector("table");
//   let row = prompt("Enter the number of row", "");
//   let cell = prompt("Enter the number of cell");
//   let text = prompt("Enter the text");
//   table.rows[row - 1].cells[cell - 1].innerHTML = text;
// }

// function createTable() {
//   table = document.getElementById("myTable");
//   let row = prompt("Enter the number of row", "");
//   let cell = prompt("Enter the number of cell", "");
//   for (let roww = 0; roww < parseInt(row); roww++) {
//     let x = document.getElementById("myTable").insertRow(roww);
//     for (let celll = 0; celll < parseInt(cell); celll++) {
//       let y = x.insertCell(celll);
//       y.innerHTML = "row" + roww + "cell" + celll;
//     }
//   }
// }
