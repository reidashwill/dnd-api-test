import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Monster } from './../src/bl.js';

$(document).ready(function() {
  

  $('#monster1Button').click(function() {
      
    (async () => {
      let orc = new Monster();
      const response = await orc.orcGrab();
      orc.ac = response.armor_class;
      orc.attackBonus = response.actions[1].attack_bonus;
      orc.hitPoints = response.hit_points;
      orc.damage = 9;
      $('#orcReturn').html("You chose an orc as your champion! Here are its stats!  <li> Armor Class: " + orc.ac + "</li><li>Attack Bonus: " + orc.attackBonus + "</li><li> Hit Points:" + orc.hitPoints);
      orc.attack();
    })();
  });
  $('#monster2Button').click(function () {
    (async () => {
      let dragon = new Monster();
      const response = await dragon.dragonGrab();
      dragon.ac = response.armor_class;
      dragon.attackBonus = response.actions[1].attack_bonus;
      dragon.hitPoints = response.hit_points;
      dragon.damage = 9;
      $('#dragonReturn').html("You chose a Dragon as your champion! Here are its stats!  <li> Armor Class: " + dragon.ac + "</li><li>Attack Bonus: " + dragon.attackBonus + "</li><li> Hit Points:" + dragon.hitPoints);
      dragon.attack();
    })();
  });

});