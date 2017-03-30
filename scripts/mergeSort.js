export const arrayMerge = (brokenDownArray, endBrokenDownArray) => {
  let sortedArray = []

  while (brokenDownArray.length && endBrokenDownArray.length) {
    if (brokenDownArray[0] < endBrokenDownArray[0]) {
      sortedArray.push(brokenDownArray.shift());
    } else {
      sortedArray.push(endBrokenDownArray.shift());
    }
  }
  while (brokenDownArray.length) {
    sortedArray.push(brokenDownArray.shift());
  }
  while (endBrokenDownArray.length) {
    sortedArray.push(endBrokenDownArray.shift());
  }

  return sortedArray;
}

export const arrayBreak = (xArray) => {
  if (xArray.length >= 2) {
    var breakPoint = xArray.length / 2
    var endPoint = xArray.length
    var brokenDownArray = xArray.slice(0, breakPoint)
    var endBrokenDownArray = xArray.slice(breakPoint, endPoint)

    return arrayMerge(arrayBreak(brokenDownArray),
    arrayBreak(endBrokenDownArray));


  } else {
    if (xArray.length === 1) {
      return xArray
    }
  }
}
