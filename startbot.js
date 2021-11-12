let bot = require('./config.js');
let WhatsNumberGameService = require('./game1.js');

let startbot = () =>
{
   const commands = [
      {command: '/start', description: 'Приветствие'},
      {command: '/info', description: 'Информация о пользователе'},
   ];

   const whatsNumberGameService = new WhatsNumberGameService(commands);

   bot.setMyCommands(commands)
   
   bot.on('message', async msg => 
   {
      const text = msg.text;
      const chatId = msg.chat.id;

      if (!commands.some(c => c.command == text))
         return bot.sendMessage(chatId, `Команда не найдена`);
      
      if(text === '/start')
      {
        await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/uShibaFinance/gif/1.gif')
        return bot.sendMessage(chatId, `Добро пожаловать в телеграмм бот`);
      }

      if (text === '/info')
      {
         return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
      }
   })
}


module.exports = startbot;
