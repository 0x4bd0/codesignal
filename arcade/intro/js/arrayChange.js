function arrayChange(inputArray) {
    let total = 0
  
  
     for(let i = 1; i < inputArray.length ; i++){
         if(inputArray[i]<=inputArray[i-1]){
             let diff = inputArray[i-1] - inputArray[i] +1
             inputArray[i] += diff
             total += diff
         }
     }
     
      return total
 
 }
    