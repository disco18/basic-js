module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) return false
        let depth = 0
        arr.forEach(elem => {
            if (Array.isArray(elem)) {
                depth = Math.max(this.calculateDepth(elem), depth)
            }
        })
        return depth + 1
    }
};