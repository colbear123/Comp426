/**
 * Course: COMP 426
 * Assignment: a04
 * Author: <Collin Kilmartin-ckilmart>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {

   
    let renderoutput =`<div> <img src=${hero.img}> </img>  <button type="button">Edit</button>
 <p style="background-color:${hero.color}; font-size 275%"> ${hero.name} </p>
 <span style = "background-color:${hero.backgroundColor}">${hero.first}  ${hero.last}</span>
 <p style = "background-color:${hero.backgroundColor}">${hero.description}</p>
 <p style = "background-color:${hero.color}">First Apperance:</p> 
 <p style = "background-color:${hero.color}"> ${hero.firstSeen.getMonth()}/${hero.firstSeen.getDate()}/${hero.firstSeen.getFullYear()}</p>
 </div>`;
 


    return renderoutput;
};




/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
  
    //  <div>${hero.name}</div>
    //
    let renderHout =  `<form> <textarea <input type = "text"> ${hero.name}</input> </textarea>
    <button type = "submit" name = "submit">
    <button type = "reset" name = "reset"> </form>
    <textarea <input type = "text"> ${hero.first}</input> </textarea>
    <form> <button type = "submit" name = "submit">
    <button type = "reset" name = "reset"> </form>
    <form> <textarea <input type = "text"> ${hero.last}</input> </textarea>
    <button type = "submit" name = "submit">
    <button type = "reset" name = "reset"> </form>
    <form> <textarea type = "text"> ${hero.description}</textarea>
    <button type = "submit" name = "submit">
    <button type = "reset" name = "reset"> </form>
    <form> <textarea <input type = "date"> ${hero.firstSeen}</input> </textarea>
    <button type = "submit" name = "submit">
    <button type = "reset" name = "reset"> </form>
    <form> <input type = "text"> ${hero.subtitle} </input>
    <input type = "text"> ${hero.color} </input>
    <input type = "text"> ${hero.backgroundColor} </input> </form>`;

   return renderHout;
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return 
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    let heroArr = [];
    for (var i = 0; i < heroes.length; i++) {
        console.log(heroes[i]);
        heroArr[i] = renderHeroCard(heroes[i]);
    }

    // TODO: Append the hero cards to the $root element
    $root.append(heroArr);
    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
    const newwer = renderHeroEditForm(randomHero);
    
    // TODO: Append the hero edit form to the $root element
    $root.append(newwer);
    return $root;
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
