const circleOfNumbers = (n, firstNumber) => {
    let x = Math.floor(n/2)
    if(firstNumber < x)
      return firstNumber + x
    else if(firstNumber > x)
      return firstNumber - x
    else 
      return 0
}