import {heroData} from "./data";


export function getHeroByIdCallback(heroData, id, callback) {
let hero = heroData.find(h => h.id == id);
console.log('before');
setTimeout(() => { console.log(callback(hero, id));}, 1500);
console.log('after');
}


/*
Below is code to help you get the right solution.

getHeroByIdCallback(heroData, 2, (hero) => {
    console.log(`Found the hero with id ${hero.id}`, hero);
});

getHeroByIdCallback(heroData, 4, (hero, index) => {
   console.log(`hero with id ${hero.id} found at index ${index}`);
});

 */
