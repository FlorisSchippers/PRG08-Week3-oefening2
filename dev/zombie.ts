class Zombie implements Behavior {

    jibby: Jibby;
    timer: number = 0;

    constructor(jibby: Jibby) {
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";

        let hygiene = <HTMLElement>document.getElementsByTagName("hygiene")[0];
        hygiene.style.transform = "translate(200px, 110px)";
        document.getElementsByTagName("hygiene")[0].innerHTML = "TIME";

        let food = <HTMLElement>document.getElementsByTagName("food")[0];
        food.style.transform = "translate(300px, 110px)";
        document.getElementsByTagName("food")[0].innerHTML = "TO";

        let happiness = <HTMLElement>document.getElementsByTagName("happiness")[0];
        happiness.style.transform = "translate(380px, 110px)";
        document.getElementsByTagName("happiness")[0].innerHTML = "KILL";
    }

    performBehavior() {

    }

    onEat() {

    }

    onWash() {

    }

    onPet() {

    }
}