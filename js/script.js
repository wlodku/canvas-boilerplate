window.addEventListener('load', () => {
    let canva = document.getElementById('root');
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;

    let c = canva.getContext('2d');

    let player1 = new Player(100, 200);

    function update(delta) {
        player1.update(delta);
    }

    function draw() {
        c.clearRect(0, 0, canva.width, canva.height);
        player1.draw(c);
    }

    MainLoop.setUpdate(update).setDraw(draw).start();

});