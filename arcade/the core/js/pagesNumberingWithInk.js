const pagesNumberingWithInk = (current, numberOfDigits) => {
    
    numberOfDigits -= current.toString().split('').length
    
    nextDigits = (current+1).toString().split('').length
    
    while(numberOfDigits >= nextDigits){
        current++
        numberOfDigits -= nextDigits
        nextDigits = current.toString().split('').length
    }
    
    return current
}