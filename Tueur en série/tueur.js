let nom = ["Roz", "Natasha", "Guillaume", "Yves-yves", "Gabriel", "Jean-Jean", "Douglass", "Bob", "Bobby", "Willy"]
let caracteriqtiqueHomme = ["nerd", "rapide", "codeur", "gameur", "cuisinier", "intelligent", "endurant", "peureux"]
let caracteriqtiqueFemme = ["nerd", "rapide", "codeuse", "gameuse", "cuisinière", "intelligente", "endurante", "peureuse"]

class survivor{
    constructor(name, characteristic, luck, status){
        this.name = name
        this.characteristic = characteristic
        this.luck = luck
        this.status = status
    }

}

class killer{
    constructor(name, pv){
        this.name = name
        this.pv = pv
    }
    attackSurvivor(tableauSurvivant) {  /* fonction qui permet au killer d'attaquer et qui nous permet de voir ce qu'il se passe depuis la console*/
        var survivantAttaqué = Math.floor(Math.random() * tableauSurvivant.length)
        if (tableauSurvivant[survivantAttaqué].luck === 0.25) {
            console.log(tableauSurvivant[survivantAttaqué].name + " n'a pas de chance et se fait attaquer")
            console.log(this.name + " a réussi à tuer " + tableauSurvivant[survivantAttaqué].name)
            survivantsMorts.push(tableauSurvivant[survivantAttaqué])  /*j'ajoute le survivant mort à un array survivantsMorts*/
            tableauSurvivant.splice(survivantAttaqué,1)               /* et je l'enlève au tableau des survivants*/  
            console.log("Il reste " + tableauSurvivant.length + " survivant(s)")
        } else if (tableauSurvivant[survivantAttaqué].luck === 0.3) {
            console.log(tableauSurvivant[survivantAttaqué].name + " a esquivé l'attaque de " + this.name + " et au passage lui met un coup qui lui inflige 10 de dégats")
            this.pv = this.pv - 10
            if (this.pv <= 0){
                console.log("Il reste 0 pv à " + this.name)
            } if (this.pv > 0) {
                console.log("Il reste " + this.pv + " pv à " + this.name)
            }
            
            
        } else if (tableauSurvivant[survivantAttaqué].luck === 0.45) {
            console.log(tableauSurvivant[survivantAttaqué].name + " a réussi à attaquer " + this.name + " et à lui mettre 15 de dégats mais Jason a réussi à lui mettre un coup au passage et " + tableauSurvivant[survivantAttaqué].name + " est mort(e) sur le coup")
            this.pv = this.pv - 15
            if (this.pv <= 0){
                console.log("Il reste 0 pv à " + this.name)   /* si ses pv sont en dessous de 0 la console affichera 0*/
            } if (this.pv > 0) {
                console.log("Il reste " + this.pv + " pv à " + this.name)
            }
            survivantsMorts.push(tableauSurvivant[survivantAttaqué])
            tableauSurvivant.splice(survivantAttaqué,1)
            console.log("Il reste " + tableauSurvivant.length + " survivant(s)")
        }

    }

    
}

let jason = new killer("Jason", 100)
let survivants = []
let survivantsMorts = []

for (let i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * nom.length)  /* je choisi un nom aleatoirement dans la liste de nom pré écrite*/
    let nomSurvivant = nom[a]
    nom.splice(a,1)                                 /* et je l'enlève au passage pour ne pas avoir de répétition*/
    if (a > 1){
        var b = Math.floor(Math.random() * caracteriqtiqueHomme.length)    /* je choisi une caracteristique et je l'enleve des deux liste caracteristique*/
        var c = caracteriqtiqueHomme[b]
        caracteriqtiqueHomme.splice(b,1)                                    /* pour ne pas avoir deux gamer ou deux cuisinier*/
        caracteriqtiqueFemme.splice(b,1)
    } else {
        var b = Math.floor(Math.random() * caracteriqtiqueFemme.length)
        var c = caracteriqtiqueFemme[b]
        caracteriqtiqueFemme.splice(b,1)
        caracteriqtiqueHomme.splice(b,1)
    }
    let lucky = Math.random() * (4 - 1) + 1             
    if (lucky >= 1 && lucky < 2.5){            /* Il y a une chance sur 2 que le survivant meurt sur le coup*/
        var isLucky = 0.25
        var statutMental = " n'est pas du tout en forme pour aujourd'hui."  
    } if (lucky >= 2.5 && lucky < 3){         /* Il y a une chance sur 6 que le survivant ait la capacité d'esquivé*/
        var isLucky = 0.3
        var statutMental = " a envie d'en découdre avec le tueur en série."
    } if (lucky >= 3 && lucky < 4){            /* Il y a une chance sur 3 que le survivant lui mette un coup avant de mourir*/
        var isLucky = 0.45                   
        var statutMental = " n'est pas très en forme aujourd'hui mais pense pouvoir faire quelque chose."
    }

    
    let survivant = new survivor(nomSurvivant, c, isLucky, statutMental)
    survivants.push(survivant)            /* je rajoute tous les survivants dans la liste*/
}




console.log("Un tueur en série nommé Jason, est en cavale.")

console.log("Il est caché quelque part en forêt. Une équipe de choc est présente pour le neutraliser.")

console.log("Aujourd'hui les 5 personnes qui vont faire équipe pour vaincre Jason sont")

console.log(" ")

console.log(survivants[0].name + " qui est " + survivants[0].characteristic + survivants[0].status)

console.log(survivants[1].name + " qui est " + survivants[1].characteristic + survivants[1].status)

console.log(survivants[2].name + " qui est " + survivants[2].characteristic + survivants[2].status)

console.log(survivants[3].name + " qui est " + survivants[3].characteristic + survivants[3].status)

console.log(survivants[4].name + " qui est " + survivants[4].characteristic + survivants[4].status)


while (jason.pv > 0 || survivants.length > 0){
    console.log(" ")
    console.log("Jason va attaquer un survivant")
    jason.attackSurvivor(survivants)
    if (jason.pv <= 0) {
        console.log("Les survivants ont tué Jason et rentrent chez eux")
        let survivantPerdu = 5 - survivants.length
        console.log("Mais ils ont quand même perdu " + survivantPerdu + " survivant(s) sur 5")
        console.log(survivantsMorts)
        break
        
    } if (survivants.length <= 0) {
        console.log("Jason a tué tous les surviavnts")
        let pvRestant = 100 - jason.pv
        console.log("Ils ont quand même réussi à lui infliger " + pvRestant + " pv de dégats")
        console.log(survivantsMorts)
        break
    } else {
        continue
    }
}
