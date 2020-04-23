import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Monster } from './../src/bl.js';

$(document).ready(function() {
  let orc = new Monster;
  let dragon = new Monster;
  orc.orcGrab();
  dragon.dragonGrab();
  console.log(dragon);

  $('#randomCocktail').click(function() {
      
    // (async () => {
    //   let orc = new Monster();
    // const response = await orc.orcGrab();
    // getElements(response);
    // })();

    // function getElements(response) {
    //   $('#orcReturn').html("");
    // }

    // $('#mosterArena').html(`${response.drinks[0].strDrink}`);
    // if(`${response.drinks[0].strIngredient1}` && `${response.drinks[0].strMeasure1}` !== "null"){
    //   $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure1}` + " " + `${response.drinks[0].strIngredient1}`);
    // }
  });
});