function allLongestStrings(inputArray) {
    let max_length = 0
    
    inputArray.map(item=>{
        if(item.length>max_length){max_length=item.length}
    })
    
    return inputArray.filter(item=>item.length==max_length)

}
