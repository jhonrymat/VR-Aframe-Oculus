AFRAME.registerComponent('audiohandler', {
    init:function() {
       let playing = false;
       let audio = document.querySelector("#teleportate");
       this.el.addEventListener('click', () => {
            if(!playing) {
                audio.play();
             } else {
                audio.pause();
                audio.currentTime = 0;
             }
             playing = !playing;
       });
    }
  })