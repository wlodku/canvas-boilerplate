class Player {
    // initialize player properties
    constructor(x, y) {
        this.x = x;
        this.y = y;        
    }

    update(delta) {
        // delta == last frame duration        
    }

    draw(c) {        
        c.fillRect(this.x, this.y, 200, 200);
    }
}