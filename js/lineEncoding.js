function lineEncoding(s) {
    let arr = s.split('')
    let result = []
    let count = 1
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==arr[i+1]){
            count++
        } else {            
            if(count==1){ result.push(arr[i]) } else { result.push(count+arr[i]) }
            count = 1
        }
     
    }
    
    return result.join('')

}
