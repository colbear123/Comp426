/**
 * Course: COMP 426 KMP
 * Assignment: a05
 * Author: <ckilmart>
 * Collaborator: Connor Monson

/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    
   let renderoutput =`<div id = ${hero.first}>
   <img src = ${hero.img}> <button id = "${hero.id}" class = "editForm" type = "button">Edit</button>
   <p style="background-color:${hero.color}; font-size 275%"> ${hero.name} </p>
   <span style = "background-color:${hero.backgroundColor}">${hero.first}  ${hero.last}</span>
   <p style = "background-color:${hero.backgroundColor}">${hero.description}</p>
   <p style = "background-color:${hero.color}">First Apperance:</p> 
   <p style = "background-color:${hero.backgroundColor}"> ${hero.firstSeen.toISOString().slice(0,10)}</p>
</div>`




   return renderoutput;
};
/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    
    
    let renderHout =`<form class = "former" id = ${hero.last}>
    <div class = "field">
    <label class = "label">Hero Name</label>
    <div class = "control">
    <input type = "text" value ="${hero.name}" name = "heroname">
    </div> </div>
    <div class "field">
    <label class = "label">First Name</label>
    <div class = "control">
    <input class = "input" value="${hero.first}" name = "herofirst">
    </div> </div>
    <div class "field">
    <label class = "label">Last Name</label>
    <div class = "control">
    <input class = "input" value="${hero.last}" name = "herolast">
    </div> </div>
    <div class "field">
    <label class = "label">Description</label>
    <div class = "textarea">
    <textarea class = "input" name= "description">${hero.description}</textarea>
    </div> </div>
    <div class "field">
    <label class = "label">Date</label>
    <div class = "date">
    <input type = "date" name = "firstSeen" id = "date-input" value = ${hero.firstSeen.toISOString().slice(0,10)}>
    </div>  </div>
   <button id = "${hero.id}Setter1" class = "submitForm" type = "submit">Submit</button>
   <button id = "${hero.id}Setter2" class = "cancelForm" type = "cancel">Cancel</button>
   </form>`;

    return renderHout;

};

/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 *  @param event The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
  var curr = event.target.id;
  var found = heroicData.find(function(element) {
      return element.id == curr;
  });
  $('#' + found.first).replaceWith(renderHeroEditForm(found))
  $('.submitForm').on('click', handleEditFormSubmit);
  $('.cancelForm').on('click', handleCancelButtonPress);

};
/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
  var curr = event.target.id;
  var found = heroicData.find(function(element) {
      return element.id+"Setter2" == curr;
  });
  $('#' + found.last).replaceWith(renderHeroCard(found));
  $('.editForm').on('click', handleEditButtonPress);

};


/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    let curr = event.target.id;
    var found = heroicData.find(function(element) {
        return element.id+"Setter1" == curr;
    });
   let currCard = $(event.target.closest('.former')).serializeArray();

   let tempHolder= found.last;

   var newDate = new Date(currCard[4].value);
    
   if(newDate.getMonth() >= 3 && newDate.getMonth() <= 8) {
       newDate.setHours(newDate.getHours()+4);
   }
   else {
       newDate.setHours(newDate.getHours()+5);
   }
   console.log(newDate)
    
found['name'] = currCard[0].value;
found['first'] = currCard[1].value;
found['last'] = currCard[2].value;
found['description'] = currCard[3].value;
found['firstSeen'] = newDate;

$('#' + tempHolder).replaceWith(renderHeroCard(found));
$('.editForm').on('click', handleEditButtonPress);
};

/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    const $root = $('#root');
   
    // TODO: Generate the heroes using renderHeroCard()
    let heroArr = [];
    for (var i = 0; i < heroes.length; i++) {
        console.log(heroes[i]);
        heroArr[i] = renderHeroCard(heroes[i]);
    }

    // TODO: Append the hero cards to the $root element
    $root.append(heroArr);

    $('.editForm').on('click',handleEditButtonPress);
    $('.cancelForm').on('click',handleCancelButtonPress);
    $('.submitForm').on('click',handleEditFormSubmit);
};

$(function() {
    loadHeroesIntoDOM(heroicData);
});
   
   
   
