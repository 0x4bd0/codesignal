const additionWithoutCarrying = (param1, param2) => {
    let data = '';
    while(param1 || param2){
    
        data = (((param1%10)+(param2%10))%10).toString() + data;
        
        param1 = Math.floor(param1/10);
        param2 = Math.floor(param2/10);
    }
    
  return Number(data);
}
