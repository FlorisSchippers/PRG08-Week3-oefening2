class Dead implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }

    performBehavior() {
        this.jibby.hygiene = this.jibby.food = this.jibby.happiness = 0;
        this.jibby.status = false;
    }

    onEat() {

    }

    onWash() {

    }

    onPet() {
        this.jibby.behavior = new Zombie(this.jibby);
    }
}