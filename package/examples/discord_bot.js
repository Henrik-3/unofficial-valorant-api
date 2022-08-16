// Discord.js v13.8.0
import { Client, Intents } from "discord.js"
import _VAPI from "unofficial-valorant-api"
const VAPI = new _VAPI()

const client = new Client({
    intents: [ Intents.FLAGS.GUILDS ],
})

client.on("ready", () => console.info(`Bot ${client.user.tag} online.`))

client.on("interactionCreate", async interaction => {
    if (interaction.isCommand()) {
        switch (interaction.commandName) {
            case "mmr": {
                await interaction.deferReply({ ephemeral: true })
                const mmr_data = await VAPI.getMMR(interaction.options.getString("name"), interaction.options.getString("tag"), "na")

                if (mmr_data.error) {
                    return interaction.editReply({
                        content: `Error ${mmr_data.status}: \n\`\`\`${JSON.stringify(mmr_data.error)}\`\`\``
                    })
                }

                interaction.editReply({
                    content: `[${mmr_data.data.currenttierpatched}] - ${mmr_data.data.elo} ELO`,
                })
            }
        }
    }
})

client.login("TOKEN")

//Slash Command Config
/*
[
    {
        "name": "mmr",
        "description": "Returns mmr for a given user",
        "options": [
            {
                "type": 3,
                "name": "name",
                "required": true,
                "description": "Riot Name of the user"
            },
            {
                "type": 3,
                "name": "tag",
                "required": true,
                "description": "Riot Tag of the user"
            }
        ]
    }
]
*/
