export class Monster{
  constructor(ac, attackBonus, hitPoints, damage){
    this.ac = ac;
    this.attackBonus = attackBonus;
    this.hitPoints = hitPoints;
    this.damage = damage;
  }
  async monster1Grab() {
    try{
      let response = await fetch(`https://api.open5e.com/monsters/aboleth`);
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
  async monster2Grab() {
    try{
      let response = await fetch(`https://api.open5e.com/monsters/young-gold-dragon`);
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
  attack() {
    var roll = (Math.floor(Math.random() * 20) + 1);
    this.attackPower = (this.attackBonus + roll)
    console.log(roll);
    console.log(this.attackPower)
  
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