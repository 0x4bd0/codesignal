const leastFactorial = n => {
    if(n == 1) return 1
    let count = 1
    let i = 1
    while(n > count){
        count*=i
        i++
    }
    return count
}
