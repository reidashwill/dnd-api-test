import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Monster } from './../src/bl.js';

$(document).ready(function() {
  

  // $('#randomCocktail').click(function() {
      
  (async () => {
    let orc = new Monster();
    const response = await orc.orcGrab();
    orc.ac = response.armor_class;
    orc.attackBonus = response.actions[1].attack_bonus;
    orc.hitPoints = response.hit_points;
    orc.damage = 9;
    console.log(orc);
  })();
      
  (async () => {
    let dragon = new Monster();
    const response = await dragon.dragonGrab();
    dragon.ac = response.armor_class;
    dragon.attackBonus = response.actions[1].attack_bonus;
    dragon.hitPoints = response.hit_points;
    dragon.damage = 9;
    console.log(dragon);
  })();

  // function getElements(response) {
  //   $('#orcReturn').html("");
  // }

  // $('#mosterArena').html(`${response.drinks[0].strDrink}`);
  // if(`${response.drinks[0].strIngredient1}` && `${response.drinks[0].strMeasure1}` !== "null"){
  //   $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure1}` + " " + `${response.drinks[0].strIngredient1}`);
  // }
  // });
});