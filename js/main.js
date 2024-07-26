
console.log("hello world");

class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;

        this.createDomElm();  //when you invoke a method in the current class, use this.//

    }

    createDomElm(){
        //create the dom element for the player//
        //step 1 - create element:
        this.domElm = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        domElm.id = "player";
        domElm.style.left = this.positionX + "vw"; 
        domElm.style.bottom = this.positionY + "vh"; //this ties up this property to the CSS file //
        domElm.style.width = this.width + "vw";
        domElm.style.height = this.height + "vh";
    
        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElm);
    }

    moveLeft(){
        console.log ("moving left")
        this.positionX --;
        this.domElm.style.left = this.positionX + "vw"; //modifies the CSS file to change the left value evertime the this.positionX --; happens//
    }

    moveRight(){
        console.log ("moving right")
        this.positionX ++;
        this.domElm.style.left = this.positionX + "vw"; //porque ele se orienta da esquerda, e a gente só quer que se mexa pra um lado ou pro outro na mesma linha//
    }
}

    class Obstacle{
        constructor(){
            this.positionX = 40; // we want this to come from the top middle//
            this.positionY = 90;
            this.width = 20;
            this.height = 10;


        }

        createDomElm(){
            //create the dom element for the player//
            //step 1 - create element:
            this.domElm = document.createElement("div");
    
            // step2: add content or modify (ex. innerHTML...)
            domElm.className = "obstacle";  //get it be class as it is in the CSS file//
            domElm.style.left = this.positionX + "vw";
            domElm.style.bottom = this.positionY + "vh";
            domElm.style.width = this.width + "vw";
            domElm.style.height = this.height + "vh";
        
            //step3: append to the dom: `parentElm.appendChild()`
            const board = document.getElementById("board");
            board.appendChild(this.domElm);
        }

        moveDown(){ //methid for it to move down//
            this.positionY --; //we cant make the element move faster
            console.log(`new position ${this.positionY}`)
            this.domElm.style.bottom = this.positionY + "vw"; //modifies the CSS file to change the bottom value evertime the this.positionY --; happens//
        }
    }




    const player = new Player();
    const obstacle1 = new Obstacle(); //create a new instance of the class obstacle, to be able to invoke mfunctions for it, the class doesnt do anything, 
    //its just a template of the properties and functionality, you have to declare ir as a variable to be able to make it show up//
    setInterval (() =>{
        obstacle1.moveDown();
    }, 70)

document.addEventListener("keydown", (event) =>{
    console.log(event.code);
    if (event.code === 'ArrowLeft') {
        player.moveLeft();
      } else if (event.code === 'ArrowRight') {
        player.moveRight();
      }
})

