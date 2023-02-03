const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const prefix = '>';

const client = new Client({ intensts: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity(`Testing bot`, { type: "WATCHING"});


})









client.login(""); //discord token here