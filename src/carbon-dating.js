const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(num = undefined) {
  if (!num || typeof num !== 'string') return false
  const floatingNum = parseFloat(num)
  if (isNaN(floatingNum) || floatingNum > MODERN_ACTIVITY || floatingNum <= 0)
    return false
  const condition = Math.log(2).toFixed(3)
  const k = condition / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(MODERN_ACTIVITY / floatingNum) / k)
}
