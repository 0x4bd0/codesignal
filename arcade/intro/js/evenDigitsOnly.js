function evenDigitsOnly(n) {
    
    return !n.toString().split('').some(item=>item%2 !== 0)

}
