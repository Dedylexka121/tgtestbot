
let bot = require('./config.js');
const whatsNumberGame = require('./whatsnumbergame');
let gameOptions = require('./buttons.js').gameOptions;
let againOptions = require('./buttons.js').againOptions;

module.exports = function(commands) {

   commands.push({command: '/game', description: 'Игра в угадывание числа'});
   
   this.start = async function start(chatId)
   {
      await bot.sendMessage(chatId, 'Сейчас я загадаю число от 1 до 6, а ты попробуешь его угадать!');
      whatsNumberGame.start();
      await bot.sendMessage(chatId, 'Угадывай', gameOptions);
   }

   this.init = function init()
   {
      bot.on('message', async msg => 
      {
         const text = msg.text;
         const chatId = msg.chat.id;
         
         if (text === '/game')
         {
            return this.start(chatId);
         }
      });

      bot.on('callback_query', async msg =>
      {
         const data = msg.data;
         const chatId = msg.message.chat.id;
         console.log(data);
         if (data === 'again')
         {
            return this.start(chatId);
         }
   
         if(whatsNumberGame.try(data))
         {
            return bot.sendMessage(chatId, `Поздравляю, ты отгадал число ${data}`, againOptions)
         }
         else
         {
            return bot.sendMessage(chatId, `К сожалению, ты не отгадал число, правильное число было - ${whatsNumberGame.number}`, againOptions)
         }
      })
   }

   this.init();
}
