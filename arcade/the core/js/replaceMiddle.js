const replaceMiddle = arr => {
    let m
    let l = arr.length/2
    let r = arr.length/2 -1
    
    if(arr.length%2==0) m = arr[l] + arr[r]
    else return arr
    
    arr.splice(r,2,m)
    return arr
} 
