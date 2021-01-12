function depositProfit(deposit, rate, threshold) {
    
    let amount = deposit
    let years = 0
    
    while(amount < threshold){
        amount += amount*rate/100
        years++
    }
    
    return years

}
