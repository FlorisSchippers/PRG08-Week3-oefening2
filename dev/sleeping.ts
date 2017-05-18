class Sleeping implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
    }

    performBehavior() {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.01;
        this.timer++;
        if (this.timer >= 600) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    }

    onEat() {

    }

    onWash() {

    }

    onPet() {
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        this.jibby.happiness -= 5;
        this.jibby.behavior = new Idle(this.jibby);
    }
}