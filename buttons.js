const gameOptions = 
{
   reply_markup: JSON.stringify
   (
      {
         inline_keyboard:
         [
            [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'},{text: '3', callback_data: '3'} ],
            [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}]
         ]
      }
   )
}

const againOptions = 
{
   reply_markup: JSON.stringify
   (
      {
         inline_keyboard:
         [
            [{text: 'Играть ещё раз', callback_data: 'again'}],
         ]
      }
   )
}

module.exports.gameOptions = gameOptions;
module.exports.againOptions = againOptions;