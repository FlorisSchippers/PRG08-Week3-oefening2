/// <reference path="jibby.ts"/>

class Game {

    private jibby: Jibby;

    constructor() {
        let container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(() => this.gameLoop());
    }

    private updateUI(): void {
        if (this.jibby.status == true) {
            document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
            document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
            document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString();
        }
    }
}

// load
window.addEventListener("load", function () {
    let g: Game = new Game();
});