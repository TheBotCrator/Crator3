var Discord = require("discord.js")

exports.run = function(nexus, msg, args) {
	if (msg.member.roles.exists("name", "nexus mod") || msg.member.hasPermission("KICK_MEMBERS")) {
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = nexus.channels.find('name', 'nexus-log');
    if (msg.mentions.users.size < 1) return msg.reply('You must mention someone to kick them.').catch(console.error);
    if (reason.length < 1) return msg.reply('You must supply a reason for the kick.');
    
   

  const embed = new Discord.RichEmbed()
    .setColor(0xEFF741)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${user.tag} (<@${user.id}>)\n\n**Moderator:** ${msg.author.tag}\n**Reason:** ${reason}`);
  return nexus.channels.get(modlog.id).send({embed});
	} else {
		msg.channel.send("No permission!")
	}
}
