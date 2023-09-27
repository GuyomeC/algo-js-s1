let a = "Jean"
let b = "Paul"
let c = "Jean"

function checkName (mot1, mot2) {
    if (mot1 === mot2) {
        return true
    } else {
        return false
    }
}

let result =checkName(a,b)
console.log(result)
let result1 =checkName(a,c)
console.log(result1)

function calcul(nbr1,nbr2,nbr3) {
    return nbr1*nbr2-nbr3
}

let un = 3
let deux = 10
let trois = 5
let result2 = calcul(un,deux,trois)

console.log(result2)