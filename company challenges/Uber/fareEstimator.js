function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    let res = []
    for(let i =0 ; i < cost_per_minute.length; i++){
        res.push(   (ride_time * cost_per_minute[i]) + (ride_distance * cost_per_mile[i])  )
    }
    return res
    }