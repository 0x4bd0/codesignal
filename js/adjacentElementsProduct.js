function adjacentElementsProduct(inputArray) {
    
    let most = Number.NEGATIVE_INFINITY
    
    for(let i=0;i<=inputArray.length-2;i++){
        console.log(inputArray.slice(i,i+2))
        
        let product = inputArray.slice(i,i+2).reduce((a,b)=>a*b)
        
        if(product > most){
            most = product
        }

    }
    
    return most

}