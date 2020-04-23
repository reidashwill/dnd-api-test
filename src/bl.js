export class Monster{
  constructor(ac, attackBonus, hitPoints, damage){
    this.ac = ac;
    this.attackBonus = attackBonus;
    this.hitPoints = hitPoints;
    this.damage = damage;
  }
  async orcGrab() {
    try{
      let response = await fetch(`https://api.open5e.com/monsters/orc`);
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
  async dragonGrab() {
    try{
      let response = await fetch(`https://api.open5e.com/monsters/adult-black-dragon`);
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
}
// attack bonus
// damage bonus
// damage dice
// armour class
// one action
// 
// 
// 