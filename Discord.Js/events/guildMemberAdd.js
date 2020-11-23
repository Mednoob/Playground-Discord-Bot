module.exports = async (Client, member) => {
    Client.channels.cache.get("736454008998199296").send({
        embed: {
            color: "GREEN", 
            description: `**Welcome to Playground, ${member.user.toString()}**\n\nJangan lupa isi ${Client.channels.cache.get("736462901573058631").toString()}\nAmbil role di ${Client.channels.cache.get("736456502273114192").toString()}\n\nSemoga betah ya!`,
            image: {
                url: "https://cdn.discordapp.com/attachments/705325989915262987/774316969289449472/ezgif-6-577971ed8392.gif"
            }
        }
    })
}