const Discord = require("discord.js");
var mysql = require('pg');
const Client = new Discord.Client({disableEveryone: true});
Client.login(process.env.BOT_TOKEN);

Client.on('ready', () => {
    console.log(Client.user.tag + "is online!");
    Client.user.setPresence({ game: { name: 'BazaByHeroku', type: 0 } });
  });


  if(receivedMessage.content.toString()=="help") helpCommand(receivedMessage);



Connection conn = DriverManager.getConnection(process.env.DATABASE_URL);



  var sql = "CREATE TABLE tabela1 (id BIGSERIAL NOT NULL PRIMARY KEY, firstName VARCHAR(50) NOT NULL, secondName VARCHAR(50) NOT NULL, number1 VARCHAR(50) NULL, number2 VARCHAR(50) NULL UNIQUE");
client.query(sql);

function helpCommand(receivedMessage){  receivedMessage.channel.send("Aby włączyć powtarzanie wpisz \"answer\"\nAby wyłączyć powtarzanie wpisz \"cichaj\"\nAby bot zaczął spamić wpisz \"spam\"\nAby uzyskać pomoc wpisz \"help\""); }
