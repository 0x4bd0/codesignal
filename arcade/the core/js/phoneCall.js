function phoneCall(min1, min2_10, min11, s) {
    let mins = 0
    let x = s
    
    while(x>0){
    mins++
    if(mins==1) x = x-min1
    else if(mins>=2 && mins<=10) x = x-min2_10
    else if(mins>10) x = x-min11    
    }
    
    return x>=0 ? mins : mins-1
}