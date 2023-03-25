var botones=["(", ")", "C", "=", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ".", "0", "^", "/"];

function calculadora(){
    /*Calculadora*/
    const divCalculadora=document.createElement("div");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:30%; margin:5px");
    document.body.appendChild(divCalculadora);

    /*Pantalla*/
    const divPantalla=document.createElement("div");
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    /*Entrada de texto*/
    const Pantalla=document.createElement("input");
    Pantalla.setAttribute("id", "pantalla");
    Pantalla.setAttribute("type", "text");
    Pantalla.setAttribute("value", "0");
    Pantalla.setAttribute("disabled", "true");
    Pantalla.setAttribute("class", "Form-control text-center bordercolor:black")

    divCalculadora.appendChild(Pantalla);  

    /*Botones*/
    const divBotones=document.createElement("div");
    divBotones.setAttribute("id", "divBotones");
    divCalculadora.appendChild(divBotones);

    for(let i=0; i<botones.length; i++){
        if(i%4==0){
            const divFila=document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }
    let boton=document.createElement("button");
    boton.setAttribute("id", "Boton" + botones[i]);
    boton.setAttribute("class", "btn btn-info col-3 ")
    boton.innerHTML=botones[i];
        boton.addEventListener("click", function(){
            ProcesarEvento(boton);
        })
    divBotones.lastChild.appendChild(boton);

    }
}

function ProcesarEvento(boton){
    let miPantalla=document.getElementById("pantalla");
    if(miPantalla.value=="0"||miPantalla.value=="Syntax Error"){
        miPantalla.value="";
    }
    if(boton.innerHTML != "="){
        miPantalla.value+=boton.innerHTML;
        if(boton.innerHTML=="C"){
            miPantalla.value="0";  
        }
        }else {
            if(boton.innerHTML=="C"){
                miPantalla.value="0";  
            }
            try{
                let resultado=math.evaluate(miPantalla.value);
                miPantalla.value=resultado;
            }
            catch(error){
                miPantalla.value="Syntax Error";
            }
            
        }
    }

calculadora();

