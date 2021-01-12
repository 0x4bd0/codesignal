function extractEachKth(inputArray, k) {    
    return inputArray.filter((item,index)=>(index+1)%k!==0)
}
