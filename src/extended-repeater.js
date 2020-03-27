module.exports = function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
    if (typeof str !== 'string') str += ''

    if (isNaN(additionRepeatTimes)) {
        additionRepeatTimes = 0
    }
    if (isNaN(repeatTimes)) {
        repeatTimes = 0
    }
    repeatTimes = +repeatTimes
    additionRepeatTimes = +additionRepeatTimes

    let result = ''
    let firstResult = ''
    if (typeof addition !== undefined) {
        firstResult += addition
        if (additionRepeatTimes) {
            for (let i = 1; i < additionRepeatTimes; i++) {
                firstResult += additionSeparator + addition
            }
        }
    }

    firstResult = str + firstResult
    result = firstResult
    if (repeatTimes) {
        for (let i = 1; i < repeatTimes; i++) {
            result += separator + firstResult
        }
    }

    return result
};
