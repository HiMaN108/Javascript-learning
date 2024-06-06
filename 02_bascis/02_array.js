const mar_her = [ "thor", "ironman", "spiderman"]
const dc_hero = [ "superman", "flase", "batman"]

// mar_her.push(dc_hero);

// console.log(mar_her);

// const allheros= mar_her.concat(dc_hero);

// console.log(allheros);


const all_new_heros= [ ...mar_her, ...dc_hero ]

console.log(all_new_heros);
