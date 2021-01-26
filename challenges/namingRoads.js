function namingRoads(roads) {
    
    roads.sort((a,b)=>(a[2] === b[2]) ? 0 : (a[2] < b[2]) ? -1 : 1)
     
     for(let i = 0; i < roads.length-1; i ++) {
       if(roads[i][1] === roads[i+1][0] ||  roads[i][0] === roads[i+1][1])return false
     }
    
     return true
    }