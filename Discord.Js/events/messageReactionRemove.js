module.exports = async (Client, Reaction, User) => {
    if(User.id == Client.user.id) return;
  switch (Reaction.message.id) {
    case "778976343442456576":
      if(Reaction.emoji.name.includes("👨")) return Reaction.message.guild.member(User.id).roles.remove("761575724548227072");
      break;
    case "778976416749846528":
      if(Reaction.emoji.name.includes("🧑‍🎓")) return Reaction.message.guild.member(User.id).roles.remove("762125546069950494");
      if(Reaction.emoji.name.includes("👨‍💼")) return Reaction.message.guild.member(User.id).roles.remove("762305412241686528");
      break;
    case "778976513000734731":
      if(Reaction.emoji.name.includes("🧍")) return Reaction.message.guild.member(User.id).roles.remove("762124004185604126");
      if(Reaction.emoji.name.includes("👫")) return Reaction.message.guild.member(User.id).roles.remove("762309382427770890");
      break;
    case "778976665489375252":
      if(Reaction.emoji.name.includes("🌃")) return Reaction.message.guild.member(User.id).roles.remove("762006541075087381");
      if(Reaction.emoji.name.includes("🌆")) return Reaction.message.guild.member(User.id).roles.remove("762008215307157515");
      if(Reaction.emoji.name.includes("🌇")) return Reaction.message.guild.member(User.id).roles.remove("762006815436439562");
      if(Reaction.emoji.name.includes("🏙️")) return Reaction.message.guild.member(User.id).roles.remove("762010315772002347");
      if(Reaction.emoji.name.includes("🌄")) return Reaction.message.guild.member(User.id).roles.remove("762010400392478741");
      if(Reaction.emoji.name.includes("🏝️")) return Reaction.message.guild.member(User.id).roles.remove("762081887929368576");
      break;
    case "778977345410170911":
      if(Reaction.emoji.id == "761303459588472906") return Reaction.message.guild.member(User.id).roles.remove("762124584874147851")
      else if(Reaction.emoji.id == "761303713053671445") return Reaction.message.guild.member(User.id).roles.remove("762305548220629024")
      else if(Reaction.emoji.name.includes("🫂")) return Reaction.message.guild.member(User.id).roles.remove("767014734913994772")
      break;
    case "779131848910569482":
      if(Reaction.emoji.id == "767019441531256862") return Reaction.message.guild.member(User.id).roles.remove("779931410420596757")
      else if(Reaction.emoji.id == "767019441387995166") return Reaction.message.guild.member(User.id).roles.remove("779931952119021578")
      else if(Reaction.emoji.id == "767019441459429376") return Reaction.message.guild.member(User.id).roles.remove("779932875721932842")
      else if(Reaction.emoji.name.includes("💳")) return Reaction.message.guild.member(User.id).roles.remove("762306902662840360")
      break;
    case "779138059282939915":
      if(Reaction.emoji.id == "761303375857582090") return Reaction.message.guild.member(User.id).roles.remove("779933960296857620")
      break;
  }
}