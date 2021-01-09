function deleteDigit(n) {
    
    let arr = n.toString().split('')
    
    for(let i = 0 ; i < arr.length-1; i++){
            if(arr[i+1]>arr[i]){
                    arr.splice(i,1)
                    return Number(arr.join(''))
                }
    }
    
    arr.splice(arr.length-1,1)
    return Number(arr.join(''))

}
