class Player {
  // initialize player properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 2;
    this.limit = 300;
  }

  update() {
    this.x += this.velocity;
    if (this.x >= this.limit || this.x <= 0)
      this.velocity = -this.velocity;
  }

  draw(c) {
    c.fillStyle = "blue";
    c.fillRect(this.x, this.y, 100, 100);
  }
}

export { Player }
