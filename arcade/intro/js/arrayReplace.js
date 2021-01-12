function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    return inputArray.map(item=> item==elemToReplace ? substitutionElem : item)
    
    }
    