class Eating implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/eating.png')";
    }

    performBehavior() {
        this.jibby.hygiene -= 0.02;
        this.jibby.food += 0.02;
        this.jibby.happiness += 0.01;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    }

    onEat() {
        this.jibby.food += 5;
    }

    onWash() {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    }

    onPet() {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    }
}