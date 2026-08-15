const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'japanjot2026.aternos.me',
  port: 17556,
  username: 'bot_bhai',
  auth: 'offline'
})

bot.once('spawn', () => {
  console.log('✅ bot_bhai joined!')
})

bot.on('error', console.error)

bot.on('kicked', reason => {
  console.log('Kicked:', reason)
})

bot.on('end', () => {
  console.log('Disconnected')
})
