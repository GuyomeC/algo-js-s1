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
            console.log(attaquant.name + " attaque")
            console.log(enemi.name + " a pris " + tadmorv.attack + " dégats et il se retrouve à "+ granipot.hp + " hp")
        } else {
            console.log(attaquant.name + " va attaquer")
            console.log(attaquant.name + " a raté son enemi")
            console.log(enemi.name + " a pris 0 dégats")
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
