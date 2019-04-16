
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
            
            lienzo.innerHTML += `<img id="${total_imagenes}" style="left:0px;top:0px;" class="img" width="100px" src="${reader.result}" onclick="watch(this.id)">`
            total_de_capas[total_imagenes] = total_imagenes
            console.log(total_de_capas)
            total_imagenes++

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
var id_seleccionador = document.getElementById("id_imagen")
var rotacion = document.getElementById("r"),
    alto = document.getElementById("al"),
    ancho = document.getElementById("an"),
    x = document.getElementById("x"),
    y = document.getElementById("y"),
    opacidad = document.getElementById("o")

function watch(id){

    var eje_x = document.getElementById("x")
    
    if(document.getElementById(id) == img_puntual){
        img_puntual.className = "img"
        img_puntual = 0
        id_seleccionador.value = ""
        eje_x.value = ""

        rotacion.style.display = "none"
        alto.style.display = "none"
        ancho.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        opacidad.style.display = "none"

    }else{
        id_seleccionador.value = id

        var img_watch = document.getElementById(id)
        var style_x = img_watch.style.left

        if(img_puntual){

            img_puntual.className = "img"
            img_puntual = img_watch
            img_watch.className = "img_watch"
            
            rotacion.style.display = "inline-block"
            alto.style.display = "inline-block"
            ancho.style.display = "inline-block"
            x.style.display = "inline-block"
            y.style.display = "inline-block"
            opacidad.style.display = "inline-block"
            
            eje_x.value = (style_x = style_x.replace("px",""))
            console.log(style_x)

        }else{

            img_puntual = img_watch
            img_watch.className = "img_watch"
            
            rotacion.style.display = "inline-block"
            alto.style.display = "inline-block"
            ancho.style.display = "inline-block"
            x.style.display = "inline-block"
            y.style.display = "inline-block"
            opacidad.style.display = "inline-block"
            
            eje_x.value = (style_x = style_x.replace("px",""))
            console.log(style_x)

        }
    }
console.log(id)
// console.log(img_puntual)
}

function change_id (id){
    watch(id)
}

