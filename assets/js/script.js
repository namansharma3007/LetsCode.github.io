var typed = new Typed("#autoType", {
    strings:["I do caffeine coding", "My cycle is \"Coffee Break Code\"", "Sometimes I go in Code Coma", "I need coffee naps", "Code Fuel == Coffee", "Coffee-Driven Development is my only motivation", "Power Nap == Coding", "I have debugging dreams"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})



var drops = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (var i = 0; i < 15; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(230, 230, 250);
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
    }
}

function Drop() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 10, 4, 10);
    this.character = String.fromCharCode(Math.floor(random(32, 127)));
    
    this.fall = function() {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;
        
        if (this.y > height) {
            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }
    
    this.show = function() {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(138, 43, 226);
        text(this.character, this.x, this.y);
    }
}