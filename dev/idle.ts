class Idle implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    }

    performBehavior() {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.01;
        this.jibby.happiness -= 0.01;
        this.timer++;
        if (this.timer >= 600) {
            this.jibby.behavior = new Sleeping(this.jibby);
        }
    }

    onEat() {
        this.jibby.behavior = new Eating(this.jibby);
    }

    onWash() {
        this.jibby.behavior = new Washing(this.jibby);
    }

    onPet() {
        this.jibby.behavior = new Happy(this.jibby);
    }
}