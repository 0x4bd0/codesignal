function isAdmissibleOverpayment(prices, notes, x) {
    
    let tmp = prices.map((item,i)=>{
        let perc = notes[i].match(/\d+/g)
        
        if(!perc){
            return 0
        }
        
       let upOrDown = notes[i].split(' ')[1]
       let reverse = Number(perc.join('.'))
       
       if(upOrDown == "higher"){
         return item - Number((item/((100+reverse)/100)).toFixed(4))
       }
       
       return item - Number((item/((100-reverse)/100)).toFixed(4))
 
 
    })
    
    let res = tmp.reduce((a,b)=>a+b)   
    
    return x >= res
 
 }
 