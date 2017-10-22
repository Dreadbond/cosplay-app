var flingue = {
  ammo: 6,
  target: "0",
}

export function pistol(mess) {
  result =  mess.param + " is not a command for " + mess.from ;
  if(mess.param == "reload" && flingue.ammo != 6) {
    flingue.ammo = 6 ;
    result = "reloading pistol" ;
    console.log(result); 
  }
  if(mess.param == "target") {
    flingue.target = mess.value ;
    result = "target :" + flingue.target ;
    console.log(result);
  }
  if(mess.param == "trigger" && flingue.ammo > 0) {
      if (flingue.ammo){
        flingue.ammo-- ;
        if (flingue.target == "0" || "!vide"){
          result = "Tire dans le vide" ;
          console.log(result);
          }
        else{
          result = "Tire sur" + flingue.target ;
          console.log(result);
        }
      }
    else{
      result = "Tick" ;
      console.log(result);
    }
  }

}