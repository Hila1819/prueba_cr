function cambiarTexto(elemento){
    if(elemento.innerHTML =="Iniciar sesion"){
        elemento.innerHTML ="Cerrar sesion";
    } else{
        elemento.innerHTML ="Iniciar sesion";
    }

}

function destino(elemento){
    if(elemento.id == "lapa"){
        alert("El destino favorito de lapa es Guanacaste");
        console.log("Lapa")
    }
    else if (elemento.id == "rana"){
        alert(" El destino favorito de rana es monte verde");
        console.log("rana");
    }
    else{
        alert("El destino favorito de tucan es atenas");
        console.log("Tucan");
    }
}


function cambiaImagen(elemento){
    elemento.style.backgroundImage = "url(./img/banner2.jpg)";
}

function regresarImagen(elemento){
    elemento.style.backgroundImage = "url(./img/banner1.jpg)";
}