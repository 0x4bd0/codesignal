function sortByHeight(a) {
    let indexes_of_trees = a.map((item,index)=>{
        return {
        index : index,
        data : item   
        }
    }).filter(item=>item.data==-1)
    let sorted_people = a.filter(item=>item!==-1).sort((a,b)=>a-b)
    indexes_of_trees.map(item=>sorted_people.splice(item.index,0,-1))
    return sorted_people
    }
    