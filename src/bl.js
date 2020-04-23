export class Monster{
  constructor(ac, attackBonus, hitPoints, damage){
    this.ac = ac;
    this.attackBonus = attackBonus;
    this.hitPoints = hitPoints;
    this.damage = damage;
  }
  async monster1Grab(placeholder) {
    try{
      let response = await fetch(placeholder);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
      }else{
        jsonifiedResponse = false;
      }
      
  
      return jsonifiedResponse;
    }catch(error){
      return false;
    }
    
  }
  
  async monster2Grab(placeholder) {
    try {
      let response = await fetch(placeholder);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
        
      }else{
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    }catch(error){
      return false;
    }

  }
  // monster one attack roll
  monster1Attack(monster2) {

    var roll = (Math.floor(Math.random() * 20) + 1);
    this.attackPower = (this.attackBonus + roll);

    if(this.attackPower > monster2.ac){
      monster2.hitPoints -= this.damage;
    }
  }
  // monster two attack roll
  monster2Attack(monster1) {
    var roll = (Math.floor(Math.random() * 20) + 1);
    this.attackPower = (this.attackBonus + roll);

    if(this.attackPower > monster1.ac){
      monster1.hitPoints -= this.damage;
    }
  }
}
// attack bonus
// damage bonus
// damage dice
// armour class
// one action
// 
// 
// 