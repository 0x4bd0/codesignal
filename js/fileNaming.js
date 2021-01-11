function fileNaming(names) {
    
    let res = []
    
    for(let i=0;i < names.length; i++){
        let count =0
        let x =  names[i]
        
        if(res.indexOf(names[i]) !== -1){
            while(res.indexOf(names[i]) !== -1){
                count++
                names[i] = x+"("+count+")"
            }
        }
        
        res.push(names[i])
    }
    
    return res
  
  }
  
  