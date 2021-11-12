const whatsNumberGame = {
   number: 0,

   start()
   {
      this.number = Math.floor(Math.random() * 5 + 1);
   },

   try(number)
   {
      return this.number == number;
   }
}

module.exports = whatsNumberGame;