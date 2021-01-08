// THE SIMPLE WAY :  return a[Math.ceil(a.length/2)-1]
function absoluteValuesSumMinimization(a) {
    
    let tmp = []
     
    for(let i = 0; i < a.length; i++){
       let diff = 0
     for(let j = 0; j < a.length; j++){
         diff += Math.abs(a[j] - a[i])
     }
     
     tmp.push({
         elem : a[i],
         value : diff
     })
     
    }
    
    let result = tmp.sort((a,b)=>a.value>b.value ? -1 : b.value > a.value ? 1 : 0)
    
    result = result.filter(item=>item.value == result[result.length-1].value)
    
    return result.length > 1 ? result.sort((a,b)=>a.elem>b.elem ? 1 : b.elem > a.elem ? -1 : 0)[0].elem : result[0].elem

}

