const Discord = require("discord.js")
const Client = new Discord.Client({fetchAllMembers: true})
const Express = require("express")
const App = Express()
const fs = require("fs")

App.set("views", "views/pages")
App.set("view engine", "ejs")

App.get("/", (req, res) => res.status(200).render("index", {
  pg: Client.guilds.cache.get("606845228833308672")
}))

App.get("/stafflist", (req, res) => res.status(200).render("stafflist", {
  pg: Client.guilds.cache.get("606845228833308672"),
  ruler: Client.guilds.cache.get("606845228833308672").roles.cache.get("699626936825282671"),
  coruler: Client.guilds.cache.get("606845228833308672").roles.cache.get("742351725767163947"),
  admin: Client.guilds.cache.get("606845228833308672").roles.cache.get("722795415115923506"),
  mod: Client.guilds.cache.get("606845228833308672").roles.cache.get("722795905975189514")
}))

App.get("/discord", (req, res) => res.redirect("https://discord.gg/FcdECGTDN9"))
App.get("/instagram", (req, res) => res.redirect(""))

App.listen(process.env.PORT)

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