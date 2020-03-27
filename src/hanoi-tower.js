module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turnsPerSec = turnsSpeed / 3600
    const turns = Math.pow(2, disksNumber) - 1
    const seconds = turns / turnsPerSec
    return {
        seconds: seconds,
        turns: turns
    }
}