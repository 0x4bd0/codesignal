function spiralNumbers(n) {
    let data = new Array(n).fill(0).map(item=>new Array(n).fill(0))
    
    let startRow = 0
    let endRow = n-1
    let startCol = 0
    let endCol = n-1
    let count = 1
    
    while(endRow>=startRow && endCol>=startCol){
        
        for(let i =startCol ; i <= endRow; i++){
            data[startRow][i] = count
            count++
        }
        startRow++
        
        for(let i = startRow; i <= endRow; i++){
            data[i][endCol] = count
            count++
        }
        endCol--
        
       for (let i = endCol; i >= startCol; i--) {
            data[endRow][i] = count
            count++
        }
        endRow--
        
        for (let i = endRow; i >= startRow; i--) {
            data[i][startCol] = count
            count++
        }
        startCol++; 
    }
    
    return data
    }
    