import {heroData} from "./data";

export function getHeroByIdPromise(heroData, id) {
    let hero = heroData.find(hero => hero.id == id);
    return new Promise(((resolve, reject) => {
        if (hero == null) {
            setTimeout(() => {
                console.log(reject('Hero is null'));
            }, 1500);
        } else {
            setTimeout(() => {
                console.log(resolve(hero));
            }, 1500);
        }
    }));
}


/*
Below is code to help you get the right solution.

const hero2 = getHeroByIdPromise(heroData, 2)
    .then(hero => {
        console.log(`Found the hero with id ${hero.id}`, hero);
    })
    .catch(error => {
        console.log(error);
    });
console.log(`logging hero2 and should be a promise ${hero2}`);


const heroError = getHeroByIdPromise(heroData, 20)
    .then(hero => {
        console.log(`Found the hero with id ${hero.id}`, hero);
    })
    .catch(error => {
        console.log(error);
    });


 */





