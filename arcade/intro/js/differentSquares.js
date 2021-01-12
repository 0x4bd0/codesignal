function differentSquares(matrix) {
    let tmp = []
    
    for(let i =0 ; i < matrix.length-1; i++){
        for(let j =0 ; j < matrix[i].length-1; j++){
            let square = matrix[i][j]+""+matrix[i][j+1]+""+matrix[i+1][j]+""+matrix[i+1][j+1]
            if(!tmp.includes(square)) tmp.push(square)
       }
    }
    
    return tmp.length
    
   }
   