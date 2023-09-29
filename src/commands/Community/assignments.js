const mysql = require('mysql2');
const config = require('config');
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
    let con = mysql.createConnection({
        host: config.host,
        user: config.username,
        password: config.password
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM tasks", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });

    return '' + config.get('db.username');
}