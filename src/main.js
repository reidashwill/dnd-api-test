import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Monster } from './../src/bl.js';

// $("#mon1Attk").click(function () {
//   $("#mon1Attk").hide();
//   $(" #mon2Attk").show();
//   // monster1.monster1Attack();
//   // console.log(monster1);
// });


// $("#mon2Attk").click(function () {
//   $("#mon2Attk").hide();
//   $("#mon1Attk").show();
//   // monster2.monster2Attack();
// });

function showMonster1(monster1) {
  $("#monster1Stats").html("You have chosen the " + monster1.name + "! Here are its stats: " + "<li>Armor Class: " + monster1.ac + "</li><li> Attack Bonus: " +  monster1.attackBonus + "</li><li id='monster1Hp'> Hit Points: " + monster1.hitPoints + "</li>" + "<li> Damage: " + monster1.damage + "</li>");
}
function showMonster2(monster2) {
  $("#monster2Stats").html("You have chosen the " + monster2.name + "! Here are its stats: " + "<li>Armor Class: " + monster2.ac + "</li><li> Attack Bonus: " +  monster2.attackBonus + "</li>" + "<li id='monster2Hp'> Hit Points: " + monster2.hitPoints + "</li>" + "<li> Damage: " + monster2.damage + "</li>");
}
$(document).ready(function () {
  $('#monsterSelect').submit(function (event) {
    event.preventDefault();

    let monster1;
    let monster2;
    // monster one api array
    let apiArray1 = [`https://api.open5e.com/monsters/aboleth`, `https://api.open5e.com/monsters/grave-behemoth`, `https://api.open5e.com/monsters/cave-giant`];
    // monster two api array
    let apiArray2 = [`https://api.open5e.com/monsters/young-gold-dragon`, `https://api.open5e.com/monsters/alchemist-archer`, `https://api.open5e.com/monsters/automata-devil`];
    
    $("#mon1Attk").click(function () {
      $("#mon1Attk").hide();
      $(" #mon2Attk").show();
      monster1.monster1Attack(monster2);
      $("#monster2Hp").html("Hit Points: " + monster2.hitPoints);

      if (monster2.hitPoints <= 0){
        $("#p1Win").show();
        $("#mon1Attk").hide();
        $("#mon2Attk").hide();
        $("#playAgain").show();
      }
    });


    $("#mon2Attk").click(function () {
      $("#mon2Attk").hide();
      $("#mon1Attk").show();
      monster2.monster2Attack(monster1);

      $("#monster1Hp").html("Hit Points: " + monster1.hitPoints);
      if (monster1.hitPoints <= 0) {
        $("#p2Win").show();
        $("#mon1Attk").hide();
        $("#mon2Attk").hide();
        $("#playAgain").show();
      }
    });
    // monster 1 options
    if ($("#monster1").val() === "aboleth") {
      (async () => {
        monster1 = new Monster();
        let response = await monster1.monster1Grab(apiArray1[0]);
        monster1.name = response.name;
        monster1.ac = response.armor_class;
        monster1.attackBonus = response.actions[1].attack_bonus;
        monster1.hitPoints = response.hit_points;
        monster1.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster1(monster1);
        $("#mon1Attk").show();
        $("#monsterSelect").hide();   
      })();
    }
    if ($("#monster1").val() === "graveBehemoth") {
      (async () => {
        monster1 = new Monster();
        let response = await monster1.monster1Grab(apiArray1[1]);
        monster1.name = response.name;
        monster1.ac = response.armor_class;
        monster1.attackBonus = response.actions[1].attack_bonus;
        monster1.hitPoints = response.hit_points;
        monster1.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster1(monster1);
        $("#mon1Attk").show();
        $("#monsterSelect").hide();   
      })();
    }
    if ($("#monster1").val() === "caveGiant") {
      (async () => {
        monster1 = new Monster();
        let response = await monster1.monster1Grab(apiArray1[2]);
        monster1.name = response.name;
        monster1.ac = response.armor_class;
        monster1.attackBonus = response.actions[1].attack_bonus;
        monster1.hitPoints = response.hit_points;
        monster1.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster1(monster1);
        $("#mon1Attk").show();
        $("#monsterSelect").hide();   
      })();
    }
    // monster two options
    if ($("#monster2").val() === "youngGoldDragon") {
      (async () => {
        monster2 = new Monster();
        let response = await monster2.monster2Grab(apiArray2[0]);
        monster2.name = response.name;
        monster2.ac = response.armor_class;
        monster2.attackBonus = response.actions[1].attack_bonus;
        monster2.hitPoints = response.hit_points;
        monster2.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster2(monster2);
 
      })();
    }
    if ($("#monster2").val() === "alchemistArcher") {
      (async () => {
        monster2 = new Monster();
        let response = await monster2.monster2Grab(apiArray2[1]);
        monster2.name = response.name;
        monster2.ac = response.armor_class;
        monster2.attackBonus = response.actions[1].attack_bonus;
        monster2.hitPoints = response.hit_points;
        monster2.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster2(monster2);

      })();
    }
    if ($("#monster2").val() === "automataDevil") {
      (async () => {
        monster2 = new Monster();
        let response = await monster2.monster2Grab(apiArray2[2]);
        monster2.name = response.name;
        monster2.ac = response.armor_class;
        monster2.attackBonus = response.actions[1].attack_bonus;
        monster2.hitPoints = response.hit_points;
        monster2.damage = (response.strength + response.actions[1].attack_bonus);
        showMonster2(monster2);
 
      })();
    }
   
    
  });

  
});    
