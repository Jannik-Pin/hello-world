// Select color input
// Select size input
let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
makeGrid(height, width);

sizePicker.addEventListener("click", (e) => {

  e.preventDefault();

  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  table.firstElementChild.remove();

  makeGrid(height, width);

});

function makeGrid(height, width) {

for (let r = 0; r < height; r++) {
    let row = table.insertRow(r);
    for (let c = 0; c < width; c++) {
      let cell = row.insertCell(c);
      cell.addEventListener("click", (e) => {
        cell.style.backgroundColor = color.value;
      })
    }
  }
}
