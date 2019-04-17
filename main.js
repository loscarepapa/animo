
var lienzo = document.getElementById("lienzo")
var total_imagenes = 0
var total_de_capas = []
var num_atributos_de_imagenes = []
var atributos_de_imagenes = []

var z_index = 1

function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            
            lienzo.innerHTML += `<img id="${total_imagenes}" style="left:0px;top:0px;transform:rotateZ(0deg);width:100px;height:100px;opacity:1;z-index:${z_index};" class="img" width="100px" src="${reader.result}" onclick="watch(this.id)">`
            z_index++
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
        zindex.style.display = "none"
        id_seleccionador.value = ""
        id_seleccionador.style.display = "none"
        
        rotacion.value = ""
        alto.value = ""
        ancho.value = ""
        x.value = ""
        y.value = ""
        opacidad.value = ""
        zindex.value = ""

        for (let i = 0; i < 8; i++) {
            document.getElementById(`title_attribute${i}`).style.display = "none"
        }

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
    opacidad = document.getElementById("o"),
    zindex = document.getElementById("z")

function watch(id){
    
    if(document.getElementById(id) == img_puntual){
        img_puntual.className = "img"
        img_puntual = 0
        id_seleccionador.value = ""
        id_seleccionador.style.display = "none"
        
        rotacion.style.display = "none"
        alto.style.display = "none"
        ancho.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        opacidad.style.display = "none"
        zindex.style.display = "none"

        rotacion.value = ""
        alto.value = ""
        ancho.value = ""
        x.value = ""
        y.value = ""
        opacidad.value = ""
        zindex.value = ""

        for (let i = 0; i < 8 ; i++) {
            document.getElementById(`title_attribute${i}`).style.display = "none"
        }
        
    }else{
        id_seleccionador.value = id

        var img_watch = document.getElementById(id)

        var style_rotate = img_watch.style.transform
        var style_alto = img_watch.style.height
        var style_ancho = img_watch.style.width
        var style_x = img_watch.style.left
        var style_y = img_watch.style.top
        var style_opacidad = img_watch.style.opacity
        var style_zindex = img_watch.style.zIndex


        if(img_puntual){

            img_puntual.className = "img"
            img_puntual = img_watch
            img_watch.className = "img_watch"
            id_seleccionador.style.display = "inline-block"

            rotacion.style.display = "inline-block"
            alto.style.display = "inline-block"
            ancho.style.display = "inline-block"
            x.style.display = "inline-block"
            y.style.display = "inline-block"
            opacidad.style.display = "inline-block"
            zindex.style.display = "inline-block"
            
            for (let i = 0; i < 8; i++) {
                document.getElementById(`title_attribute${i}`).style.display = "inline"
            }
            
            rotacion.value = (style_rotate = style_rotate.replace("rotateZ(", ""), style_rotate.replace("deg)", ""))
            alto.value = (style_alto = style_alto.replace("px",""))
            ancho.value = (style_ancho = style_ancho.replace("px",""))
            x.value = (style_x = style_x.replace("px",""))
            y.value = (style_y = style_y.replace("px", ""))
            opacidad.value = style_opacidad
            zindex.value = style_zindex
            // console.log(style_x)

        }else{

            img_puntual = img_watch
            img_watch.className = "img_watch"
            id_seleccionador.style.display = "inline-block"

            rotacion.style.display = "inline-block"
            alto.style.display = "inline-block"
            ancho.style.display = "inline-block"
            x.style.display = "inline-block"
            y.style.display = "inline-block"
            opacidad.style.display = "inline-block"
            zindex.style.display = "inline-block"
            
            for (let i = 0; i < 8; i++) {
                document.getElementById(`title_attribute${i}`).style.display = "inline"
            }
            
            rotacion.value = (style_rotate = style_rotate.replace("rotateZ(", ""), style_rotate.replace("deg)", ""))
            alto.value = (style_alto = style_alto.replace("px", ""))
            ancho.value = (style_ancho = style_ancho.replace("px", ""))
            x.value = (style_x = style_x.replace("px", ""))
            y.value = (style_y = style_y.replace("px", ""))
            opacidad.value = style_opacidad
            zindex.value = style_zindex
            // console.log(style_x)

        }
    }
// console.log(img_watch.style.transform)
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
        case "al":
        img_puntual.style.height = `${value}px`
            break;
        case "an":
        img_puntual.style.width = `${value}px`
            break;
        case "o":
        img_puntual.style.opacity = value
            break;
        case "z":
        img_puntual.style.zIndex = value
            break;
        default:
            break;
    }
}