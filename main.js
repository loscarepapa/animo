var lienzo = document.getElementById("lienzo");
var total_imagenes = 0;
var total_de_capas = [];
var num_atributos_de_imagenes = [];
var atributos_de_imagenes = [];

var z_index = 1;

function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function() {
      lienzo.innerHTML += `<img 
            id='${total_imagenes}'
            style='left:0px;top:0px;transform:rotateZ(0deg);width:100px;height:100px;opacity:1;z-index:${z_index};' 
            class='img'
            width='100px' 
            src='${reader.result}'
            onclick='watch(this.id)'
            draggable='false'> `;

      z_index++;
      total_de_capas[total_imagenes] = total_imagenes;
    //   console.log(total_de_capas);
      total_imagenes++;
    };
  } else {
    // console.log("Hubo un error");
  }

  if (img_puntual) {
    rotacion.style.display = "none";
    alto.style.display = "none";
    ancho.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    opacidad.style.display = "none";
    zindex.style.display = "none";
    id_seleccionador.value = "";
    id_seleccionador.style.display = "none";
    tabla.style.display = "none";

    rotacion.value = "";
    alto.value = "";
    ancho.value = "";
    x.value = "";
    y.value = "";
    opacidad.value = "";
    zindex.value = "";

    for (let i = 0; i < 8; i++) {
      document.getElementById(`title_attribute${i}`).style.display = "none";
    }

    img_puntual.className = "img";
    img_puntual.setAttribute("draggable", "false");
    img_puntual = 0;
  }
}

var img_puntual;
var id_seleccionador = document.getElementById("id_imagen");
var tabla = document.getElementById("tabla");
var rotacion = document.getElementById("r"),
  alto = document.getElementById("al"),
  ancho = document.getElementById("an"),
  x = document.getElementById("x"),
  y = document.getElementById("y"),
  opacidad = document.getElementById("o"),
  zindex = document.getElementById("z");

function watch(id) {
  if (document.getElementById(id) == img_puntual) {
    document.getElementById(id).setAttribute("draggable", "false");

    img_puntual.className = "img";
    img_puntual.setAttribute("draggable", "false");

    img_puntual = "";
    id_seleccionador.value = "";
    id_seleccionador.style.display = "none";
    tabla.style.display = "none";

    rotacion.style.display = "none";
    alto.style.display = "none";
    ancho.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    opacidad.style.display = "none";
    zindex.style.display = "none";

    rotacion.value = "";
    alto.value = "";
    ancho.value = "";
    x.value = "";
    y.value = "";
    opacidad.value = "";
    zindex.value = "";

    document.getElementById("emparejar").className = "emparejar";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");

    for (let i = 0; i < 8; i++) {
      document.getElementById(`title_attribute${i}`).style.display = "none";
    }
  } else {
    id_seleccionador.value = id;

    var img_watch = document.getElementById(id);

    var style_rotate = img_watch.style.transform;
    var style_alto = img_watch.style.height;
    var style_ancho = img_watch.style.width;
    var style_x = img_watch.style.left;
    var style_y = img_watch.style.top;
    var style_opacidad = img_watch.style.opacity;
    var style_zindex = img_watch.style.zIndex;

    if (img_puntual) {
      img_puntual.className = "img";

      img_puntual.setAttribute("draggable", "false");

      img_puntual = img_watch;

      img_watch.className = "img_watch";

      img_watch.setAttribute("draggable", "true");

      id_seleccionador.style.display = "inline-block";
      tabla.style.display = "inline-block";

      if (escalable_id.includes(img_puntual.id)) {
        document.getElementById("emparejar").className = "emparejar_activo";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "emparejar_al_an()");
        // console.log("No, esta dentro");
      }

      rotacion.style.display = "inline-block";
      alto.style.display = "inline-block";
      ancho.style.display = "inline-block";
      x.style.display = "inline-block";
      y.style.display = "inline-block";
      opacidad.style.display = "inline-block";
      zindex.style.display = "inline-block";

      for (let i = 0; i < 8; i++) {
        document.getElementById(`title_attribute${i}`).style.display = "inline";
      }

      rotacion.value = ((style_rotate = style_rotate.replace("rotateZ(", "")),
      style_rotate.replace("deg)", ""));
      alto.value = style_alto = style_alto.replace("px", "");
      ancho.value = style_ancho = style_ancho.replace("px", "");
      x.value = style_x = style_x.replace("px", "");
      y.value = style_y = style_y.replace("px", "");
      opacidad.value = style_opacidad;
      zindex.value = style_zindex;
      console.log(style_x)
    } else {
      img_puntual = img_watch;
      img_watch.className = "img_watch";

      img_watch.setAttribute("draggable", "true");

      if (escalable_id.includes(img_puntual.id)) {
        document.getElementById("emparejar").className = "emparejar_activo";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "emparejar_al_an()");
        // console.log("No, esta dentro");
      }

      id_seleccionador.style.display = "inline-block";
      tabla.style.display = "inline-block";

      rotacion.style.display = "inline-block";
      alto.style.display = "inline-block";
      ancho.style.display = "inline-block";
      x.style.display = "inline-block";
      y.style.display = "inline-block";
      opacidad.style.display = "inline-block";
      zindex.style.display = "inline-block";

      for (let i = 0; i < 8; i++) {
        document.getElementById(`title_attribute${i}`).style.display = "inline";
      }

      rotacion.value = ((style_rotate = style_rotate.replace("rotateZ(", "")),
      style_rotate.replace("deg)", ""));
      alto.value = style_alto = style_alto.replace("px", "");
      ancho.value = style_ancho = style_ancho.replace("px", "");
      x.value = style_x = style_x.replace("px", "");
      y.value = style_y = style_y.replace("px", "");
      opacidad.value = style_opacidad;
      zindex.value = style_zindex;
    }
  }
}

function change_id(id) {
  watch(id);
}

var escalable_img;
var anterior_alto, diferencia_alto;
var anterior_acho, diferencia_ancho;

function attr(value, id) {
  switch (id) {
    case "x":
      img_puntual.style.left = `${value}px`;
      break;

    case "y":
      img_puntual.style.top = `${value}px`;
      break;

    case "r":
      img_puntual.style.transform = `rotateZ(${value}deg)`;
      break;
    case "al":
      if (
        document.getElementById("emparejar").className == "emparejar_activo"
      ) {
        anterior_alto = parseInt(img_puntual.style.height.replace("px", ""));

        diferencia_alto = value - anterior_alto;

        img_puntual.style.height = `${value}px`;

        img_puntual.style.width = `${parseInt(
          document.getElementById("an").value
        ) + diferencia_alto}px`;

        document.getElementById("an").value =
          parseInt(document.getElementById("an").value) + diferencia_alto;
        escalable_img = value;
      } else {
        img_puntual.style.height = `${value}px`;
      }

      break;

    case "an":
      if (
        document.getElementById("emparejar").className == "emparejar_activo"
      ) {
        anterior_ancho = parseInt(img_puntual.style.width.replace("px", ""));

        diferencia_ancho = value - anterior_ancho;

        img_puntual.style.width = `${value}px`;

        img_puntual.style.height = `${parseInt(
          document.getElementById("al").value
        ) + diferencia_ancho}px`;

        document.getElementById("al").value =
          parseInt(document.getElementById("al").value) + diferencia_ancho;
        escalable_img = value;
      } else {
        img_puntual.style.width = `${value}px`;
      }

      break;
    case "o":
      img_puntual.style.opacity = value;
      break;
    case "z":
      img_puntual.style.zIndex = value;
      break;
    default:
      break;
  }
}

//System of a drag
var movimiento_x, movimiento_y;
var img_movement;

function movement() {
  movimiento_x = window.event.clientX;
  movimiento_y = window.event.clientY;
}

var img_press;
var position_mouse_img_x, position_mouse_img_y;
var resto_x, resto_y;

document.addEventListener("dragstart", function(event) {
  var x, y;
  var img_x, img_y;

  x = window.event.clientX;
  img_x = parseInt(
    document.getElementById(event.target.id).style.left.replace("px", "")
  );
  resto_x = x - img_x;

  y = window.event.clientY;
  img_y = parseInt(
    document.getElementById(event.target.id).style.top.replace("px", "")
  );
  resto_y = y - img_y;

  img_press = document.getElementById(event.target.id);
});

document.addEventListener("dragend", function(event) {
  if (img_press && img_press.className === "img_watch") {
    img_press.style.left = `${window.event.clientX - resto_x}px`;
    img_press.style.top = `${window.event.clientY - resto_y}px`;
  }
});
//

var escalable_id = [];
var position_escalable = 0;
var img_w;

function emparejar_al_an() {
  if (img_puntual) {
    img_w = img_puntual.id;
  }
  if (img_w >= 0 && escalable_id.includes(img_w)) {
    // console.log("Esta dentro del array");
    document.getElementById("emparejar").className = "emparejar";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");
  } else {
    escalable_id[position_escalable] = id_seleccionador.value;
    position_escalable++;

    document.getElementById("emparejar").className = "emparejar_activo";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "borrar_al_an()");
  }
//   console.log(escalable_id);
}

function borrar_al_an() {
  var index = escalable_id.indexOf(id_seleccionador.value);

  if (index > -1) {
    escalable_id.splice(index, 1);
  }

  document.getElementById("emparejar").className = "emparejar";
  document
    .getElementById("emparejar")
    .setAttribute("onclick", "emparejar_al_an()");
  if (escalable_id.includes(img_w)) {
    // console.log("Esta dentro del array");
  }
//   console.log("Borrar del array");
}
