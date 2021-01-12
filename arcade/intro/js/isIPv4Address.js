function isIPv4Address(inputString) {
    
    let arr = inputString.split('.')

    if(arr.length !== 4) return false
    
    return !arr.some(item=> (item[0] == 0 && item.length > 1) || item.length == 0 || isNaN(item) || item > 255)
        
}
