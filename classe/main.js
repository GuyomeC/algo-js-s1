class hero {
    constructor(name, pv, atk, def){
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }

    attackMonster(monster){
        monster.hp -=this.atk
    }
}

class monster {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

let bob = new hero("Bob", 10, 2, 2)
let bobbi = new hero("Bobbi", 15, 4, 1)
let demon = new monster("Lucifer", 10)

bob.attackMonster(demon)

class pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackpokemon(enemi){
        enemi.hp = enemi.hp - this.attack - enemi.defense
    }

    isLucky(attaquant,enemi) {
        let nbr = Math.random()
        if (attaquant.luck >= nbr ) {
            console.log(attaquant.name + " va attaquer")
            attaquant.attackpokemon(enemi)
            console.log(attaquant.name + " attaque et " + enemi.name + " a pris " + attaquant.attack + " dégats et il se retrouve à "+ enemi.hp + " hp")
        } else {
            console.log(attaquant.name + " va attaquer")
            console.log(attaquant.name + " a raté son enemi donc " + enemi.name + " a pris 0 dégat")
        }
    }

}

let tadmorv = new pokemon("tadmorv", 10, 3, 100, 0.6)
console.log(tadmorv)
let granipot = new pokemon("granipot", 2, 5, 75, 0.4)
console.log(granipot)


while (tadmorv.hp > 0 || granipot.hp > 0) {
    tadmorv.isLucky(tadmorv, granipot)
    if (granipot.hp <= 0) {
        console.log("granipot est mort")
        break
    } else {
        granipot.isLucky(granipot, tadmorv)
        if (tadmorv.hp <= 0){
            console.log("tadmorv est mort")
            break
        } 
    }
    
}

let aquali = new pokemon("aquali", 7, 6, 211, 0.6)
console.log(aquali)
let mackogneur = new pokemon("mackogneur", 12, 7, 168, 0.9)
console.log(mackogneur)

while (aquali.hp > 0 || mackogneur.hp > 0) {
    aquali.isLucky(aquali, mackogneur)
    if (mackogneur.hp <= 0) {
        console.log("mackogneur est mort")
        break
    } else {
        mackogneur.isLucky(mackogneur, aquali)
        if (aquali.hp <= 0){
            console.log("aquali est mort")
            break
        } 
    }
    
}