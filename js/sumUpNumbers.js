function sumUpNumbers(inputString) {
    let d = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g
    let numbers = inputString.match(d)  || []
    return numbers.map(Number).reduce((a,b)=>a+b,0)
}
