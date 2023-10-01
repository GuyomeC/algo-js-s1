class perso {
    constructor(name,pv){
        this.name = name
        this.pv = pv
    }

    trajet(music){
        let redLight = 0
        let nbrTaxi = 0
        while (redLight < 30 || this.pv > 0) {
            redLight += 1
            console.log(" ")
            console.log(this.name + " arrive au feu rouge n° " + redLight)
            let nbrRedLight = 30 - redLight
            console.log("Il reste " + nbrRedLight + " feux rouges.")  
            let actualMusic = Math.floor(Math.random() * music.length)
            if (actualMusic >= 1){
            console.log("c'est la musique " + music[actualMusic] + " et tout va bien car il aime bien l'écouter")
            } else {
                console.log("c'est la musique " + music[actualMusic])
                this.pv -= 1
                nbrTaxi += 1
                console.log("Fou de rage à cause de cette musique il sort et appelle un autre taxi")
            if (this.pv === 0){
                console.log(this.name + " n'en peut plus et explose de rage à cause de cette musique " + actualMusic)
                console.log(" ")
                console.log("Il a utiliser " + nbrTaxi + " taxis dans tout son trajet")
                break
            }
              
            }
            if (redLight === 30){
                console.log(this.name + " est rentré chez lui tranquillement avec " + this.pv + " points de santé mentale")
                console.log(" ")
                console.log("Il a utiliser " + nbrTaxi + " taxis dans tout son trajet")
                break
            }
                
            }

            if (redLight >= 30){
                
            }


        }
    }


let john = new perso('John', 10)
let radio = ["Annissa - Wejdene", "Zipette - Ziak", "Sprinter - Central Cee", "Paint the town red - Doja Cat", "Coco - Lorenzo"]

console.log(john)
console.log(radio)

john.trajet(radio)

