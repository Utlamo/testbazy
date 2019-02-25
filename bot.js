const Discord = require("discord.js");
const Client = new Discord.Client({disableEveryone: true});
Client.login(process.env.BOT_TOKEN);

Client.on('ready', () => {
    console.log(Client.user.tag + "is online!");
    Client.user.setPresence({ game: { name: 'Drugi Bot☺', type: 0 } });
  });

var tryb = 0;

  Client.on("message", (receivedMessage) => {
  if(receivedMessage.content.toString()=="answer") tryb = 0;
  if(receivedMessage.content.toString()=="cichaj") tryb = 1;
  if(receivedMessage.content.toString()=="help") helpCommand(receivedMessage);
  if(receivedMessage.content.toString()=="spam") tryb = 2;

  });
if(tryb == 0 || tryb == 2 ) odpowiedz();


function odpowiedz(){
  Client.on("message", (receivedMessage) => {
    if(tryb !=2 ){
  if(receivedMessage.author == Client.user || tryb ) return;}
  receivedMessage.channel.send("Witaj " + receivedMessage.author + " odpowiadam: " + receivedMessage.content);
});

}





function helpCommand(receivedMessage){  receivedMessage.channel.send("Aby włączyć powtarzanie wpisz \"answer\"\nAby wyłączyć powtarzanie wpisz \"cichaj\"\nAby bot zaczął spamić wpisz \"spam\"\nAby uzyskać pomoc wpisz \"help\""); }
