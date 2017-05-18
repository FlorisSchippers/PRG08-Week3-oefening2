var Dead = (function () {
    function Dead(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }
    Dead.prototype.performBehavior = function () {
        this.jibby.hygiene = this.jibby.food = this.jibby.happiness = 0;
        this.jibby.status = false;
    };
    Dead.prototype.onEat = function () {
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onPet = function () {
        this.jibby.behavior = new Zombie(this.jibby);
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/eating.png')";
    }
    Eating.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.02;
        this.jibby.food += 0.02;
        this.jibby.happiness += 0.01;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Eating.prototype.onEat = function () {
        this.jibby.food += 5;
    };
    Eating.prototype.onWash = function () {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    Eating.prototype.onPet = function () {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    return Eating;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.status = true;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happiness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behavior = new Idle(this);
    }
    Jibby.prototype.update = function () {
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
    };
    Jibby.prototype.onPet = function () {
        console.log("onPet");
        this.behavior.onPet();
    };
    Jibby.prototype.onWash = function () {
        console.log("onWash");
        this.behavior.onWash();
    };
    Jibby.prototype.onEat = function () {
        console.log("onEat");
        this.behavior.onEat();
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        if (this.jibby.status == true) {
            document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
            document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
            document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString();
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Happy = (function () {
    function Happy(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
    }
    Happy.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.02;
        this.jibby.food -= 0.02;
        this.jibby.happiness += 0.02;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Happy.prototype.onEat = function () {
        this.jibby.behavior = new Eating(this.jibby);
    };
    Happy.prototype.onWash = function () {
        this.jibby.behavior = new Washing(this.jibby);
    };
    Happy.prototype.onPet = function () {
        this.jibby.happiness += 5;
    };
    return Happy;
}());
var Idle = (function () {
    function Idle(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    }
    Idle.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.01;
        this.jibby.happiness -= 0.01;
        this.timer++;
        if (this.timer >= 600) {
            this.jibby.behavior = new Sleeping(this.jibby);
        }
    };
    Idle.prototype.onEat = function () {
        this.jibby.behavior = new Eating(this.jibby);
    };
    Idle.prototype.onWash = function () {
        this.jibby.behavior = new Washing(this.jibby);
    };
    Idle.prototype.onPet = function () {
        this.jibby.behavior = new Happy(this.jibby);
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
    }
    Sleeping.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.01;
        this.timer++;
        if (this.timer >= 600) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Sleeping.prototype.onEat = function () {
    };
    Sleeping.prototype.onWash = function () {
    };
    Sleeping.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        this.jibby.happiness -= 5;
        this.jibby.behavior = new Idle(this.jibby);
    };
    return Sleeping;
}());
var Washing = (function () {
    function Washing(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
    }
    Washing.prototype.performBehavior = function () {
        this.jibby.hygiene += 0.02;
        this.jibby.food -= 0.02;
        this.jibby.happiness += 0.01;
        this.timer++;
        if (this.timer >= 300) {
            this.jibby.behavior = new Idle(this.jibby);
        }
    };
    Washing.prototype.onEat = function () {
        this.jibby.happiness -= 5;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    Washing.prototype.onWash = function () {
        this.jibby.hygiene += 5;
    };
    Washing.prototype.onPet = function () {
        this.jibby.happiness -= 10;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    };
    return Washing;
}());
var Zombie = (function () {
    function Zombie(jibby) {
        this.timer = 0;
        this.jibby = jibby;
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
        var hygiene = document.getElementsByTagName("hygiene")[0];
        hygiene.style.transform = "translate(200px, 110px)";
        document.getElementsByTagName("hygiene")[0].innerHTML = "TIME";
        var food = document.getElementsByTagName("food")[0];
        food.style.transform = "translate(300px, 110px)";
        document.getElementsByTagName("food")[0].innerHTML = "TO";
        var happiness = document.getElementsByTagName("happiness")[0];
        happiness.style.transform = "translate(380px, 110px)";
        document.getElementsByTagName("happiness")[0].innerHTML = "KILL";
    }
    Zombie.prototype.performBehavior = function () {
    };
    Zombie.prototype.onEat = function () {
    };
    Zombie.prototype.onWash = function () {
    };
    Zombie.prototype.onPet = function () {
    };
    return Zombie;
}());
//# sourceMappingURL=main.js.map