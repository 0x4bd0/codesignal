const magicalWell = (a, b, n) => {
    let total = 0
    for(let i=1; i<=n; i++){
        total+=a*b
        a++
        b++
    }
    return total
}
