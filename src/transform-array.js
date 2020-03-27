module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('not an array')
    if (!arr.length) return arr

    let transformedArr = []
    const len = arr.length - 1
    for (let i = 0; i <= len; i++) {
        if (arr[i] == '--discard-next') {
            if (i + 1 <= len) {
                i++
            }
        } else if (arr[i] == '--discard-prev') {
            if (i - 1 >= 0) {
                transformedArr.pop()
            }
        } else if (arr[i] == '--double-next') {
            if (i + 1 <= len) {
                transformedArr.push(arr[i + 1])
            }
        } else if (arr[i] == '--double-prev') {
            if (i - 1 >= 0) {
                transformedArr.push(arr[i - 1])
            }
        } else {
            transformedArr.push(arr[i])
        }
    }
    return transformedArr
};
