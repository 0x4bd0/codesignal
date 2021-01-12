function alternatingSums(a) {
    
    let res = [0,0]
    
    for(let i =0; i < a.length; i=i+2){
        res[0] = res[0] + a[i]
    }
    
    for(let i =1; i < a.length; i=i+2){
        res[1] = res[1] + a[i]
    }
    
    return res
  
  }
  