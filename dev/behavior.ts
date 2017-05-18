interface Behavior {
    jibby: Jibby;
    timer: number;
    performBehavior(): void;
    onEat(): void;
    onWash(): void;
    onPet(): void;
}