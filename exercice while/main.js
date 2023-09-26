let a = 3
while (a < 9) {
    a += 1
    if (a===8){
        console.log("a est arrivé à 8 !!! OMG")
        break
    }

    if (a===7){
        continue
    }
    console.log(a)
}
