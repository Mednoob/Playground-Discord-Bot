module.exports = {
  name: "kembalikan",
  description: "Mengembalikan member yang keberadaannya dihilangkan",
  alias: [],
  usage: "kembalikan <user>",
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
        description: "Mohon mention/tag user yang ingin di kembalikan keberadaannya"
      }});
      
      if(!user.roles.cache.has("763696376806506526")) return message.channel.send({embed: {
        color: "RED",
        description: "Kamu tidak bisa mengembalikan keberadaan seseorang yang tidak dihilangkan keberadaannya"
      }})
      
      user.roles.remove("763696376806506526").then(() => {
        message.channel.send({embed: {
          color: "GREEN",
          description: `Berhasil mengembalikan keberadaan ${user.user.toString()}`
        }})
      })
      
    }
  }
}