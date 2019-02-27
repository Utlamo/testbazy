const Discord = require("discord.js");
const Client = new Discord.Client({disableEveryone: true});
Client.login(process.env.BOT_TOKEN);
var pg = require('pg');
var wynik = "";

Client.on('ready', () => {
    console.log(Client.user.tag + "is online!");
    Client.user.setPresence({ game: { name: 'Drugi Bot☺', type: 0 } });
  });

var tryb = 0;

  Client.on("message", (receivedMessage) => {
        wyciagnij();          
  if(receivedMessage.author == Client.user ) return;}
  receivedMessage.channel.send("Witaj " + receivedMessage.author + " odpowiadam: " + wynik);
);

      
  });



function odpowiedz(){
  Client.on("message", (receivedMessage) => {
    if(tryb !=2 ){
  if(receivedMessage.author == Client.user || tryb ) return;}
  receivedMessage.channel.send("Witaj " + receivedMessage.author + " odpowiadam: " + receivedMessage.content);
});

}





function helpCommand(receivedMessage){ receivedMessage.channel.send("Aby włączyć powtarzanie wpisz \"answer\"\nAby wyłączyć powtarzanie wpisz \"cichaj\"\nAby bot zaczął spamić wpisz \"spam\"\nAby uzyskać pomoc wpisz \"help\""); }
function helpCommand(receivedMessage){  receivedMessage.channel.send("Aby włączyć powtarzanie wpisz \"answer\"\nAby wyłączyć powtarzanie wpisz \"cichaj\"\nAby bot zaczął spamić wpisz \"spam\"\nAby uzyskać pomoc wpisz \"help\""); }




wyciagnij(){
var conString = process.env.CON_STRING;

var client = new pg.Client(conString);
client.connect();

//queries are queued and executed one after another once the connection becomes available
    client.query("CREATE TABLE tabela1 (id BIGSERIAL NOT NULL PRIMARY KEY, firstName VARCHAR(50) NOT NULL, secondName VARCHAR(50) NOT NULL, number1 VARCHAR(50) NULL, number2 VARCHAR(50) NULL UNIQUE);
    client.query("INSERT INTO tabela1(firstName) values($1)", ['John', x]);

wynik = client.query("SELECT * FROM tabela1");
//fired after last row is emitted
// //////////////////////////////////////////////////////////////////////////////////////////////
query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});



//fired after last row is emitted
query.on('end', function() {
    client.end();
});

    
}








