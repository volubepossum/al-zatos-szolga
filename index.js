const Heading = require("discord.js");

const Connect = new Heading.Client();
const Token = "oykOiqsrF0zpB0wKBWmjlcyxVk3100vC";
const Prefix = "pls "

Connect.login(Token);
Connect.on("ready",() => {console.log("Üdvözletem nagyuram!");});


                                                                /*///////////////////////////////
                                                                és akkor elkezdődik a nagy kaland
                                                                ///////////////////////////////*/
Connect.on("message", msg =>{
    //console.log(msg.content);
    if (msg.author==="ClydeBot#1") { msg.delete(); }
    if (msg.content.indexOf(Prefix)===0){
        var arg = msg.content.substring(Prefix.length).split(" ");
        var isSetPrefix = true;
    }else {
        var arg = msg.content.split(" ");
    }
    switch(msg.content){
        default:
            if (arg.indexOf("Mi") != -1 && arg.indexOf("van") != -1 && arg.indexOf("van")-arg.indexOf("Mi") === 1){
                switch(new Date().getDay()){
                    case 0:
                        msg.reply("Vasárnap");
                        break;
                    case 1:
                        msg.reply("Hétfő");
                        break;
                    case 2:
                        msg.reply("Kedd");
                        break;
                    case 3:
                        msg.reply("Szerda");
                        break;
                    case 4:
                        msg.reply("Csütörtök");
                        break;
                    case 5:
                        msg.reply("Péntek");
                        break;
                    case 6:
                        msg.reply("Szombat");
                    }
            }else if (arg.indexOf("mi") != -1 && arg.indexOf("van") != -1 && arg.indexOf("van")-arg.indexOf("mi") === 1){
                switch(new Date().getDay()){
                    case 0:
                        msg.reply("vasárnap");
                        break;
                    case 1:
                        msg.reply("hétfő");
                        break;
                    case 2:
                        msg.reply("kedd");
                        break;
                    case 3:
                        msg.reply("szerda");
                        break;
                    case 4:
                        msg.reply("csütörtök");
                        break;
                    case 5:
                        msg.reply("péntek");
                        break;
                    case 6:
                        msg.reply("szombat");
                }
            }else if (arg.indexOf("Ki") != -1) {
                    msg.reply("Te!");
            }else if (arg.indexOf("ki") != -1) {        
                     msg.reply("te!");
             }
    }
    console.log(arg);
    if(isSetPrefix===true){
        switch(arg[0]){
            case "anonim":
                msg.delete();
                var message=[];
                for (i = 1; i<arg.length; i++) {
                    message+=arg[i] + " ";
                }
                msg.channel.send(message);
                break;
            case "admin":
                msg.delete();
                console.log(msg.member.roles.highest.name);
                if (msg.member.roles.highest.name=="Király" || msg.member.roles.highest.name=="legfőbbb bizalmas") {
                    msg.delete();
                    var message=[];
                    for (i = 1; i<arg.length; i++) {
                        message+=arg[i] + " ";
                    }
                    message = "@here a Király szólt hozzátok, íme: " + message;
                    msg.channel.send(message);
                } else {
                    msg.author.send("ehhez neked nincs jogod");
                }
            case "cleanup" :
                msg.delete();
                if (msg.member.roles.highest.name=="Király"){
                    console.log(arg [1])
                    msg.delete()
                    var deletabi = msg.channel.messages.fetch({limit: parseInt(arg[1]) }).then(deletabi => msg.channel.bulkDelete(deletabi))
                    console.log(deletabi);
                    //msg.channel.bulkDelete(deletabi);
                } else {
                    msg.author.send("ehhez neked nincs jogod");
                }
        }
    }
});
