class Washing implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
    }

    performBehavior() {
        this.jibby.hygiene += 0.02;
        this.jibby.food -= 0.02;
        this.jibby.happiness += 0.01;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    }

    onEat() {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    }

    onWash() {
        this.jibby.hygiene += 5;
    }

    onPet() {
        this.jibby.happiness -= 10;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    }
}