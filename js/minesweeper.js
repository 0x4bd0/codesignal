function minesweeper(matrix) {
    
    return matrix.map((row,i)=>{
        let rowData = []
        
        row.map((column,j)=>{            
        let currentSpot = 0
        
            // RIGHT
            if(matrix[i][j+1] !== undefined && matrix[i][j+1]  === true){
                currentSpot++
            }
            
            // LEFT
            if(matrix[i][j-1] !== undefined && matrix[i][j-1]  === true){
                currentSpot++
            }
            
            
            
            if(matrix[i-1] !== undefined){
                // TOP
                if(matrix[i-1][j]  === true) currentSpot++
                // TOP-LEFT
                if(matrix[i-1][j-1]  === true) currentSpot++
                // TOP-RIGHT
                if(matrix[i-1][j+1]  === true) currentSpot++
                
            }
            
            
            
            if(matrix[i+1] !== undefined){
                // BOTTOM
                if(matrix[i+1][j]  === true) currentSpot++
                // BOTTOM-RIGHT
                if(matrix[i+1][j+1]  === true) currentSpot++
                // BUTTOM-LEFT
                if(matrix[i+1][j-1]  === true) currentSpot++
                
            }
               
        
        rowData.push(currentSpot)
        
        })
        
        return rowData
    })

}
