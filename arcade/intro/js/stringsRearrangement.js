function stringsRearrangement(inputArray) {
        
    let combinations = getArrayMutations(inputArray)
    
    return combinations.some(comb=>{
        
        let tmp_arr = []
          for(let j = 0; j < comb.length-1;  j++){
              
            if(comb[j] == comb[j+1]) return false

              
             let current = comb[j].split('')
             let nextItem = comb[j+1].split('')
             
             for(let x = 0; x < current.length; x++){
                 
                if(current[x] !== nextItem[x]){
                    tmp_arr.push(nextItem[x])
                }
             }

          }
          
          if(tmp_arr.length === comb.length-1){
              return true
          }
          
          return false
          
          
    })

    return false

}


function getArrayMutations(arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
  }

  return perms
}