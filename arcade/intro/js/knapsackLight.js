function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
    if(maxW >= weight1+weight2) return value2+value1

    let arr = [{value : value1,
                weight : weight1
                   },
               {value : value2,
                weight : weight2
                   }]
                   
    let clean_data = arr.filter(item=>maxW>=item.weight).sort((a,b)=>a.value>b.value? 1 : -1)
    
    return clean_data.length == 0 ? 0 : clean_data[clean_data.length-1].value
}
