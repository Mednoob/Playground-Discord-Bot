const Discord = require("discord.js")
const Client = new Discord.Client({fetchAllMembers: true})
const fs = require("fs")

Client.commands = new Discord.Collection()
Client.aliases = new Discord.Collection()

const EventFile = fs.readdirSync("./events")
for(const File of EventFile) {
  const Event = require(`./events/${File}`)
  Client.on(File.split(".")[0], (...args) => Event(Client, ...args))
}

const commandFile = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
commandFile.forEach(file => {
  const command = require(`./commands/${file}`)
  Client.commands.set(command.name, command)
  if(command.alias) {
    command.alias.forEach(alias => {
      Client.aliases.set(alias, command)
    })
  }
})

Client.login(process.env.TOKEN)
