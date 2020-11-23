const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "kick",
  alias: [],
  description: "Kick Member",
  usage: "kick <user> <alasan>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.react("❌")
      message.channel.send({embed: {
        color: "RED",
        description: "Anda tidak memiliki hak untuk melakukan perintah tersebut"
      }});
    } else {
    
      const user = message.mentions.members.first()
    
      if(!user) return message.channel.send({embed: {
        color: "RED",
        description: "Mohon mention/tag user yang ingin di kick"
      }});
      
      if(!args[1] || args[1] == undefined || args[1] == "") return message.channel.send({embed: {
        color: "RED",
        description: "Mohon berikan alasan kick"
      }})
      
      user.user.send({embed: {
        color: "RED",
        title: "Kamu telah dikick",
        description: `**EN:** You are just kicked from \`${message.guild.name}\` by **${message.member.nickname}(${message.author.tag})**
**ID:** Kamu telah dikick dari server \`${message.guild.name}\` oleh **${message.member.nickname}(${message.author.tag})**`,
        fields: [{
          name: "Reason/Alasan",
          value: "```" + args.slice(1, args.length + 1).join(" ") + "```",
          inline: true
        }]
      }}).then(() => user.kick(`Kicked by ${message.author.tag} => ${args.slice(1, args.length + 1).join(" ")}`)).then(() => message.channel.send({embed: {
        color: "GREEN",
        description: `${user.user.toString()} berhasil di kick`
      }}))
    }
  }
}