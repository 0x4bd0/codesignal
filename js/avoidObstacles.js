function avoidObstacles(inputArray) {
    
    let target = inputArray.sort((a,b)=>a-b)[inputArray.length-1]

    for(let i = 1; i < target ; i++ ){
        let willNotWOrk = inputArray.some(item=>item%i==0)
        if(!willNotWOrk)return i
    }
    
    return target+1
}
