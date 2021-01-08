function digitDegree(n) {
    let keep_going = true
    let count = 1
    let tmp = n
    
    if(tmp <= 9) return 0
    
    while(keep_going){
    
    tmp = tmp.toString().split('').map(Number).reduce((a,b)=>a+b)
    
     if(tmp > 9){
         count++
     } else {
         keep_going = false
     }
        
    }
    
    return count

}
