
var lienzo = document.getElementById("lienzo")
var total_imagenes = 0
var total_de_capas = []
var num_atributos_de_imagenes = []
var atributos_de_imagenes = []


function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            
            lienzo.innerHTML += `<img id="${total_imagenes}" class="img" width="100px" src="${reader.result}" onclick="watch(this.id)">`
            total_de_capas[total_imagenes] = total_imagenes
            console.log(total_de_capas)
            total_imagenes++
            console.log(archivo)
        }
    } else {
        console.log("Hubo un error")
    }
}

var img_anterior, imagen_actual

function watch(id){
    imagen_actual  = document.getElementById(id)
    
    if(img_anterior){
        if(imagen_actual.className === "img"){
            imagen_actual.className = "img_watch"
        }else{
            imagen_actual.className = "img"
        }

        img_anterior.className = "img"
        img_anterior = 0;
        console.log(img_anterior)
        console.log(imagen_actual)
        
    }else{
        if (imagen_actual.className === "img") {
            imagen_actual.className = "img_watch"
        } else {
            imagen_actual.className = "img"
        }
        
        img_anterior = document.getElementById(id)
        console.log(img_anterior)
        console.log(imagen_actual)

    }
// console.log(id)
}