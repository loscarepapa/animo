
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
    if(img_puntual){
        img_puntual.className = "img"
        img_puntual = 0
    }
}

var img_puntual

function watch(id){

    if(document.getElementById(id) == img_puntual){
        img_puntual.className = "img"
        img_puntual = 0
    }else{
        if(img_puntual){
            img_puntual.className = "img"
            img_puntual = document.getElementById(id)
            document.getElementById(id).className = "img_watch"
        }else{
            img_puntual = document.getElementById(id)
            document.getElementById(id).className = "img_watch"
        }
    }
console.log(id)
// console.log(img_puntual)
}