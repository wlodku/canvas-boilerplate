import { Player } from './player.js';

window.addEventListener('load', () => {
    const canva = document.getElementById('root');
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;

    const c = canva.getContext('2d');

    const player1 = new Player(100, 200);

    function update(delta) {
      player1.update(delta);
    }

    function draw() {
      c.clearRect(0, 0, canva.width, canva.height);
      player1.draw(c);
    }

    function mainLoop(timestamp) {
      console.log(timestamp);
      update();
      draw();
      requestAnimationFrame(mainLoop);
    }

    // MainLoop.setUpdate(update).setDraw(draw).start();
    requestAnimationFrame(mainLoop);


});
