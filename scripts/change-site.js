AFRAME.registerComponent("hotspots", {
    init: function () {
      this.el.addEventListener("reloadspots", function (evt) {
        //obtener todo el grupo de puntos actual y escalarlo a 0
        var currspotgroup = document.getElementById(evt.detail.currspots);
        currspotgroup.setAttribute("scale", "0 0 0");

        //obtener todo el nuevo grupo de puntos y escalarlo a 1
        var newspotgroup = document.getElementById(evt.detail.newspots);
        newspotgroup.setAttribute("scale", "1 1 1");
      });
    },
  });
AFRAME.registerComponent("spot", {
    schema: {
      linkto: { type: "string", default: "" },
      spotgroup: { type: "string", default: "" },
    },
    init: function () {
      //añadir fuente de imagen del icono de punto de acceso
      this.el.setAttribute("src", "#hotspot");
      //hacer que el ícono mire a la cámara todo el tiempo
      this.el.setAttribute("look-at", "#cameraRig");

      var data = this.data; 

      this.el.addEventListener("click", function () {
        //configure la fuente del skybox en la nueva imagen según el lugar
        var sky = document.getElementById("skybox");
        sky.setAttribute("src", data.linkto);

        var spotcomp = document.getElementById("spots");
        var currspots = this.parentElement.getAttribute("id");
        //crear un evento para el componente de puntos para cambiar los datos de los puntos
        spotcomp.emit("reloadspots", {
          newspots: data.spotgroup,
          currspots: currspots,
        });
      });
    },
  });