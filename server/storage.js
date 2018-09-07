const storage = require('node-persist');

(async () => {
  await storage.init({dir: 'persist', logging: false})
})()

module.exports = storage
