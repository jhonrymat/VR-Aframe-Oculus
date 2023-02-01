    AFRAME.registerComponent("basic-interactions", {
    init: function () {
        var el = this.el;

        el.addEventListener("mouseenter", function () {
            el.setAttribute("material", "color", "#FBEFF2");
        });
        // el.addEventListener("mouseleave", function () {
        //     el.setAttribute("material", "color", "#FFFFFF");
        // });
        // // BOTÓN DE DISPARO HACIA ABAJO
        // el.addEventListener("mousedown", function () {
        //     el.setAttribute("material", "color", "#FFAA00");
        // });
        // // BOTÓN DE DISPARO HACIA ARRIBA
        // el.addEventListener("mouseup", function () {
        //     el.setAttribute("material", "color", "#AA0000");
        // });
    },
});