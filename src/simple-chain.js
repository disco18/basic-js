const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value == 'undefined') {
      value = '( )'
    } else {
      value = '( ' + value + ' )'
    }
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position < this.getLength()) {
      position -= 1
      this.chain.splice(position, 1)
      return this
    } else {
      this.chain = []
      throw new Error('invalid position')
    }
  },
  reverseChain() {
    this.chain.map((_, i, arr) => arr.splice(i, 0, arr.pop()))
    return this
  },
  finishChain() {
    const result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
