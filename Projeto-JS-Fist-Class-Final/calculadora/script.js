
//Modo escuro e modo claro

function dark_button(){
    clearClass();
    document.querySelector(".body_page").classList.add("dark_button");
}

function light_button(){
  clearClass();
  document.querySelector(".body_page").classList.add("light_button");
}

function clearClass(){
  document.querySelector(".body_page").classList.remove("light_button");
  document.querySelector(".body_page").classList.remove("dark_button");
}


function increase_size(){
  document.querySelector(".titulolocal").style.fontSize="40px";
}

function decrease_size(){
  document.querySelector(".titulolocal").style.fontSize="30px";
}

//Aumentar e diminuir tamanho de fonte

var size = 17;

function increase(){
    size ++;
    document.body.style.fontSize=size+"px";
    if(size == 40){
        alert("Letra muito grande!");
    }
}

function decrease(){
    size --;
    document.body.style.fontSize=size+"px";
    if(size == 14){
        alert("Letra muito pequena!");
    }
}

//Calculadora
function insert(num) {
  var numeros = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = (numeros + num);
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function raiz() {
  var raiz_quadrada = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = Math.sqrt(raiz_quadrada);
}

function xquad() {
  var quadrado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = Math.pow(quadrado, 2);
}

function xcubo() {
  var cubo = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = Math.pow(cubo, 3);
}

function pi() {
  var pi = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = 3.14;
}

function calc() {
  var resultado = document.getElementById("resultado").innerHTML;

  if (resultado) {
      document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
      document.getElementById("resultado").innerHTML = "Sem valor";
  }
}