function longestWord(text) {
    return text.match(/[a-zA-Z]+/g).sort((a,b)=>a.length-b.length).pop()
   }