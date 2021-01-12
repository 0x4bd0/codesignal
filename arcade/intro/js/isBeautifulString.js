function isBeautifulString(inputString) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arr = inputString.split('')
    let unique = arr.filter((value, index, self) => self.indexOf(value) === index).sort((a,b)=>alpha.indexOf(a)-alpha.indexOf(b))
            for(let i = unique.length; i > 0 ; i--){
    
                let currentIndex = alpha.indexOf(unique[i])
                let nextIndex = alpha.indexOf(unique[i-1]) 
    
            if(alpha[nextIndex-1] !== undefined && unique.indexOf(alpha[nextIndex-1]) == -1) return false
            
            if(((currentIndex - nextIndex ) >= 1) && ((arr.filter(item=>item==unique[i]).length - arr.filter(item=>item==unique[i-1]).length) > 0)) return false
       
            }
            return true
    }
    