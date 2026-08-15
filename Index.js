const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'japanjot2026.aternos.me',
  port: 17556,
  username: 'bot_bhai',
  auth: 'offline'
})

bot.on('login', () => {
  console.log('Bot joined the server!')
})

bot.on('error', console.log)
bot.on('end', () => console.log('Bot disconnected'))
