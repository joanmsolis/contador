let btnOperaciones = 0;

function incrementar(){
  actualizar(++btnOperaciones);
}
function neutro(){
  btnOperaciones = 0;
  actualizar(btnOperaciones);

}
function descrementar(){
  actualizar(--btnOperaciones);

}
function actualizar(contar) {
  document.getElementById("neutro").innerHTML = contar;
}