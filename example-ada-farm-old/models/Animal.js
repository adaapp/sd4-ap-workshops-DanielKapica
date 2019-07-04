class Animal {
    constructor(field, x, y, health, lifespan) {
        this.field = field
        this.x = x
        this.y = y
        this.health = health
        this.lifespan = lifespan
        this.birthstamp = millis() / 100
        this.hunger = 0
        console.log(this.birthstamp)
    }
    getAge(){
        return millis() / 100 - this.birthstamp
    }
    draw() {
            var width = 30;
            var height = 30;
        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        )
    }
}