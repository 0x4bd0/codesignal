const isSmooth = arr => {
    
    if(arr[0] != arr[arr.length-1]) return false
    let m
    
    if(arr.length%2==0){
        m = arr[arr.length/2] + arr[arr.length/2 -1]
    } else {
        m = arr[Math.floor(arr.length/2)]
    }
    
    return arr[0]==m
    
}