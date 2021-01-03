function matrixElementsSum(matrix) {
    
    let total = 0
    
    if(matrix.length == 1) {
        return matrix[0].reduce((a,b)=>a+b)
    }
    
     
     for(let i = matrix.length-1; i>=1; i--){
                   
         for(let j = 0; j < matrix[i].length; j++){
             if( matrix[i-1][j] !== 0 && matrix[0][j] !== 0){
                 total = total + matrix[i][j]
             }
         }
         
     }
     
     let top_floor = matrix[0].reduce((a,b)=>a+b);
     return total+top_floor
    }
    