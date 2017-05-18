class Jibby {

    public behavior: Behavior;
    public hygiene: number;
    public food: number;
    public happiness: number;
    public status: boolean = true;

    public div: HTMLElement;
    public x: number;
    public y: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happiness = 50;

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());

        // hier het gedrag toekennen
        this.behavior = new Idle(this);
    }

    public update(): void {
        // hier het gedrag updaten
        if (this.hygiene <= 25 && this.hygiene > 0) {
            this.div.style.backgroundImage = "url('images/dirty.png')";
        }
        if (this.food <= 25 && this.food > 0) {
            this.div.style.backgroundImage = "url('images/hungry.png')";
        }
        if (this.happiness <= 25 && this.happiness > 0) {
            this.div.style.backgroundImage = "url('images/angry.png')";
        }
        if (this.hygiene < 0 || this.food < 0 || this.happiness < 0) {
            this.behavior = new Dead(this);
        }
        this.behavior.performBehavior();
    }

    private onPet(): void {
        console.log("onPet");
        this.behavior.onPet();
    }

    private onWash(): void {
        console.log("onWash");
        this.behavior.onWash();
    }

    private onEat(): void {
        console.log("onEat");
        this.behavior.onEat();
    }
}