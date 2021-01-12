function arrayMaximalAdjacentDifference(inputArray) {
    
    let tmp = []
    
    for(let i = 1;i <inputArray.length-1;i++){
        tmp.push(Math.abs(inputArray[i]-inputArray[i-1]))
        tmp.push(Math.abs(inputArray[i]-inputArray[i+1]))
    }
    
    tmp = tmp.sort((a,b)=>a-b)
    
    return tmp[tmp.length-1]

}
