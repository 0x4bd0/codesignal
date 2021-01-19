const appleBoxes = k => {
    let y = 0; 
    let r = 0;
    
    while(k){
        (k&1)?(y += k*k):(r += k*k);
        k--;
    }
    
    return r-y;
}