class Happy implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
    }

    performBehavior() {
        this.jibby.hygiene -= 0.02;
        this.jibby.food -= 0.02;
        this.jibby.happiness += 0.02;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    }

    onEat() {
        this.jibby.behavior = new Eating(this.jibby);
    }

    onWash() {
        this.jibby.behavior = new Washing(this.jibby);
    }

    onPet() {
        this.jibby.happiness += 5;
    }
}