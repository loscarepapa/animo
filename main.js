
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
            
            lienzo.innerHTML += `<img id="${total_imagenes}" style="left:0px;top:0px;transform:rotateZ(0deg);" class="img" width="100px" src="${reader.result}" onclick="watch(this.id)">`
            total_de_capas[total_imagenes] = total_imagenes
            console.log(total_de_capas)
            total_imagenes++

        }
    } else {
        console.log("Hubo un error")
    }
    if(img_puntual){
        
        rotacion.style.display = "none"
        alto.style.display = "none"
        ancho.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        opacidad.style.display = "none"
        
        rotacion.value = ""
        alto.value = ""
        ancho.value = ""
        x.value = ""
        y.value = ""
        opacidad.value = ""

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
    
    if(document.getElementById(id) == img_puntual){
        img_puntual.className = "img"
        img_puntual = 0
        id_seleccionador.value = ""
        
        rotacion.style.display = "none"
        alto.style.display = "none"
        ancho.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        opacidad.style.display = "none"

        rotacion.value = ""
        alto.value = ""
        ancho.value = ""
        x.value = ""
        y.value = ""
        opacidad.value = ""
        
    }else{
        id_seleccionador.value = id

        var img_watch = document.getElementById(id)

        var style_rotate = img_watch.style.transform
        var style_x = img_watch.style.left
        var style_y = img_watch.style.top


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
            
            rotacion.value = (style_rotate = style_rotate.repalce("rotateZ(", ""), style_rotate.replace("deg)", ""))
            // alto.value = ""
            // ancho.value = ""
            x.value = (style_x = style_x.replace("px",""))
            y.value = (style_y = style_y.replace("px", ""))
            // opacidad.value = ""
            // console.log(style_x)

        }else{

            img_puntual = img_watch
            img_watch.className = "img_watch"
            
            rotacion.style.display = "inline-block"
            alto.style.display = "inline-block"
            ancho.style.display = "inline-block"
            x.style.display = "inline-block"
            y.style.display = "inline-block"
            opacidad.style.display = "inline-block"
            
            rotacion.value = (style_rotate = style_rotate.replace("rotateZ(", ""), style_rotate.replace("deg)", ""))
            // alto.value = ""
            // ancho.value = ""
            x.value = (style_x = style_x.replace("px", ""))
            y.value = (style_y = style_y.replace("px", ""))
            // opacidad.value = ""
            // console.log(style_x)

        }
    }
console.log(img_watch.style.transform)
// console.log(img_puntual)
}

function change_id(id){
    watch(id)
}

function attr(value, id) {
    switch (id) {
        case "x":
        img_puntual.style.left = `${value}px`
            break;

        case "y":
        img_puntual.style.top = `${value}px`
            break;

        case "r":
        img_puntual.style.transform = `rotateZ(${value}deg)`    
            break;
        default:
            break;
    }
}