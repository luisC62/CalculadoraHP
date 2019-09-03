//'use strict'
window.onload=inicio;
var pila=[];
var errores="";
var cadenaIntro="";
var numberIntro=0;
var Inv=false;

function inicio(){
    window.onkeydown=teclado;
    
    document.getElementById("enter").onclick=tecla_enter;
    document.getElementById("del").onclick=tecla_del;
    document.getElementById("drop").onclick=tecla_drop;
    document.getElementById("swap").onclick=tecla_swap;
    
    document.getElementById("sin").onclick=tecla_sin;
    document.getElementById("cos").onclick=tecla_cos;
    document.getElementById("tan").onclick=tecla_tan;
    document.getElementById("oneoverx").onclick=tecla_oneoverx;
    
    document.getElementById("tworaised").onclick=tecla_tworaised;
    document.getElementById("natlog").onclick=tecla_natlog;
    document.getElementById("log").onclick=tecla_log;
    document.getElementById("xraisedy").onclick=tecla_xraisedy;
    
    document.getElementById("n0").onclick=tecla_0;
    document.getElementById("n1").onclick=tecla_1;
    document.getElementById("n2").onclick=tecla_2;
    document.getElementById("n3").onclick=tecla_3;
    document.getElementById("n4").onclick=tecla_4;
    document.getElementById("n5").onclick=tecla_5;
    document.getElementById("n6").onclick=tecla_6;
    document.getElementById("n7").onclick=tecla_7;
    document.getElementById("n8").onclick=tecla_8;
    document.getElementById("n9").onclick=tecla_9;
    
    document.getElementById("suma").onclick=tecla_suma;
    document.getElementById("resta").onclick=tecla_resta;
    document.getElementById("mul").onclick=tecla_mul;
    document.getElementById("div").onclick=tecla_div;
    
    document.getElementById("inv").onclick=tecla_inv;
    document.getElementById("dot").onclick=tecla_dot;
    
}
function teclado(e){
    let codigo=e.keyCode;
    switch(codigo){
        case 49:
            tecla_1();
            break;
        case 50:
            tecla_2();
            break;
        case 51:
            tecla_3();
            break;
        case 52:
            tecla_4();
            break;
        case 53:
            tecla_5();
            break;
        case 54:
            tecla_6();
            break;
        case 55:
            tecla_7();
            break;
        case 56:
            tecla_8();
            break;
        case 57:
            tecla_9();
            break;
        case 48:
            tecla_0();
            break;
        case 13:
            tecla_enter();
            break;
        case 187:
            tecla_suma();
            break;
        case 189:
            tecla_resta();
            break;
        case 190:
            tecla_dot();
            break;
    }
}
function tecla_enter(){
    sonar_tecla();
    numeroApila=Number(cadenaIntro);
    if(numeroApila!="NaN"){
        pila.push(numeroApila);
        cadenaIntro="";
        document.getElementById("pantallainf").innerHTML=cadenaIntro;
    }else{
        errores="Not a Number";
        pantallaSup();
    }
    imprimirPila();

}
function tecla_del(){
    sonar_tecla();
    if(Inv){
        pila=[];
        imprimirPila();
        Inv=false;
        pantallaSup();
    }else{
        cadenaIntro="";
        document.getElementById("pantallainf").innerHTML=cadenaIntro;
        errores="";
        pantallaSup();
    }
}
function tecla_drop(){
    sonar_tecla();
    pila.pop();
    imprimirPila();
}
function tecla_swap(){
    sonar_tecla();
    if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        pila.pop();
        pila.pop();
        pila.push(op2);
        pila.push(op1);
        imprimirPila();
    }
    Inv=false;
    pantallaSup();
}
function tecla_sin(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
            l=pila.length;
            op=pila[l-1];
            if(op>1 || op<1){
                errores="Argumento no válido";
                pantallaSup();
            }else{
                pila.pop();
                pila.push(Math.asin(op));
                imprimirPila()
            }
        }else{
            l=pila.length;
            op=pila[l-1];
            pila.pop();
            pila.push(Math.sin(op));
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();
}
function tecla_cos(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
            l=pila.length;
            op=pila[l-1];
            if(op>1 || op<1){
                errores="Argumento no válido";
                pantallaSup();
            }else{
                pila.pop();
                pila.push(Math.cos(op));
                imprimirPila()
            }
        }else{
            l=pila.length;
            op=pila[l-1];
            pila.pop();
            pila.push(Math.cos(op));
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();

}
function tecla_tan(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
            l=pila.length;
            op=pila[l-1];
            pila.pop();
            pila.push(Math.atan(op));
            imprimirPila()
        }else{
            l=pila.length;
            op=pila[l-1];
            pila.pop();
            pila.push(Math.tan(op));
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();

}
function tecla_oneoverx(){
    sonar_tecla();
    l=pila.length;
    if(l<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(pila[l-1]==0){
            errores="División entre 0";
            pantallaSup();
        }else{
            op=pila[l-1];
            pila.pop();
            pila.push(1/op);
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();
}
function tecla_tworaised(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
           l=pila.length;
           op1=pila[l-1];
           if(op1<0){
               errores="Raiz de número negativo";
               pantallaSup();
           }else{
               pila.pop();
               pila.push(Math.sqrt(op1));
               imprimirPila();
           }
        }else{
            l=pila.length;
            op1=pila[l-1];
            pila.pop();
            pila.push(op1 * op1);
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();
}
function tecla_natlog(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
            l=pila.length;
            op1=pila[l-1];
            pila.pop();
            pila.push(Math.exp(op1));
            imprimirPila();
        }else{
            l=pila.length;
            op1=pila[l-1];
            pila.pop();
            pila.push(Math.log(op1));
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();
}
function tecla_log(){
    sonar_tecla();
    if(pila.length<1){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        if(Inv){
            l=pila.length;
            op1=pila[l-1];
            pila.pop();
            pila.push(Math.pow(10,op1));
            imprimirPila();
        }else{
            l=pila.length;
            op1=pila[l-1];
            pila.pop();
            pila.push(Math.log10(op1));
            imprimirPila();
        }
    }
    Inv=false;
    pantallaSup();
}
function tecla_xraisedy(){
    sonar_tecla();
    if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        pila.pop();
        pila.pop();
        pila.push(Math.pow(op1,op2));
        imprimirPila();
    }
    Inv=false;
    pantallaSup();
}
function tecla_0(){
    sonar_tecla();
    if(Inv){
        cadenaIntro="-"+cadenaIntro;
        pantallaSup();
    }else{
        if(cadenaIntro.length==0){
            cadenaIntro+="";
        }else{
            cadenaIntro+="0";
        }
    }
    Inv=false;
    pantallaSup();
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_1(){
    sonar_tecla();
    cadenaIntro+="1";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_2(){
    sonar_tecla();
    cadenaIntro+="2";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_3(){
    sonar_tecla();
    cadenaIntro+="3";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_4(){
    sonar_tecla();
    cadenaIntro+="4";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_5(){
    sonar_tecla();
    cadenaIntro+="5";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_6(){
    sonar_tecla();
    cadenaIntro+="6";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_7(){
    sonar_tecla();
    cadenaIntro+="7";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_8(){
    sonar_tecla();
    cadenaIntro+="8";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_9(){
    sonar_tecla();
    cadenaIntro+="9";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_0(){
    sonar_tecla();
    cadenaIntro+="0";
    document.getElementById("pantallainf").innerHTML=cadenaIntro;
}
function tecla_suma(){
    sonar_tecla();
    if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        pila.pop();
        pila.pop();
        pila.push(op1 + op2);
        imprimirPila();
    }
}
function tecla_resta(){
    sonar_tecla();
    if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        pila.pop();
        pila.pop();
        pila.push(op1 - op2);
        imprimirPila();
    }
}
function tecla_mul(){
    sonar_tecla();
     if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        pila.pop();
        pila.pop();
        pila.push(op1 * op2);
        imprimirPila();
    }
}       
function tecla_div(){
    sonar_tecla();
     if(pila.length<2){
        errores="Faltan argumentos";
        pantallaSup();
    }else{
        l=pila.length;
        op1=pila[l-2];
        op2=pila[l-1];
        if(op2!=0){
            pila.pop();
            pila.pop();
            pila.push(op1 / op2);
            imprimirPila();
        }else{
            errores="División entre 0";
            pantallaSup();
        }
    }
}               
function tecla_inv(){
    sonar_tecla();
    Inv=!Inv;
    pantallaSup();
}
function tecla_dot(){
    sonar_tecla();
    if(Inv){
        cadenaIntro="3.1415926536";
        document.getElementById("pantallainf").innerHTML=cadenaIntro;
    }else{
        cadenaIntro+=".";
        document.getElementById("pantallainf").innerHTML=cadenaIntro;
    }
    Inv=false;
    pantallaSup();
}
function pantallaSup(){
    if(Inv){
        document.getElementById("pantallasup").innerHTML="INV";
    }else{
        document.getElementById("pantallasup").innerHTML="";
    }
    if(errores!=""){
        document.getElementById("pantallasup").innerHTML=errores;
    }
}
function imprimirPila(){
    visorPila="";
    for(i=0; i<pila.length; i++){
        visorPila+=pila[i]+"<br>";
    }
    document.getElementById("pantallacentro").innerHTML=visorPila;
}function sonar_tecla(){
    document.getElementById("sonido").src="audio/clickfx_click.mp3";
    document.getElementById("sonido").play();
}
