const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;


client.on('ready', () => {
    console.log('Bot is online!');
})

client.login(token);