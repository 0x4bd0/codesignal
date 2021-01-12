function alphabeticShift(inputString) {
    
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('')
    
    return inputString.split('').map(item=>alpha[ alpha.indexOf(item) == 25 ?  0 : alpha.indexOf(item)+1 ]).join('')
    
  }
  