const isPower = n => {
    if(n==1) return true
    for(let i=2; i <=20; i++){
        let b = i*i
        while(b<=n){
            if(b==n) return true
            b*=i        
        }
    }
    return false
} 
