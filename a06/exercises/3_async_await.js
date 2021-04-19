import {heroData} from "./data";

export function getHeroByIdAsync(heroData, id) {
let heroIDAsync = heroData.find(hero => hero.id == id);
return new Promise(((resolve, reject) => {
    if (heroIDAsync == null) {
        setTimeout(() => {
            console.log(reject('Hero is null'));
        }, 1500);
    } else {
        setTimeout(() => {
            console.log(resolve(heroIDAsync));
        }, 1500);
    }
}));
}



/*
Below is code to help you get the right solution.

async function run() {
    const hero2 = await getHeroByIdAsync(heroData, 2);
    console.log(`Because we are async/awaiting this will run after hero2 is done ${JSON.stringify(hero2, null, 2)}`);

    try{
        const heroError = await getHeroByIdAsync(heroData, 20);
    }catch (error) {
        console.log(error);
    }
}
run();

 */







