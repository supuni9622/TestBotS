const telegrambot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new telegrambot(token, {polling:true});

bot.on("message",(msg) => {
    if(msg.text.toLowerCase() === "hi") {
        bot.sendMessage(msg.chat.id,`Hi there, ${msg.chat.first_name}`);
    }

    if(msg.text.toLowerCase() === "dice") bot.sendDice(msg.chat.id);

    if(msg.text.toLowerCase() === "poll") {
        const options = ["Python", "Javscript", "C++"];
        bot.sendPoll(msg.chat.id,"what language do you prefer? ",options);
    }
});