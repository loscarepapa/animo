var lienzo = document.getElementById("lienzo");
var total_imagenes = 0;
var total_de_capas = [];
var num_atributos_de_imagenes = [];
var atributos_de_imagenes = [];

var z_index = 1;

//¿  insert the image in the canvas
function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function() {
      // <div class="imagenes_puntos" id="${total_imagenes}_interna" draggeble='false'>
      // </div>
      lienzo.innerHTML += `
        <div class="img" id="${total_imagenes}_img_externa" style='left:100px;top:100px;transform:rotateZ(0deg);width:100px;height:100px;opacity:1;z-index:${z_index};' draggeble='false'>
          <img src="${reader.result}" id="${total_imagenes}" class="img_interna"  onclick='watch(this.id)' draggable='false'>
        </div>`;
      z_index++;
      total_de_capas[total_imagenes] = total_imagenes;
      total_imagenes++;
    };
  } else {
    console.log("Hubo un error");
  }
//¿

//* ask if have something selected and deleted it
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
    // img_puntual.setAttribute("draggable", "false");
    document.getElementById(img_puntual.id.replace("_img_externa","")).setAttribute("draggable","false")
    
    // document.getElementById(`${img_puntual.id.replace("_img_externa","")}_interna`).innerHTML = "";
    
    img_puntual.style.zIndex = index_before;
    index_before = "";

    for (let i = 0; i < zindex_modificado_id.length; i++) {
      document.getElementById(`${zindex_modificado_id[i]}_img_externa`).style.zIndex = zindex_img[i]
    }
    
    img_puntual = null;
    
  }
  //*
}

var img_puntual
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
    debugger
    
    // if(img_puntual)
    
    // console.log(
      
    //   `${id}_img_externa` == img_puntual.id.replace("_img_externa",""),
    //   document.getElementById(`${id}_img_externa`) , img_puntual
    // );
    console.log(
      document.getElementById(`${id}_img_externa`) == img_puntual,
      img_puntual,
      document.getElementById(`${id}_img_externa`)
    );


    if (document.getElementById(`${id}_img_externa`) == img_puntual) {
      document.getElementById(`${id}`).setAttribute("draggable", "false");
      img_puntual.className = "img";
      img_puntual.style.zIndex = index_before;
      index_before = "" ;

    document.getElementById("al_1").style.display = "none";
    document.getElementById("al_2").style.display = "none";
    document.getElementById("an_1").style.display = "none";
    document.getElementById("an_2").style.display = "none";

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
    document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock-open'></i>"
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");
      
    for (let i = 0; i < 8; i++) {
      document.getElementById(`title_attribute${i}`).style.display = "none";
    }

    for (let i = 0; i < zindex_modificado_id.length; i++) {
      document.getElementById(`${zindex_modificado_id[i]}_img_externa`).style.zIndex = zindex_img[i]
    }

    //¿
  } else {
    id_seleccionador.value = id;

    var img_watch_externa = document.getElementById(`${id}_img_externa`);
    // var img_watch_interna = document.getElementById(`${id}_interna`)
    var img_watch_img = document.getElementById(id)
    // console.log(img_watch_interna)
    
    var style_rotate = img_watch_externa.style.transform;
    var style_alto = img_watch_externa.style.height;
    var style_ancho = img_watch_externa.style.width;
    var style_x = img_watch_externa.style.left;
    var style_y = img_watch_externa.style.top;
    var style_opacidad = img_watch_externa.style.opacity;
    var style_zindex = img_watch_externa.style.zIndex;

  //* if had other image in the variable delete it
    if (img_puntual) {
      
      img_puntual.className = "img";
      
      console.log(index_before)
      
      img_puntual.style.zIndex = index_before;
      
      // document.getElementById(`${img_puntual.id.replace("_img_externa","")}_interna`).innerHTML = "";
      
      document.getElementById(img_puntual.id.replace("_img_externa","")).setAttribute("draggable", "false");
      
      //! before of this id for delete the image previous and after is for add to the new image
      img_puntual = img_watch_externa;

          for (let i = 0; i < zindex_modificado_id.length; i++) {
          document.getElementById(`${zindex_modificado_id[i]}_img_externa`).style.zIndex = zindex_img[i]
        }

      index_before = img_watch_externa.style.zIndex
      img_watch_externa.style.zIndex = z_index;

      img_puntual_img = document.getElementById(`${img_watch_externa.id.replace("_img_externa","")}`);
      // img_puntual_interna = document.getElementById(`${img_watch_externa.id.replace("_img_externa","")}_img_interna`);

      img_puntual_img.setAttribute("draggable", "true");

      img_watch_externa.className = "img_watch";

      
    document.getElementById("al_1").style.display = "none";
    document.getElementById("al_2").style.display = "none";
    document.getElementById("an_1").style.display = "none";
    document.getElementById("an_2").style.display = "none";

      id_seleccionador.style.display = "inline-block";
      tabla.style.display = "inline-block";

      if (escalable_id.includes(img_puntual.id.replace("_img_externa",""))) {
        document.getElementById("emparejar").className = "emparejar_activo";
            document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock'></i>"
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock-open'></i>"
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

      //*
      //¿ if it not added to the variable
    } else {
      img_puntual = img_watch_externa;
      document.getElementById(img_watch_externa.id).className = "img_watch";

      index_before = img_watch_externa.style.zIndex
      img_watch_externa.style.zIndex = z_index;
      lienzo.innerHTML += `
        <div class="alto_1" style="
        left:${(parseInt(style_x.replace("px","")) + (parseInt(style_ancho.replace("px","")) / 2) - 5)}px;
        top:${parseInt(style_alto.replace("px","")) - 5}px" id="al_1" draggable="true"></div>

        <div class="alto_2" style="
        left:${(parseInt(style_x.replace("px","")) + (parseInt(style_ancho.replace("px","")) / 2) - 5)}px;
        top:${(parseInt(style_y.replace("px","")) + parseInt(style_alto.replace("px","")) - 5)}px" id="al_2" draggable="true"></div>

        <div class="ancho_1" style="
        top:${(parseInt(style_y.replace("px","")) + (parseInt(style_alto.replace("px","")) / 2) - 5)}px;
        left:${(parseInt(style_x.replace("px","")) - 5)}px" id="an_1" draggable="true"></div>

        <div class="ancho_2" style="
        top:${(parseInt(style_y.replace("px","")) + (parseInt(style_alto.replace("px","")) / 2) - 5)}px;
        left:${(parseInt(style_x.replace("px","")) + parseInt(style_alto.replace("px","")) - 5)}px" id="an_2" draggable="true"></div>`;

      // document.getElementById(img_puntual.id.replace("_img_externa","")).setAttribute("draggable", "true");

      if (escalable_id.includes(img_puntual.id.replace("_img_externa",""))) {
        document.getElementById("emparejar").className = "emparejar_activo";
            document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock'></i>"
        document
          .getElementById("emparejar")
          .setAttribute("onclick", "borrar_al_an()");
        // console.log("Si, esta dentro");
      } else {
        document.getElementById("emparejar").className = "emparejar";
        document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock-open'></i>"
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
var zindex_modificado_id = [] 
var z_m_id_length = zindex_modificado_id.length
var zindex_img = [] 

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
      if (document.getElementById("emparejar").className == "emparejar_activo") {
        anterior_alto = parseInt(img_puntual.style.height.replace("px", ""));

        diferencia_alto = value - anterior_alto;

        img_puntual.style.height = `${value}px`;

        img_puntual.style.width = `${(parseInt(document.getElementById("an").value) * value) / anterior_alto}px`;

        document.getElementById("an").value = parseInt(img_puntual.style.width.replace("px",""));

        escalable_img = value;
      } else {
        img_puntual.style.height = `${value}px`;
      }

      break;

    case "an":
      if (document.getElementById("emparejar").className == "emparejar_activo") {
        anterior_ancho = parseInt(img_puntual.style.width.replace("px", ""));

        diferencia_ancho = value - anterior_ancho;

        img_puntual.style.width = `${value}px`;

        img_puntual.style.height = `${(parseInt(document.getElementById("al").value) * value) / anterior_ancho}px`;

        document.getElementById("al").value = parseInt(img_puntual.style.height.replace("px",""));

        escalable_img = value;
      } else {
        img_puntual.style.width = `${value}px`;
      }

      break;
    case "o":
      img_puntual.style.opacity = value;
      break;
    case "z":
      // img_puntual.style.zIndex = value;
      var index
      
      if(zindex_modificado_id.includes(img_puntual.id.replace("_img_externa",""))){
         index = zindex_modificado_id.indexOf(id_seleccionador.value);

          if (index > -1) {
            escalable_id.splice(index, 1);
          }

          zindex_img[index] = value
          // console.log("Esta dentro del array")
        }else{
          z_m_id_length = zindex_modificado_id.length;
          zindex_modificado_id[z_m_id_length] = img_puntual.id.replace("_img_externa","")
          zindex_img[z_m_id_length] = value
          // console.log("No esta dentro del array")
      }
      
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
  // console.log(movimiento_x, movimiento_y)
}

var img_press;
var position_mouse_img_x, position_mouse_img_y;
var resto_x, resto_y;

var puntos = false
var init_pnt_x_1
var init_pnt_x_2
var init_pnt_y_1
var init_pnt_y_2

document.addEventListener("dragstart", function(event) {
  

  switch (event.target.id) {
    case "al_1":
      console.log("Es el alto 1");
      puntos = true
      init_pnt_y_1 = window.event.clientY;
      break;
    case "al_2":
      console.log("Es el alto 2");
      puntos = true
      init_pnt_y_2 = window.event.clientY
      break;
    case "an_1":
      console.log("Es el ancho 1");
      puntos = true
      init_pnt_x_2 = window.event.clientX
      break;
    case "an_2":
      console.log("Es el ancho 2");
      puntos = true
      init_pnt_x_1 = window.event.clientX
      break;

    default:
    puntos = false
      break;
  }

  var x, y;
  var img_x, img_y;

if(puntos == false){

  x = window.event.clientX;
  img_x = parseInt(
    document.getElementById(`${event.target.id}_img_externa`).style.left.replace("px", "")
  );
  resto_x = x - img_x;

  y = window.event.clientY;
  img_y = parseInt(
    document.getElementById(`${event.target.id}_img_externa`).style.top.replace("px", "")
  );
  resto_y = y - img_y;

  img_press = document.getElementById(`${event.target.id}_img_externa`);

}


});

document.addEventListener("dragend", function(event) {
  if(puntos == false){
    if (img_press && img_press.className === "img_watch") {
      img_press.style.left = `${window.event.clientX - resto_x}px`;
      img_press.style.top = `${window.event.clientY - resto_y}px`;
      x.value = parseInt(img_press.style.left.replace("px", ""))
      y.value = parseInt(img_press.style.top.replace("px", ""))
    }
  }else{
    

    switch (event.target.id) {
      case "al_1":
        console.log("Es el alto 1");
        if (document.getElementById("emparejar").className =="emparejar_activo") {
              
              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));
              var top_img = parseInt(img_puntual.style.top.replace("px", ""));
              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));
              var left_img = parseInt(img_puntual.style.left.replace("px", ""));

              img_puntual.style.height = `${alto_img + (init_pnt_y_1 - window.event.clientY)}px`
              img_puntual.style.top = `${top_img - (init_pnt_y_1 - window.event.clientY)}px`

              img_puntual.style.width = `${(ancho_img * parseInt(img_puntual.style.height.replace("px",""))) / alto_img}px`
              img_puntual.style.left = `${left_img - (parseInt(img_puntual.style.width.replace("px","")) - ancho_img)}px`

              alto.value = parseInt(img_puntual.style.height.replace("px",""))
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
            } else {
              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));
              var top_img = parseInt(img_puntual.style.top.replace("px", ""));
              img_puntual.style.height = `${alto_img + (init_pnt_y_1 - window.event.clientY)}px`
              img_puntual.style.top = `${top_img - (init_pnt_y_1 - window.event.clientY)}px`
              alto.value = parseInt(img_puntual.style.height.replace("px",""))
            }

        break;
      case "al_2":
      console.log("Es el alto 2");
        // debugger
            if (document.getElementById("emparejar").className =="emparejar_activo") {

              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));
              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));

              img_puntual.style.height = `${alto_img + (window.event.clientY - init_pnt_y_2)}px`
              img_puntual.style.width = `${(ancho_img * parseInt(img_puntual.style.height.replace("px",""))) / alto_img}px`

              alto.value = parseInt(img_puntual.style.height.replace("px",""))
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
              
            } else {
              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));
              img_puntual.style.height = `${alto_img + (window.event.clientY - init_pnt_y_2)}px`
              alto.value = parseInt(img_puntual.style.height.replace("px",""))
            }
            
        
        break;
        case "an_1":
        console.log("Es el ancho 1");
        if (document.getElementById("emparejar").className =="emparejar_activo") {
              
              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));
              var top_img = parseInt(img_puntual.style.top.replace("px", ""));
              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));
              var left_img = parseInt(img_puntual.style.left.replace("px", ""));

              img_puntual.style.width = `${ancho_img + (init_pnt_x_2 - window.event.clientX)}px`
              img_puntual.style.left = `${left_img - (init_pnt_x_2 - window.event.clientX)}px`

              img_puntual.style.height = `${(alto_img * parseInt(img_puntual.style.width.replace("px",""))) / ancho_img}px`
              img_puntual.style.top = `${top_img - (parseInt(img_puntual.style.height.replace("px","")) - alto_img)}px`

              alto.value = parseInt(img_puntual.style.height.replace("px",""))
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
            } else {
              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));
              var left_img = parseInt(img_puntual.style.left.replace("px", ""));
              img_puntual.style.width = `${ancho_img + (init_pnt_x_2 - window.event.clientX)}px`
              img_puntual.style.left = `${left_img - (init_pnt_x_2 - window.event.clientX)}px`
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
            }
            
        break;
      case "an_2":
        console.log("Es el ancho 2");
        if (document.getElementById("emparejar").className =="emparejar_activo") {

              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));
              var alto_img = parseInt(img_puntual.style.height.replace("px", ""));

              img_puntual.style.width = `${ancho_img + (window.event.clientX - init_pnt_x_1)}px`
              img_puntual.style.height = `${(alto_img * parseInt(img_puntual.style.width.replace("px",""))) / ancho_img}px`

              alto.value = parseInt(img_puntual.style.height.replace("px",""))
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
              
            } else {
              var ancho_img = parseInt(img_puntual.style.width.replace("px", ""));
              img_puntual.style.width = `${ancho_img + (window.event.clientX - init_pnt_x_1)}px`
              ancho.value = parseInt(img_puntual.style.width.replace("px",""))
            }
        break;

      default:
        break;
    }
    
  }

});
//

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
    document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock-open'></i>"
    document.getElementById("emparejar").className = "emparejar";
    document
      .getElementById("emparejar")
      .setAttribute("onclick", "emparejar_al_an()");
  } else {
    escalable_id[position_escalable] = id_seleccionador.value;
    position_escalable++;

    document.getElementById("emparejar").innerHTML = "<i class='fas fa-lock'></i>"
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
