import { Meteor } from 'meteor/meteor';
import '../imports/api/collections/tasks.js';
import { Datas } from '../imports/api/collections/messages.js';
import '../imports/api/app.js';

Meteor.startup(() => {
  Datas.remove({});

  let messageDef = {
    tag: "def",
    inMessage : "in rien",
    unMessageRead: true,
    inMessageDate: new Date(),
    outMessage : "out rien",
    outMessageRead: true,
    outMessageDate: new Date(),
    BTstatus: "rien",
}

Datas.insert(messageDef);
});
