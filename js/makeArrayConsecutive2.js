function makeArrayConsecutive2(statues) {
    let count = 0
    let sorted_statues = statues.sort((a,b)=>a-b)
    let filled_statuses = new Array(sorted_statues[sorted_statues.length-1]-sorted_statues[0])    
    return (filled_statuses.length-sorted_statues.length)+1
}