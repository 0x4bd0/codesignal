function shapeArea(n) {
    
    let res = 0
    
    for(let i = n-1; i >= 1;i--){
        res = res+i
    }
    
  return (res*4)+1
    
}