function reverseInParentheses(inputString) {
    if(inputString.includes('(')){
        return reverseInParentheses(doMagic(inputString))
    } else {
        return inputString
    }
   }
   
   
   
   function doMagic(inputString){
       let regex = /\(([^()]*)\)/i;
       let firstElem = regex.exec(inputString)[1]
       let result = firstElem.split('').reverse().join('')
       return inputString.replace(regex,result)
   }
   