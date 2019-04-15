
var image_template = document.getElementById("lienzo")
var images_totals = 1
function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            
            image_template.innerHTML = `<img id="${images_totals}" src="${reader.result}">`
            images_totals++
        }
    } else {
        console.log("Hubo un error")
    }
}
