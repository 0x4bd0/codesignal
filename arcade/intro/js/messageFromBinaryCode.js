function messageFromBinaryCode(code) {
    let result = []
    for(let i = 0; i < code.length ; i=i+8){
        result.push(String.fromCharCode(parseInt(code.slice(i,i+8),2)))
    }
    return result.join('')
  }
  