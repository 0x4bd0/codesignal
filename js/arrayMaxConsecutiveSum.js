function arrayMaxConsecutiveSum(inputArray, k) {
      
    let sum = 0;
    let j = k;
    while (j--) {
        sum += inputArray[j];
    }
    let topValue = sum;
    for (var i = 1; i <= inputArray.length - k; i++) {
        sum = sum - inputArray[i - 1] + inputArray[i + k - 1];
        if (sum > topValue) {
            topValue = sum;
        }
    }
    return topValue;
    
    
//    let x = 0
    
//    for(let i =0; i <= inputArray.length-k; i++ ){
//        let sum = inputArray.slice(i,i+k).reduce((a,b)=>a+b)
//        if(sum > x) x = sum
//    }
    
//    return x
}
