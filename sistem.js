
// Movimento do corpo
var cima = 0;
var esquerda = 0;

const player =(b) =>{
let jogador = document.getElementsByClassName("jogador");
let tecla = b.keyCode;

if(tecla == 38){
cima -= 10;
acima();
jogador[0].style.top= cima + "px";
}else if(tecla == 40){
cima += 10;
acima();
jogador[0].style.top= cima + "px";
}else if(tecla == 65){
    esquerda += 10;
    atras();
    jogador[0].style.right= esquerda + "px";
}else if(tecla == 68){
    esquerda -= 10;
    jogador[0].style.right= esquerda + "px"
    frente();
}else if(tecla == 83){
    cima += 10;
    acima();
    jogador[0].style.top= cima + "px";
    }else if(tecla == 87){
        cima -= 10;
        acima();
        jogador[0].style.top= cima + "px";
    }

}
document.addEventListener("keydown",player);
// Regras do jogo

const limite = () =>{
    if(esquerda == 300){
        esquerda -= 10;
        jogador[0].style.right= esquerda + "px";
    }else if(cima == -300){
        cima +=10;
        jogador[0].style.top= cima + "px";
    }else if(cima == 500){
        cima -=10;
    jogador[0].style.top= cima+ "px";
    }
}

const frente = () =>{
    let jogador = document.getElementsByClassName("jogador");
    jogador[0].classList.remove("atras");  

    if(teclado = 68){
        jogador[0].classList.add("frente"); 
    };

            
}
const atras = () =>{
    let jogador = document.getElementsByClassName("jogador");
    jogador[0].classList.remove("frente"); 
    if (tecla = 65){
    jogador[0].classList.add("atras");
    };
    

}
const acima = () =>{
    let jogador = document.getElementsByClassName("jogador");
    jogador[0].classList.add("acima");
    jogador[0].classList.remove("frente"); 
    jogador[0].classList.remove("atras");  
    setTimeout(() => {
        jogador[0].classList.remove("acima");  
    }, 100);

}
const arma = (b) =>{
    let arma = document.getElementsByClassName("laser");
    let tecla = b.keyCode || b.which;
    return String.fromCharCode(tecla);
}
    document.onkeypress= function(b){
let str = arma(b);
console.log(str);
    }

document.addEventListener("keydown",arma);
