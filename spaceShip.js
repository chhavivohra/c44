class spaceShip{
    constructor(x, y, width, height) {
    super(380,390,50,70)
    this.image=loadImage("spaceShip.png")
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
      }
  };
  