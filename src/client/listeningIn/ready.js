const Guild = require('../../database/Schemas/Guild')
const SLEEP = async () => {
  return Number((Math.random() * (60 - 30) + 500).toFixed(0) + "000");
};

module.exports = class {
    constructor(client) {
        this.client = client
    }

    async run () {
      console.log()
    }
}