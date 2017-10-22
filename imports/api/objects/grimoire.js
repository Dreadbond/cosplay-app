var grim = {
    actualSpell: [],
    spellA: ["fire", "shield", "heal"],
    spellB: ["shield", "fire", "heal"],
    spellC: ["heal", "fire", "shield"],
}


export function grimoire(mess) {
    result =  mess.param + " is not a command for " + mess.from ;
    grimoire.oldTimeout ;
    if (mess.param == "fire" || "shield" || "heal"){
        grim.actualSpell.push(mess.param);
        result = grim.actualSpell ;
        nextReset() ;
      }

    function nextReset() {
        clearTimeout(grimoire.oldTimeout) ;
        grimoire.oldTimeout = setTimeout(
            ()=> {
            grim.actualSpell = [] ;
            Meteor.call('test', "raz actualSpell grimoire");
            },500
        );
    }

}

