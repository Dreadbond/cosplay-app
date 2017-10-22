import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Datas } from '../api/collections/messages.js';
import { Tasks } from '../api/collections/tasks.js';
import Task from './Task.jsx';

import { directFB } from '../api/app.js';
var kidiwe = "eh" ;
// https://www.npmjs.com/package/cordova-plugin-bluetooth-serial#read


// App component - represents the whole app
class App extends Component {
command(){
  res = this.props.data
  try {return kidiwe ;}
  catch(e) {}
}

_tast(qsd){
console.log(qsd);
}

BTConnect() {
bluetoothSerial.connect("98:D3:31:FD:2F:53", 
      function(){
        bluetoothSerial.subscribe('\n', function (data) {
          document.getElementById("BTReceive").textContent = data;

          res = directFB(data);
          document.getElementById("console").textContent = res;
        });
    });
}


SendManualIn() {
  mess = document.getElementById("manualInMessage").value;
  console.log(mess)
  res = directFB(mess);
  display = document.getElementById("console").textContent = res;
}

_manualSend(){
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var param = document.getElementById("param").value;
  var value = document.getElementById("value").value;      
  mess = {}
    mess.from = from;
    mess.to = to;
    mess.param = param;
    mess.value = value;      
  res = directFB(mess);
  display = document.getElementById("console").textContent = res;
}

  render() {
      kidiwe = "ah" + Math.random() ;
      return (
        <div className="container">
          <header>
            <h1>Cosplay app</h1>
          </header>
          <br/> <button onClick={this.BTConnect}>Connect</button>

            {/* <br/> <button onClick={this.SendManualIn}>Test</button> 
            <br/>
              <textarea id='manualInMessage' rows="3" cols="50">
                {
                  '{"to": "!11","from": ":grimoire","param": "fire","value": "1"}'
                }
              </textarea> */}

                Console : 
                <br/>in :<div id='BTReceive'></div>
                <br/>résultat :<div id='console'></div>

            
            <div id="manual-send">
            <br/>
            Commande des objets
            <br/>
            <button onClick={this._manualSend}>Send</button>
              <select id="from" defaultValue="!11">
                <option value="!11">!11</option> 
              </select>

              <select id="to" defaultValue=":hub">
                <option value=":hub">Hub</option> 
                <option value=":pistol" >Pistol</option>
                <option value=":wizbla">Wizbla</option>
                <option value=":glove">Gant</option>
                <option value=":grimoire">Grimoire</option>
              </select>

              <select id="param" defaultValue="beenShot">
                <option value="poisoned">poisoned</option>
                <option value="onFire" >onFire</option>
                <option value="beenShot" >beenShot</option>
                <option value="shield" >shield</option>
                <option value="shieldShot" >shieldShot</option>
                <option value="healed" >healed</option>
                <option value="health" >health (at)</option>
                <option value="shootFB" >shootFB</option>
                <option value="sightFB" >sightFB</option>
                <option value="!sightFB" >!sightFB</option>
              </select>

              <input id="value" type="number" defaultValue="1"></input>
            </div>

        </div>
      );
  }
}
App.propTypes = {
//   tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    data: "sqdhéhéhéhé",
  };
}, App);


Meteor.methods({
  test(mess){
    console.log(mess);
  },

  sendHub(data) {
    bluetoothSerial.write(data);
  }
});