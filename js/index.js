let btnOperaciones = 0;

function incrementar(){
  updateDisplay(++btnOperaciones);
}
function neutro(){
  btnOperaciones = 0;
  updateDisplay(btnOperaciones);

}
function descrementar(){
  updateDisplay(--btnOperaciones);

}
function updateDisplay(val) {
  document.getElementById("neutro").innerHTML = val;
}