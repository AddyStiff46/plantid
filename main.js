// const polkweed {
//     lifespan: perennial,
//     type: herb,
//     bloomTime: [summer, fall],
//     height: Range([1m: 3m]),
//     spread: [90cm, 1.5m],
//     leafColor: [green, purple, yellow],
//     flowerSize: [2cm, 5cm]
//     flowerColor: [white, green, pink]
//     fruitColor: [black, purple]
//     fruit: True
//     stemColor: [green, red, white, purple, pink]
//     Dormancy: winter
//     leafType: deciduous
// }

class Plant {
    constructor(plantName, lifespan, type){
        this.plantName = plantName;
        this.lifespan = lifespan;
        this.type = type;
    };
}

const polkweed = new Plant("Polkweed", "Perennial", "Herb");
