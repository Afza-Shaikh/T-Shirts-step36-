let sizeofShirt: string[] = ['small','medium','large']
let shirt1 = "This is for casual wearing"
let shirt2 = "This is for formal wearing"
let shirt3 = "This is for party wearing"

function make_tshirt(){
    let simplefunction = `This is a ${sizeofShirt[1]} shirt, and ${shirt3}`
    console.log(simplefunction)
    return simplefunction

}

let response = make_tshirt()
console.log(response)