module.exports = async (Client, message) => {
    const prefix = "pg!"
  
  if(message.content.toLowerCase() == "w") {
    if(!message.channel.id == "736454008998199296") return;
    message.channel.send("<a:pg:775298071227400213><a:wel:761308758919741441><a:kam:761308814263713892><a:pg:775298071227400213>")
  }
  
  if(message.content.includes(`<@&message.guild.id>`) || message.content.includes("@everyone") || message.content.includes("@here")) {
    message.guild.channels.cache.get("772349494973038602").send({embed: {
      color: "RED",
      title: "Everyone Log",
      description: "Someone mentioned Everyone or Here",
      fields: [{
        name: "Author",
        value: message.author.toString(),
        inline: true
      }, {
        name: "Channel",
        value: message.channel.toString(),
        inline: true
      }, {
        name: "Content",
        value: message.content,
        inline: false
      }]
    }})
  }
  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  if(!message.content.startsWith(prefix)) return;
  
  try {
    const file = Client.commands.get(cmd) || Client.aliases.get(cmd)
    if(!file) return;
    
    file.run(Client, message, args)
  } catch (error) {
    
  }
}