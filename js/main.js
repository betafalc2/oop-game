
console.log("hello world");

class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;


        //create the dom element for the player
        //step 1 - create element:
        this.domElm = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        domElm.id = "player";
        domElm.style.left = this.positionX + "vw";
        domElm.style.bottom = this.positionY + "vh";
        domElm.style.width = this.width + "vw";
        domElm.style.height = this.height + "vh";
        

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(newDiv);

    }
    moveLeft(){
        console.log ("moving left")
        this.positionX --;
        this.domElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        console.log ("moving right")
        this.positionX ++;
        this.domElm.style.left = this.positionX + "vw";
    }
}

    const player = new Player();


document.addEventListener("keydown", (event) =>{
    console.log(event.code);
    if (event.code === 'ArrowLeft') {
        player.moveLeft();
      } else if (event.code === 'ArrowRight') {
        player.moveRight();
      }
})