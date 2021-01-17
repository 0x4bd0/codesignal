function newRoadSystem(roadRegister) {
    
    let road = {}
    
    for(let i =0; i < roadRegister.length; i++){
        for(let j =0; j < roadRegister[0].length; j++){
            
            if(roadRegister[i][j]){
                road[i] ? road[i] +=1 : road[i] = 1
                road[j] ? road[j] -=1 : road[j] = -1
            }
        
        }
    }
    
    for(let key in road)
    {
        if(road[key] != 0) return false
    }
    
    return true

}
