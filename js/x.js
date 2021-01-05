function palindromeRearranging(inputString) {

        
    var palindrome=true;
    var center=0;
    var array=inputString.split("");
    while(palindrome&&array.length>0){
        if(array.indexOf(array[0],1)>0)
            array.splice(array.indexOf(array[0],1),1);
        else
            if(center<1)
                center++;
            else 
                palindrome=false;
        array=array.slice(1);
        
    }
    return palindrome;
    
    //let y = []
    
   // let arr = inputString.replace(/\s/g,'').toLowerCase().split('')

//    arr.forEach(item=>{
  //       if(arr.filter(x=>x===item).length%2 !== 0) y.push('*')
   // })
    
    
   // return y.length <= 1
}
