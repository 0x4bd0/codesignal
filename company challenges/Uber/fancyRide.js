function fancyRide(l, fares) {
    let types = [ "UberX", "UberXL", "UberPlus", "UberBlack" , "UberSUV" ]
    let DISCOUNT = 20
    for(let i = fares.length-1; i>=0; i--){
        if(DISCOUNT >= l*fares[i]) return types[i]
    }  
    }