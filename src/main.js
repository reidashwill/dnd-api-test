import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Monster } from './../src/bl.js';

$(document).ready(function() {
  

  $('#monster1Submit').click(function() {
      event.preventDeafault();
      if(monsterSelect === "aboleth"){
      let monster1 = 
      }
    (async () => {

      let monster1 = new Monster();
      const response = await mon1.monster1Grab();
      mon1.ac = response.armor_class;
      mon1.attackBonus = response.actions[1].attack_bonus;
      mon1.hitPoints = response.hit_points;
      mon1.damage = 9;
  //     $('#monster1Return').html("You chose an orc as your champion! Here are its stats!  <li> Armor Class: " + orc.ac + "</li><li>Attack Bonus: " + orc`````````````````````.attackBonus + "</li><li> Hit Points:" + orc.hitPoints);
  //     mon1.monster2Attack();
  //   })();
  // });
  // $('#monster2Button').click(function () {
  //   (async () => {
  //     let mon2 = new Monster();
  //     const response = await mon2.monster2Grab();
  //     dragon.ac = response.armor_class;
  //     dragon.attackBonus = response.actions[1].attack_bonus;
  //     dragon.hitPoints = response.hit_points;
  //     dragon.damage = 9;
  //     $('#dragonReturn').html("You chose a Dragon as your champion! Here are its stats!  <li> Armor Class: " + dragon.ac + "</li><li>Attack Bonus: " + dragon.attackBonus + "</li><li> Hit Points:" + dragon.hitPoints);
  //     mon2.monster2Attack();
  //   })();
  // });

});