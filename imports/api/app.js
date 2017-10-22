import { Datas } from './collections/messages.js';
import { stats } from './stats/player.js';
import '../ui/App.jsx';
import { grimoire } from './objects/grimoire.js'
import { pistol } from './objects/pistol.js'
import { sword } from './objects/sword.js'
import { wizbla } from './objects/wizbla.js'


export function directFB(mess){
  result = "wat ?";
  try {mess = JSON.parse(mess);}
  catch (e){console.log("Erreur parse:", e)}

  if (mess.from == ":grimoire") grimoire(mess);
  if (mess.from == ":pistol") pistol(mess);
  if (mess.from == ":sword") sword(mess);
  if (mess.from == ":wizbla") wizbla(mess);
  

return result ;
}















// Meteor.methods({
//   datasWrite(mess){
//     Datas.update({tag: "def"},{$set: {inMessage: mess} });
//   },

//   theApp(mess){
//     try {mess = JSON.parse(mess);}
//     catch (e){console.log("Erreur parse:", e)}

//     if (mess.from == ":grimoire") {
//       if (mess.param == "fire"){
//         console.log("grimoire", mess.param);
//         Meteor.call('appDisplay', "grimoire en feu");
//         // return "grimoire en feu" ;
//       }
//       if (mess.param == "shield"){
//         console.log("grimoire", mess.param);
        
//       }
//       if (mess.param == "heal"){
//         console.log("grimoire", mess.param);
        
//       }
    

//     }//grimoire

//   }

// });