function buildPalindrome(st) {
  
    let toMatch = st
    let i = st.length-1
    
    while(toMatch.split('').reverse().join('') != toMatch){
        toMatch = st + st.slice(0,-i).split('').reverse().join('')
        i--
    }
    
    return toMatch
  
  }
  