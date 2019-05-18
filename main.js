var lienzo = document.getElementById("lienzo");
var capas = document.getElementById("capas")
var lienzo_puntos;
var total_imagenes = 0;
var total_de_capas = [];
var num_atributos_de_imagenes = [];
var atributos_de_imagenes = [];

var z_index = 1;

function block_none(style) {
  if (style == "none") {
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
  } else if (style == "inline_block") {
    rotacion.style.display = "inline-block";
    alto.style.display = "inline-block";
    ancho.style.display = "inline-block";
    x.style.display = "inline-block";
    y.style.display = "inline-block";
    opacidad.style.display = "inline-block";
    zindex.style.display = "inline-block";
    id_seleccionador.style.display = "inline-block";
    tabla.style.display = "inline-block";
  } else if (style == "inline_block_2") {
    rotacion.style.display = "inline-block";
    alto.style.display = "inline-block";
    ancho.style.display = "inline-block";
    x.style.display = "inline-block";
    y.style.display = "inline-block";
    opacidad.style.display = "inline-block";
    zindex.style.display = "inline-block";
  }
}

//¿  insert the image in the canvas
function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      lienzo.innerHTML += `
        <div class="img" id="${total_imagenes}_img_externa" style='left:0px;top:0px;transform:rotateZ(0deg);width:100px;height:100px;opacity:1;z-index:${z_index};' draggeble='false'>
          <img src="${reader.result}" id="${total_imagenes}" class="img_interna"  onclick='watch(this.id)' draggable='false'>
        </div>`;
      z_index++;
      total_de_capas[total_imagenes] = total_imagenes;

      capas.innerHTML += `
      <li class="capa_img_off" id="${total_imagenes}_capa" onclick="watch(this.id.replace('_capa', ''))" draggable="true">
        <img src="${reader.result}" class="img_capa">
      </li>
      <li id="insertar_capa_${total_imagenes + 2}" class="droptarget"></li>
      <li id="capa${total_imagenes + 2}"></li>
      `;

      total_imagenes++;



    };
  } else {
    console.log("Hubo un error");
  }
  //¿

  //* ask if have something selected and deleted it
  if (img_puntual) {
    var img = document.getElementById(`${img_puntual}_img_externa`);
    var img_local_interna = document.getElementById(img_puntual);

    block_none("none");

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

    img.className = "img";
    // img_puntual.setAttribute("draggable", "false");
    img_local_interna.setAttribute("draggable", "false");

    var lienzo_puntos = document.getElementById("puntos");

    lienzo_puntos.innerHTML = "";

    img.style.zIndex = index_before;
    index_before = "";

    for (let i = 0; i < zindex_modificado_id.length; i++) {
      document.getElementById(
        `${zindex_modificado_id[i]}_img_externa`
      ).style.zIndex = zindex_img[i];
    }
    
    document.getElementById(`${img_puntual}_capa`).className = "capa_img_off"

    img_puntual = null;
  }
  //*
}

var img_mayor_index;
var num_mayor = 0;

function z_index_puntos() {
  num_mayor = 0;
  for (let i = 0; i < total_de_capas.length; i++) {
    var z_index = parseInt(
      document.getElementById(`${i}_img_externa`).style.zIndex
    );
    if (z_index >= num_mayor) {
      num_mayor = z_index + 1;
      img_mayor_index = num_mayor;
    }
  }
}

function vertices() {
  var img = document.getElementById(`${img_puntual}_img_externa`);
  var alto = img.style.height;
  var ancho = img.style.width;
  var top = img.style.top;
  var left = img.style.left;

  return `<div class="alto_1" style="
        left:${parseInt(left.replace("px", "")) + parseInt(ancho.replace("px", "")) / 2 - 5}px;
        top:${parseInt(top.replace("px", "")) - 5}px;
        z-index:${img_mayor_index}" id="al_1" draggable="true"></div>

        <div class="alto_2" style="
        left:${parseInt(left.replace("px", "")) + parseInt(ancho.replace("px", "")) / 2 - 5}px;
        top:${parseInt(top.replace("px", "")) + parseInt(alto.replace("px", "")) - 5}px;
        z-index:${img_mayor_index}" id="al_2" draggable="true"></div>

        <div class="ancho_1" style="
        top:${parseInt(top.replace("px", "")) + parseInt(alto.replace("px", "")) / 2 - 5}px;
        left:${parseInt(left.replace("px", "")) - 5}px;
        z-index:${img_mayor_index}" id="an_1" draggable="true"></div>

        <div class="ancho_2" style="
        top:${parseInt(top.replace("px", "")) + parseInt(alto.replace("px", "")) / 2 - 5}px;
        left:${parseInt(left.replace("px", "")) + parseInt(ancho.replace("px", "")) - 5}px;
        z-index:${img_mayor_index}" id="an_2" draggable="true"></div>`;
}

var img_puntual = null;
var img_puntual_img;
var img_puntual_interna;
var id_seleccionador = document.getElementById("id_imagen");
var tabla = document.getElementById("tabla");
var rotacion = document.getElementById("r"),
  alto = document.getElementById("al"),
  ancho = document.getElementById("an"),
  x = document.getElementById("x"),
  y = document.getElementById("y"),
  opacidad = document.getElementById("o"),
  zindex = document.getElementById("z");
var index_before;

function watch(id) {
  //¿ if selected the same the it deleted
  // debugger
  lienzo_puntos = document.getElementById("puntos");

  if (id == img_puntual) {
    console.log("Es el mismo");
    var img = document.getElementById(`${img_puntual}_img_externa`);
    document.getElementById(`${id}`).setAttribute("draggable", "false");
    document.getElementById(`${img_puntual}_capa`).className = "capa_img_off"

    img.className = "img";
    // img.style.zIndex = index_before;
    index_before = "";

    lienzo_puntos.innerHTML = "";

    img_puntual = null;

    block_none("none");

    rotacion.value = "";
    alto.value = "";
    ancho.value = "";
    x.value = "";
    y.value = "";
    opacidad.value = "";
    zindex.value = "";

    document.getElementById("emparejar").className = "emparejar";
    document.getElementById("emparejar").innerHTML =
      "<i class='fas fa-lock-open'></i>";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");

    for (let i = 0; i < 8; i++) {
      document.getElementById(`title_attribute${i}`).style.display = "none";
    }

    //¿
  } else {
    id_seleccionador.value = id;

    var img_watch_externa = document.getElementById(`${id}_img_externa`);

    var img_watch_img = document.getElementById(id);

    var style_rotate = img_watch_externa.style.transform;
    var style_alto = img_watch_externa.style.height;
    var style_ancho = img_watch_externa.style.width;
    var style_x = img_watch_externa.style.left;
    var style_y = img_watch_externa.style.top;
    var style_opacidad = img_watch_externa.style.opacity;
    var style_zindex = img_watch_externa.style.zIndex;

    //* if had other image in the variable delete it
    if (img_puntual != null) {
      console.log("Habia otro");
      var img = document.getElementById(`${img_puntual}_img_externa`);
      img.className = "img";

      console.log(index_before);

      document.getElementById(img_puntual).setAttribute("draggable", "false");
      document.getElementById(`${img_puntual}_capa`).className = "capa_img_off"


      //! before of this id for delete the image previous and after is for add to the new image
      img_puntual = img_watch_externa.id.replace("_img_externa", "");

      index_before = img_watch_externa.style.zIndex;

      img_puntual_img = document.getElementById(
        `${img_watch_externa.id.replace("_img_externa", "")}`
      );

      img_puntual_img.setAttribute("draggable", "true");
      document.getElementById(`${img_puntual}_capa`).className = "capa_img_on"


      img_watch_externa.className = "img_watch";

      z_index_puntos();

      lienzo_puntos.innerHTML = vertices();

      id_seleccionador.style.display = "inline-block";
      tabla.style.display = "inline-block";

      if (escalable_id.includes(img_puntual)) {
        document.getElementById("emparejar").className = "emparejar_activo";
        document.getElementById("emparejar").innerHTML =
          "<i class='fas fa-lock'></i>";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document.getElementById("emparejar").innerHTML =
          "<i class='fas fa-lock-open'></i>";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "emparejar_al_an()");
        // console.log("No, esta dentro");
      }

      block_none("inline_block_2");

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

      //*
      //¿ if it not added to the variable
    } else {
      console.log("No habia otro");

      img_puntual = img_watch_externa.id.replace("_img_externa", "");
      document.getElementById(img_watch_externa.id).className = "img_watch";
      document.getElementById(`${img_puntual}_capa`).className = "capa_img_on"

      index_before = img_watch_externa.style.zIndex;

      z_index_puntos();

      lienzo_puntos.innerHTML = vertices();

      document.getElementById(img_puntual).setAttribute("draggable", "true");

      if (escalable_id.includes(img_puntual)) {
        document.getElementById("emparejar").className = "emparejar_activo";
        document.getElementById("emparejar").innerHTML =
          "<i class='fas fa-lock'></i>";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document.getElementById("emparejar").innerHTML =
          "<i class='fas fa-lock-open'></i>";
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "emparejar_al_an()");
        // console.log("No, esta dentro");
      }

      block_none("inline_block");

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
    //¿
  }

  // console.log(id)
}

function change_id(id) {
  if (
    id >= 0 &&
    id <= total_imagenes - 1 &&
    parseInt(img_puntual.id.replace("_img_externa")) != id
  ) {
    watch(id);
  }
  console.log(id, total_imagenes);
}

var escalable_img;
var anterior_alto, diferencia_alto;
var anterior_acho, diferencia_ancho;
var zindex_modificado_id = [];
var z_m_id_length = zindex_modificado_id.length;
var zindex_img = [];

function attr(value, id) {
  // debugger
  var img = document.getElementById(`${img_puntual}_img_externa`);

  switch (id) {
    case "x":
      img.style.left = `${value}px`;
      break;

    case "y":
      img.style.top = `${value}px`;
      break;

    case "r":
      img.style.transform = `rotateZ(${value}deg)`;
      break;
    case "al":
      if (
        document.getElementById("emparejar").className == "emparejar_activo"
      ) {
        anterior_alto = parseInt(img.style.height.replace("px", ""));

        diferencia_alto = value - anterior_alto;

        img.style.height = `${value}px`;

        img.style.width = `${(parseInt(document.getElementById("an").value) *
          value) /
          anterior_alto}px`;

        document.getElementById("an").value = parseInt(
          img.style.width.replace("px", "")
        );

        escalable_img = value;
      } else {
        img.style.height = `${value}px`;
      }

      break;

    case "an":
      if (
        document.getElementById("emparejar").className == "emparejar_activo"
      ) {
        anterior_ancho = parseInt(img.style.width.replace("px", ""));

        diferencia_ancho = value - anterior_ancho;

        img.style.width = `${value}px`;

        img.style.height = `${(parseInt(document.getElementById("al").value) *
          value) /
          anterior_ancho}px`;

        document.getElementById("al").value = parseInt(
          img.style.height.replace("px", "")
        );

        escalable_img = value;
      } else {
        img.style.width = `${value}px`;
      }

      break;

    case "o":
      img.style.opacity = value;
      break;

    case "z":
      img.style.zIndex = value;
      z_index_puntos();
      break;

    default:
      break;
  }
  lienzo_puntos.innerHTML = vertices();
}

//¿System of a drag
var movimiento_x, movimiento_y;
var img_movement;

function movement() {
  movimiento_x = window.event.clientX;
  movimiento_y = window.event.clientY;
  // console.log(movimiento_x, movimiento_y)
}

var img_press;
var position_mouse_img_x, position_mouse_img_y;
var resto_x, resto_y;

var puntos = false;
var init_pnt_x_1;
var init_pnt_x_2;
var init_pnt_y_1;
var init_pnt_y_2;

var img_capa_boolean = false;

document.addEventListener("dragstart", function (event) {
  switch (event.target.id) {
    case "al_1":
      console.log("Es el alto 1");
      puntos = true;
      init_pnt_y_1 = window.event.clientY;
      break;
    case "al_2":
      console.log("Es el alto 2");
      puntos = true;
      init_pnt_y_2 = window.event.clientY;
      break;
    case "an_1":
      console.log("Es el ancho 1");
      puntos = true;
      init_pnt_x_2 = window.event.clientX;
      break;
    case "an_2":
      console.log("Es el ancho 2");
      puntos = true;
      init_pnt_x_1 = window.event.clientX;
      break;

    default:
      puntos = false;
      break;
  }

  var x, y;
  var img_x, img_y;

  if(event.target.className === "capa_img_off" || event.target.className === "capa_img_on"){
    puntos = true
    img_capa_boolean = true;
    event.dataTransfer.setData("img", event.target.id);
  }else{
    img_capa_boolean = false;
  }

  if (puntos == false) {
    x = window.event.clientX;
    img_x = parseInt(
      document
      .getElementById(`${event.target.id}_img_externa`)
      .style.left.replace("px", "")
    );
    resto_x = x - img_x;

    y = window.event.clientY;
    img_y = parseInt(
      document
      .getElementById(`${event.target.id}_img_externa`)
      .style.top.replace("px", "")
    );
    resto_y = y - img_y;

    img_press = document.getElementById(`${event.target.id}_img_externa`);
  }
  console.log(img_capa_boolean)
});

document.addEventListener("dragend", function (event) {
  var lienzo_puntos = document.getElementById("puntos");
  var img = document.getElementById(`${img_puntual}_img_externa`);

  if (puntos == false) {
    if (img_press && img_press.className === "img_watch") {
      var lienzo_puntos = document.getElementById("puntos");

      img_press.style.left = `${window.event.clientX - resto_x}px`;
      img_press.style.top = `${window.event.clientY - resto_y}px`;
      x.value = parseInt(img_press.style.left.replace("px", ""));
      y.value = parseInt(img_press.style.top.replace("px", ""));

      lienzo_puntos.innerHTML = vertices();
    }
  } else {
    var alto_input = document.getElementById("al");
    var ancho_input = document.getElementById("an");
    var x_input = document.getElementById("x");
    var y_input = document.getElementById("y");

    switch (event.target.id) {
      case "al_1":
        console.log("Es el alto 1");
        if (
          document.getElementById("emparejar").className == "emparejar_activo"
        ) {
          var alto_img = parseInt(img.style.height.replace("px", ""));
          var ancho_img = parseInt(img.style.width.replace("px", ""));
          var top_img = parseInt(img.style.top.replace("px", ""));
          var left_img = parseInt(img.style.left.replace("px", ""));

          img.style.height = `${alto_img + (init_pnt_y_1 - window.event.clientY)}px`;
          img.style.top = `${top_img - (init_pnt_y_1 - window.event.clientY)}px`;

          img.style.width = `${(ancho_img * parseInt(img.style.height.replace("px", ""))) / alto_img}px`;
          img.style.left = `${left_img - (parseInt(img.style.width.replace("px", "")) - ancho_img)}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));
          ancho_input.value = parseInt(img.style.width.replace("px", ""));
          x_input.value = parseInt(img.style.left.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        } else {
          var alto_img = parseInt(img.style.height.replace("px", ""));
          var top_img = parseInt(img.style.top.replace("px", ""));
          img.style.height = `${alto_img +
            (init_pnt_y_1 - window.event.clientY)}px`;
          img.style.top = `${top_img -
            (init_pnt_y_1 - window.event.clientY)}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        }

        break;
      case "al_2":
        console.log("Es el alto 2");
        // debugger
        if (
          document.getElementById("emparejar").className == "emparejar_activo"
        ) {
          var alto_img = parseInt(img.style.height.replace("px", ""));
          var ancho_img = parseInt(img.style.width.replace("px", ""));

          img.style.height = `${alto_img +
            (window.event.clientY - init_pnt_y_2)}px`;
          img.style.width = `${(ancho_img *
            parseInt(img.style.height.replace("px", ""))) /
            alto_img}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));
          ancho_input.value = parseInt(img.style.width.replace("px", ""));
          x_input.value = parseInt(img.style.left.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        } else {
          var alto_img = parseInt(img.style.height.replace("px", ""));
          img.style.height = `${alto_img +
            (window.event.clientY - init_pnt_y_2)}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        }

        break;
      case "an_1":
        console.log("Es el ancho 1");
        if (
          document.getElementById("emparejar").className == "emparejar_activo"
        ) {
          var alto_img = parseInt(img.style.height.replace("px", ""));
          var top_img = parseInt(img.style.top.replace("px", ""));
          var ancho_img = parseInt(img.style.width.replace("px", ""));
          var left_img = parseInt(img.style.left.replace("px", ""));

          img.style.width = `${ancho_img + (init_pnt_x_2 - window.event.clientX)}px`;
          img.style.left = `${left_img - (init_pnt_x_2 - window.event.clientX)}px`;

          img.style.height = `${(alto_img * parseInt(img.style.width.replace("px", ""))) / ancho_img}px`;
          img.style.top = `${top_img - (parseInt(img.style.height.replace("px", "")) - alto_img)}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));
          ancho_input.value = parseInt(img.style.width.replace("px", ""));
          x_input.value = parseInt(img.style.left.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        } else {
          var ancho_img = parseInt(img.style.width.replace("px", ""));
          var left_img = parseInt(img.style.left.replace("px", ""));
          img.style.width = `${ancho_img + (init_pnt_x_2 - window.event.clientX)}px`;
          img.style.left = `${left_img - (init_pnt_x_2 - window.event.clientX)}px`;

          ancho_input.value = parseInt(img.style.width.replace("px", ""));
          x_input.value = parseInt(img.style.left.replace("px", ""));

          console.log(parseInt(img.style.height.replace("px", "")), img);

          lienzo_puntos.innerHTML = vertices();
        }

        break;
      case "an_2":
        console.log("Es el ancho 2");
        if (
          document.getElementById("emparejar").className == "emparejar_activo"
        ) {
          var ancho_img = parseInt(img.style.width.replace("px", ""));
          var alto_img = parseInt(img.style.height.replace("px", ""));

          img.style.width = `${ancho_img +
            (window.event.clientX - init_pnt_x_1)}px`;
          img.style.height = `${(alto_img *
            parseInt(img.style.width.replace("px", ""))) /
            ancho_img}px`;

          alto_input.value = parseInt(img.style.height.replace("px", ""));
          ancho_input.value = parseInt(img.style.width.replace("px", ""));
          x_input.value = parseInt(img.style.left.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        } else {
          var ancho_img = parseInt(img.style.width.replace("px", ""));
          img.style.width = `${ancho_img +
            (window.event.clientX - init_pnt_x_1)}px`;

          ancho_input.value = parseInt(img.style.height.replace("px", ""));
          y_input.value = parseInt(img.style.top.replace("px", ""));

          lienzo_puntos.innerHTML = vertices();
        }
        break;

      default:
        break;
    }
  }
  if (event.target.className === "capa_img_off" || event.target.className === "capa_img_on") {
    img_capa_boolean = true;
  }else{
    img_capa_boolean = false;
  }
  console.log(img_capa_boolean)
});
//¿

var escalable_id = [];
var position_escalable = 0;
var img_w;

function emparejar_al_an() {
  // debugger
  if (img_puntual) {
    img_w = img_puntual.id;
  }

  if (img_w >= 0 && escalable_id.includes(img_w)) {
    // console.log("Esta dentro del array");
    document.getElementById("emparejar").innerHTML =
      "<i class='fas fa-lock-open'></i>";
    document.getElementById("emparejar").className = "emparejar";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");
  } else {
    escalable_id[position_escalable] = id_seleccionador.value;
    position_escalable++;

    document.getElementById("emparejar").innerHTML =
      "<i class='fas fa-lock'></i>";
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
  document.getElementById("emparejar").innerHTML =
    "<i class='fas fa-lock-open'></i>";
  document
    .getElementById("emparejar")
    .setAttribute("onclick", "emparejar_al_an()");
  if (escalable_id.includes(img_w)) {
    // console.log("Esta dentro del array");
  }
  //   console.log("Borrar del array");
}

var btn_anterior, panel_anterior;

function btn_switch(id, panel) {
  if (btn_anterior) {
    document.getElementById(panel_anterior).className = "none";
    document.getElementById(`${btn_anterior}`).className = document.getElementById(`${btn_anterior}`).className.replace("btn_on", "btn_off");
    btn_anterior = id
    panel_anterior = panel
    document.getElementById(panel).className = "block"
  } else {
    btn_anterior = id
    panel_anterior = panel
  }
  document.getElementById(id).className = document.getElementById(id).className.replace("btn_off", "btn_on");
  document.getElementById(panel).className = "block"
}

document.addEventListener("keyup", (key) => {
console.log(key.key)
switch (key.key) {
  case "f":
    panel_attribute("capa")
    break;
  case "d":
    panel_attribute("subir")
    break;
  case "s":
    panel_attribute("atributos")
    break;
  case "a":
    panel_attribute("animar")
    break;

  default:
    break;
}
})

function panel_attribute(id) {
  // debugger
  switch (id) {
    case "capa":
      console.log("capa")
      btn_switch(id, "panel_capas")
      break;

    case "subir":
      console.log("subir")
      btn_switch(id, "panel_subir")
      break;

    case "atributos":
      console.log("atributos")
      btn_switch(id, "panel_atributos")
      break;

    case "animar":
      console.log("animar")
      btn_switch(id, "panel_animar")
      break;

    case "basura":
      console.log("basura")
      btn_switch(id, "panel_basura")
      break;

    default:
      break;
  }

}

document.addEventListener("dragenter", function(event) {
  if (img_capa_boolean != false) {
    if (event.target.className == "droptarget") {
      event.target.style.backgroundColor = "#1e90ff";
    }
  }
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "droptarget") {
    event.target.style.backgroundColor = "";
  }
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "droptarget") {
    var data = event.dataTransfer.getData("img");
    console.log(data)
    document.getElementById(`capa${event.target.id.replace("insertar_capa_", "")}`).appendChild(document.getElementById(data)) 
    console.log(document.getElementById(`capa${event.target.id.replace("insertar_capa_", "")}`))
    
  }
});