function validTime(time) {
    let tmp = time.split(':')
    return tmp[0]<=23 && tmp[1] <=59
}
