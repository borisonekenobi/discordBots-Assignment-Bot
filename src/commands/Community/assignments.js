const { mysql } = require('mysql');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('assignments')
    .setDescription('Prints all the assignments from the MySQL db'),
    async execute(interaction, client) {
        await interaction.reply({ content: compileTable() });
    }
}

function compileTable() {
    let config = require('config');

    /*let con = mysql.createConnection({
        host: "ip-address",
        user: "username",
        password: "password"
    });*/

    return '' + config.get('db.port');
}