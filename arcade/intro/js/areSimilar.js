function areSimilar(a, b) {
    
    let diff = []
    
    for(let index =0; index < a.length; index++){
     if(a[index] != b[index]){
         diff.push([a[index],b[index]])
     }    
    }
    
    if(diff.length == 0) return true
    if(diff.length < 3) return diff[0].sort().join('') == diff[1].sort().join('')
    return false

}
