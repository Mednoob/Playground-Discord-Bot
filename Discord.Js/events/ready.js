module.exports = async (Client) => {
    console.log(`${Client.user.tag} sudah siap!`)
  
  Client.channels.cache.get("736456502273114192").messages.fetch()
  
  const status = [
    `zyxwvutsrqponmlkjihgfedcba`, 
    `abcdefghijklmnopqrstuvwxyz`
  ]
  
  setInterval(() => {
    const num = Math.floor(Math.random() * status.length)
    
    Client.user.setActivity(status[num], {type: "PLAYING"})
  }, 60000)
}