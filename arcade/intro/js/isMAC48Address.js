function isMAC48Address(inputString) {
    let regx = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/
    return regx.test(inputString)
    }
    