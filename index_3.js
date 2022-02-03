function daıreAlan(event) {
    let circleArea = (Math.PI)*event**2 
    return console.log(`Daire alanı : ${circleArea.toFixed(1)}`)
}

function daıreCevre(event) {
   let circumReference = (2*Math.PI)*event
   return console.log(`Daire çevresi : ${circumReference.toFixed(1)}`)
}

module.exports =  {
    daıreAlan,
    daıreCevre
}

