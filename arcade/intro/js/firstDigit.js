function firstDigit(inputString) {
    let d = ['0','1','2','3','4','5','6','7','8','9']
    return inputString.split('').find(item=>d.includes(item))
    }
    