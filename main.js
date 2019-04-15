
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
            
            lienzo.innerHTML += `<img id="${total_imagenes}" src="${reader.result}">`
            total_de_capas[total_imagenes]
            console.log(total_de_capas)
            total_imagenes++
            console.log(archivo)
        }
    } else {
        console.log("Hubo un error")
    }
}

