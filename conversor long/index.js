//Selection
const valor = document.getElementById("valor");
const unidadOrigen = document.getElementById("unidadOrigen");
const unidadDestino = document.getElementById("unidadDestino");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn")

//Escucha eventos
btn.addEventListener("click", convertir);


//Creamos la funcion convertir
function convertir() {
    console.log("dentro de la funcion")

    switch (unidadOrigen.value) {

        case "Mm":

        if(unidadDestino.value=="Cm"){
            resultado.innerHTML= valor.value/10;
        }else if (unidadDestino.value=="Mts"){
            resultado.innerHTML=valor.value/100;
        }else{
            resultado.innerHTML=valor.value;
        }
            break;
        case "Cm":
            if(unidadDestino.value=="Mm"){
                resultado.innerHTML=valor.value*10;
            }else if (resultado.innerHTML=="Mts"){
                resultado.innerHTML=valor.value*100;
            }else{
                resultado.innerHTML=valor.value;
            }
            break;
        case "Mts":
            if(unidadDestino.value=="Cm"){
                resultado.innerHTML=valor.value*100;
            }else if (resultado.innerHTML=="Mm"){
                resultado.innerHTML=valor.value*10;
            }else{
                resultado.innerHTML=valor.value;
            }
            break;

    }












}