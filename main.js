


//actual stuff


const Discord = require('discord.js');
const message = require('discord.js/src/client/actions/MessageCreate');
const TOKEN = 'OTc3NTM2MDY3ODI3ODIyNjAy.GvkN4q.9w2UIUci5fKSXQ9h3lGqgsoU5TOfOkEz6gJB_s'
require("dotenv").config()

const prefix = '-'

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [ 
        "GUILDS", 
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ],
});

client.on('ready', () => {
    console.log('An Orange is online')
});

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello")
    } else if (message.content == "ping"){
        message.reply("pong")
    }
})

const welcomeChannelId = "977464931530178610"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(TOKEN)