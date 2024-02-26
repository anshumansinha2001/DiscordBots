const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIxMTYyOTYzODU1MjY1Mzg1NQ.GWMyru.HmEZ0JCG_7LTodSk23DcavJndCwSzL2dcnpLfA"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1211629638552653855"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
