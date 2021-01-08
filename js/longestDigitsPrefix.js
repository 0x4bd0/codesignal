function longestDigitsPrefix(inputString) {
    let d = "0123456789".split('')
    let inputArr = inputString.split('')
    let data = []
    
    for(let i=0; i < inputArr.length; i++){
        if(!d.includes(inputArr[i])) break
        data.push(inputArr[i])
    }
    
    return data.join('')
  }
  