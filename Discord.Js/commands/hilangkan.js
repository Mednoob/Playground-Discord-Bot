module.exports = {
  name: "hilangkan",
  description: "Menghilangkan keberadaan suatu member",
  alias: [],
  usage: "hilangkan <user>",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) {
      message.react("❌")
      message.channel.send({embed: {
        color: "RED",
        description: "Anda tidak memiliki hak untuk melakukan perintah tersebut"
      }})
    } else {
      const user = message.mentions.members.first()
      
      if(!user) return message.channel.send({embed: {
        color: "RED",
        description: "Mohon mention/tag user yang ingin di hilangkan keberadaannya"
      }});
      
      if(user.roles.cache.has("763696376806506526")) return message.channel.send({embed: {
        color: "RED",
        description: "Kamu tidak bisa menghilangkan keberadaan seseorang yang sudah dihilangkan keberadaannya"
      }});
      
      user.roles.add("763696376806506526").then(() => {
        message.channel.send({embed: {
          color: "GREEN",
          description: `Berhasil menghilangkan keberadaan ${user.user.toString()}`
        }})
      })
    }
  }
}