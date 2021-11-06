const TelegramBot = require('node-telegram-bot-api');

const token = '2102762068:AAEc1IDyZ8UajTAOpnMtS1TLbQbZ9mW5DNI';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => 
{
   const {id: id, first_name: UserName} = msg.chat;

   if (/Привет/gi.test(msg.text))
   {
      bot.sendMessage(id, `Привет ${UserName}`);
   }
});