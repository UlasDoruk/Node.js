//let arguments  = process.argv.slice(1)



function area(radius){
    var formulOfArea = Math.PI*(radius**2)
    formulOfArea =  formulOfArea.toFixed(1)
    return console.log(`Radius : ${radius} Area of Circle : ${formulOfArea}`)
}

area(n)

//area(arguments*1)