function validarNome(x) {
  var nome = document.getElementById("nome");
  if (!isNaN(nome.value)) {
    x.style.backgroundColor = "red";
  }else {
    x.style.backgroundColor = "white";
    return;
  }
  }

function converte(x) {
  var nome = document.getElementById("nome");
  nome.value = nome.value.toUpperCase();
}

function validarCpf(x) {
  var cpf = document.getElementById("cpf");
  cpf.value = cpf.value.replace(/\.|-/g, "");
  console.log(cpf.value);

  var soma = 0;
  soma += cpf.value[0] * 10;
  soma += cpf.value[1] * 9;
  soma += cpf.value[2] * 8;
  soma += cpf.value[3] * 7;
  soma += cpf.value[4] * 6;
  soma += cpf.value[5] * 5;
  soma += cpf.value[6] * 4;
  soma += cpf.value[7] * 3;
  soma += cpf.value[8] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  console.log("d1 = ", soma);
  if (soma != cpf.value[9]) x.style.backgroundColor = "red";
  else
  x.style.backgroundColor = "white";

  soma = 0;
  soma += cpf.value[0] * 10;
  soma += cpf.value[1] * 10;
  soma += cpf.value[2] * 9;
  soma += cpf.value[3] * 8;
  soma += cpf.value[4] * 7;
  soma += cpf.value[5] * 6;
  soma += cpf.value[6] * 5;
  soma += cpf.value[7] * 4;
  soma += cpf.value[8] * 3;
  soma += cpf.value[9] * 2;
  soma = (soma * 10) % 11;
  if (soma == 10 || soma == 11) soma = 0;
  console.log("d2= ", soma);
  if (soma != cpf.value[10]) x.style.backgroundColor = "red";
  else 
  x.style.backgroundColor = "white";
}

function validarDia(x) {
  var dia = parseInt(document.getElementById("dia").value);
  if (dia > 31 || dia < 1) {
    x.style.backgroundColor = "red";
    return;
  } else {
    return;
  }
}

function validarAno(x) {
  var ano = parseInt(document.getElementById("anoNasc").value);

  if (ano > 2021 || ano < 1891) {
    x.style.backgroundColor = "red";
    return;
  } else {
    return;
  }
}

// function validacaoEmail(field) {
//   usuario = field.value.substring(0, field.value.indexOf("@"));
//   dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
//   if (
//     usuario.length >= 1 &&
//     dominio.length >= 3 &&
//     usuario.search("@") == -1 &&
//     dominio.search("@") == -1 &&
//     usuario.search(" ") == -1 &&
//     dominio.search(" ") == -1 &&
//     dominio.search(".") != -1 &&
//     dominio.indexOf(".") >= 1 &&
//     dominio.lastIndexOf(".") < dominio.length - 1
//   ) {
//     document.getElementById("msgemail").innerHTML = "E-mail válido";
//     alert("email valido");
//   } else {
//     document.getElementById("msgemail").innerHTML =
//       "<font color='red'>Email inválido </font>";
//     alert("E-mail invalido");
//   }
// }

function enviar() {
  let nome = document.getElementById("nome").value;
  console.log(nome);
  let cpf = document.getElementById("cpf").value;
  cpf = cpf.replace(/\.|-/g, "");
  let anoNasc = document.getElementById("anoNasc").value;
  let idade = 2021 - anoNasc;
  console.log(idade);
  let email = document.getElementById("msgemail").value;
  let sexo = document.getElementById("sexo");

  let texto = document.getElementById("textofinal");
  texto.innerHTML =
    "Olá, " +
    nome +
    ", seu login é " +
    email +
    ", você tem " +
    idade +
    " anos, se define como pessoa do sexo " +
    sexo.value +
    " e pode usar usar " +
    cpf +
    " como senha.";
}
