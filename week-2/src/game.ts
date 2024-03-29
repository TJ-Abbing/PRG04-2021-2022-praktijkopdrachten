// imports
import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"

export class Game { // puts entire game into game class

    // states the classes within the game class
    pixi: PIXI.Application
    background:PIXI.Sprite
    fish:PIXI.Sprite
    anotherFish:PIXI.Sprite
    bubble:PIXI.Sprite
    anotherBubble:PIXI.Sprite
    loader:PIXI.Loader

    constructor() { // constructor runs once class is called
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("fishTexture", fishImage)
            .add("bubbleTexture", bubbleImage)
            .add("backgroundTexture", bgImage)

        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")

        // background
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)

        // fish
        this.fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
        this.pixi.stage.addChild(this.fish)
        this.fish.tint = Math.random() * 0xFFFFFF;
        this.fish.x = Math.floor(Math.random() * 800)
        this.fish.y = Math.floor(Math.random() * 400)

        // anotherFish
        this.anotherFish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
        this.pixi.stage.addChild(this.anotherFish)
        this.anotherFish.tint = Math.random() * 0xFFFFFF;
        this.anotherFish.x = Math.floor(Math.random() * 800)
        this.anotherFish.y = Math.floor(Math.random() * 400)

        // bubble
        this.bubble = new PIXI.Sprite(this.loader.resources["bubbleTexture"].texture!)
        this.pixi.stage.addChild(this.bubble)
        this.bubble.x = Math.floor(Math.random() * 800)
        this.bubble.y = Math.floor(Math.random() * 400)

        // anotherBubble
        this.anotherBubble = new PIXI.Sprite(this.loader.resources["bubbleTexture"].texture!)
        this.pixi.stage.addChild(this.anotherBubble)
        this.anotherBubble.x = Math.floor(Math.random() * 800)
        this.anotherBubble.y = Math.floor(Math.random() * 400)

        // adds animation
        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta : number) {
        this.fish.x -= 1.5 // determines movement speed and direction 
        this.anotherFish.x -= 1 // determines movement speed and direction 
        this.bubble.y -= 1.5 // determines movement speed and direction 
        this.anotherBubble.y -= 1 // determines movement speed and direction 

        if (this.fish.x <= -100) {
            this.fish.x = 900
        }
        if (this.anotherFish.x <= -100) {
            this.anotherFish.x = 900
        }

        if (this.bubble.y <= 0) {
            this.bubble.y = 600
        } 

        if (this.anotherBubble.y <= 0) {
            this.anotherBubble.y = 600
        }

    }
}

new Game()