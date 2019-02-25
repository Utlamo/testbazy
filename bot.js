const Discord = require("discord.js");
const Client = new Discord.Client({disableEveryone: true});
Client.login(process.env.BOT_TOKEN);

Client.on('ready', () => {
    console.log(Client.user.tag + "is online!");
    Client.user.setPresence({ game: { name: 'BazaByHeroku', type: 0 } });
  });


Client.on("message", (receivedMessage) => {
  if(receivedMessage.content.toString()=="sql") 
  {
const Pool = require('pg').Pool
const pool = new Pool(process.env.JSON)
const getUsers = (request, response) => {
  pool.query(process.env.SQL, (error, results) => {
    if (error) {
      throw error
    }
    receivedMessage.channel.send(response.status(200).json(results.rows));
  })}
}

 

  if(receivedMessage.content.toString()=="help") helpCommand(receivedMessage);

});

Connection conn = DriverManager.getConnection(process.env.DATABASE_URL);



  var sql = "CREATE TABLE tabela1 (id BIGSERIAL NOT NULL PRIMARY KEY, firstName VARCHAR(50) NOT NULL, secondName VARCHAR(50) NOT NULL, number1 VARCHAR(50) NULL, number2 VARCHAR(50) NULL UNIQUE");
client.query(sql);

function helpCommand(receivedMessage){  receivedMessage.channel.send("Aby włączyć powtarzanie wpisz \"answer\"\nAby wyłączyć powtarzanie wpisz \"cichaj\"\nAby bot zaczął spamić wpisz \"spam\"\nAby uzyskać pomoc wpisz \"help\""); }




/*
var pg = require('pg');
var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";

var client = new pg.Client(conString);
client.connect();

//queries are queued and executed one after another once the connection becomes available
var x = 1000;

while (x > 0) {
    client.query("INSERT INTO junk(name, a_number) values('Ted',12)");
    client.query("INSERT INTO junk(name, a_number) values($1, $2)", ['John', x]);
    x = x - 1;
}

var query = client.query("SELECT * FROM junk");
//fired after last row is emitted

query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});



//queries can be executed either via text/parameter values passed as individual arguments
//or by passing an options object containing text, (optional) parameter values, and (optional) query name
client.query({
    name: 'insert beatle',
    text: "INSERT INTO beatles(name, height, birthday) values($1, $2, $3)",
    values: ['George', 70, new Date(1946, 02, 14)]
});

//subsequent queries with the same name will be executed without re-parsing the query plan by postgres
client.query({
    name: 'insert beatle',
    values: ['Paul', 63, new Date(1945, 04, 03)]
});
var query = client.query("SELECT * FROM beatles WHERE name = $1", ['john']);

//can stream row results back 1 at a time
query.on('row', function(row) {
    console.log(row);
    console.log("Beatle name: %s", row.name); //Beatle name: John
    console.log("Beatle birth year: %d", row.birthday.getYear()); //dates are returned as javascript dates
    console.log("Beatle height: %d' %d\"", Math.floor(row.height / 12), row.height % 12); //integers are returned as javascript ints
});

//fired after last row is emitted
query.on('end', function() {
    client.end();
});

*/








