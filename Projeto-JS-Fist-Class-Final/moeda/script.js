function calcular(){
    var valor = document.getElementById("valor").value;
    var valor2 = document.getElementById("valor");
    var moeda1 = document.getElementById("moeda1").value;
    var moeda2 = document.getElementById("moeda2").value;
    var resultado = document.getElementById("resultado");
    
    if (valor > 0 && Number(valor)){
        valor2.style.color = "black";
        if (moeda1 == moeda2){
            resultado.value = moeda1 + ": " + valor;
        }
        if (moeda1 == "Real"){
            if (moeda2 == "Dólar Americano"){
                conversao = valor*0.17783; //Real para Dolar
                resultado.value = "Valor Convertido: USD "+conversao.toFixed(2);
            } else if (moeda2 == "Dólar Canadense"){
                conversao = valor*0.22130; //Real para Dolar CANADENSE
                resultado.value = "Valor Convertido: CAD "+conversao.toFixed(2);
            } else if (moeda2 == "Peso Argentino"){
                conversao = valor*16.20815; //Real para Peso Argentino
                resultado.value = "Valor Convertido: ARS "+conversao.toFixed(2);
            } else if (moeda2 == "Euro"){
                conversao = valor/6.6935;//Real para EURO
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            } else if(moeda2 == "Libra"){
                conversao = valor/7.81279; //Real para LIBRA
                resultado.value = "Valor Convertido: GBP "+conversao.toFixed(2);
            }
        } 
        if(moeda1 == "Dólar Americano"){
            if (moeda2 == "Real"){
                conversao = valor/0.17783; //Dolar para real
                resultado.value = "Valor Convertido: BRL "+conversao.toFixed(2);
            } else if(moeda2 == "Dólar Canadense"){
                conversao = valor*1.2444; //DOLAR PARA DOLAR CANADENSE
                resultado.value = "Valor Convertido: CAD "+conversao.toFixed(2);
            } else if(moeda2 == "Euro"){
                conversao = valor*0.8402; //DOLAR PARA EURO
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            } else if(moeda2 == "Libra"){
                conversao = valor*0.7194; //DOLAR PARA LIBRA 91.1369
                resultado.value = "Valor Convertido: GBP "+conversao.toFixed(2);
            } else if(moeda2 == "Peso Argentino"){
                conversao = valor*91.1369; //DOLAR PARA peso
                resultado.value = "Valor Convertido: ARS "+conversao.toFixed(2);
            }
        }
        if(moeda1 == "Dólar Canadense"){
            if (moeda2 == "Dólar Americano"){
                conversao = valor*0.80363;//Dolar Canadense para dolar
                resultado.value = "Valor Convertido: USD "+conversao.toFixed(2);
            } else if(moeda2 == "Euro"){
                conversao = valor/1.48126;//Dolar Canadense para EURO
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            } else if(moeda2 == "Libra"){
                conversao = valor*0.5767;//Dolar Canadense para LIBRA
                resultado.value = "Valor Convertido: GBP "+conversao.toFixed(2);
            } else if(moeda2 == "Peso Argentino"){
                conversao = valor*73.24093;//Dolar Canadense para PESO
                resultado.value = "Valor Convertido: ARS "+conversao.toFixed(2);
            } else if(moeda2 == "Real"){
                conversao = valor/0.22130; //Dolar CANADENSE para REAL
                resultado.value = "Valor Convertido: BRL "+conversao.toFixed(2);
            }
        }
        if (moeda1 == "Euro"){
            if (moeda2 == "Dólar Americano"){
                conversao = valor/0.8402; //EURO PARA DOLAR 
                resultado.value = "Valor Convertido: USD "+conversao.toFixed(2);
            } else if(moeda2 == "Dólar Canadense"){
                conversao = valor*1.48126;//Euro para DOLAR CANADENSE  
                resultado.value = "Valor Convertido: CAD "+conversao.toFixed(2);
            } else if(moeda2 == "Libra"){
                conversao = valor/1.16723;//Euro para Libra  
                resultado.value = "Valor Convertido: GBP "+conversao.toFixed(2);
            } else if(moeda2 == "Peso Argentino"){
                conversao = valor*108.48850;//Euro para peso  
                resultado.value = "Valor Convertido: ARS "+conversao.toFixed(2);
            } else if(moeda2 == "Real"){
                conversao = valor*6.6935;//EURO PARA REAL
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            }
        }
        if (moeda1 == "Libra"){
            if (moeda2 == "Dólar Americano"){
                conversao = valor/0.7194; //LIBRA para dolar
                resultado.value = "Valor Convertido: USD "+conversao.toFixed(2);
            } else if(moeda2 == "Dólar Canadense"){
                conversao = valor/0.5767;//LIBRA para Dolar Canadense
                resultado.value = "Valor Convertido: CAD "+conversao.toFixed(2);
            } else if(moeda2 == "Euro"){
                conversao = valor/1.16723;//Libra para euro
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            } else if(moeda2 == "Peso Argentino"){
                conversao = valor*126.63091;//Libra para peso
                resultado.value = "Valor Convertido: ARS "+conversao.toFixed(2);
            } else if(moeda2 == "Real"){
                conversao = valor*7.81279; //Real para LIBRA
                resultado.value = "Valor Convertido: BRL "+conversao.toFixed(2);
            }
        } 
        if (moeda1 == "Peso Argentino"){
            if (moeda2 == "Dólar Americano"){
                conversao = valor/91.1369; //peso/dolar
                resultado.value = "Valor Convertido: USD "+conversao.toFixed(2);
            } else if(moeda2 == "Dólar Canadense"){
                conversao = valor/73.24093;//PESO/canadense
                resultado.value = "Valor Convertido: CAD "+conversao.toFixed(2);
            } else if(moeda2 == "Euro"){
                conversao = valor/108.48850;//peso/euro  
                resultado.value = "Valor Convertido: EUR "+conversao.toFixed(2);
            } else if(moeda2 == "Libra"){
                conversao = valor/126.63091;//peso/libra
                resultado.value = "Valor Convertido: GBP "+conversao.toFixed(2);
            } else if(moeda2 == "Real"){
                conversao = valor/16.20815; //Peso Argentino/real
                resultado.value = "Valor Convertido: BRL "+conversao.toFixed(2);
            }
        } 
    } else{
        resultado.value = "00.00";
        valor2.style.color = "red";
        alert("Valor Inválido!");
    
    }
}       

