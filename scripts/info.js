AFRAME.registerComponent("info", {
    init: function () {
        var el = this.el;

        // el.addEventListener("mouseenter", function () {
        //     el.setAttribute("scale", "1 1 1");
        // });
        // el.addEventListener("mouseleave", function () {
        //     el.setAttribute("scale", "1.5 1.5 1.5");
        // });
        // BOTÓN DE DISPARO HACIA ABAJO
        el.addEventListener("click", function () {
            // el.setAttribute("src", "#point2");
            var mod = document.getElementById("modal");
            mod.setAttribute("visible", true);
        });
        // // BOTÓN DE DISPARO HACIA ARRIBA
        // el.addEventListener("mouseup", function () {
        //     el.setAttribute("material", "color", "#AA0000");
        // });
    },
});