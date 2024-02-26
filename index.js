const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }

  message.reply({
    content: "Hi, I'm a Bot",
  });
});

client.on("interactionCreate", async (interaction) => {
  console.log(interaction);
  interaction.reply("Pong");
});

client.login(
  "MTIxMTYyOTYzODU1MjY1Mzg1NQ.GWMyru.HmEZ0JCG_7LTodSk23DcavJndCwSzL2dcnpLfA"
);
