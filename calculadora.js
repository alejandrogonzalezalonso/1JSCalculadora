var focus = document.getElementById("input1");

function setValue(siguienteValor){
    alert("FUNCIONO");
    focus.value = focus.value + siguienteValor;
}

//Funcion que dice que cuando le demos a suma cambie al input2 (pantalla de abajo)
function sum(){
    alert("ha cambiado de input");
    focus = document.getElementById("input2");
}

//Funcion que lleva el focus al id res y suma los dos elementos del input
function resultado(){
    document.getElementById("res").value = document.getElementById("input1").value + document.getElementById("input2").value;
}