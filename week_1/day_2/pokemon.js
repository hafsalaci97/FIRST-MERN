let pokemons = [
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ];

//evenly divisible by 3
// let arr1 = [];
// let result = pokemons.map(function(item){
//     if (item.id%3 == 0){
//         arr1.push(item.id);
//     }
// })
// console.log(arr1);

// fire types
// let arr1 = [];
// let arr2 = [];
// let result = pokemons.map(function(item){
//     arr1 = item.types;
//     for (i=0;i<arr1.length;i++){
//         if(arr1[i] == 'fire'){
//             arr2.push(item.id);
//         }
//     }
    
// })
// console.log(arr2);

//An array of pokemon objects that have more than one type
// let arr1 = [];
// let arr2 = [];
// let result = pokemons.map(function(item){
//     arr1 = item.types;
//         if(arr1.length > 1){
//             arr2.push(item.id);
//         }    
// })
// console.log(arr2);

//An array with just the names of the pokemons

// let arr1 = [];
// let result = pokemons.map(function(item){
//         arr1.push(item.name);
// })
// console.log(arr1);

//an array with just the names of pokémon with an id greater than 99

// let arr1 = [];
// let result = pokemons.map(function(item){
//         if(item.id > 99){
//             arr1.push(item.id);
//         }    
// })
// console.log(arr1);

//an array with just the names of the pokémon whose only type is poison
// let arr1 = [];
// let arr2 = [];
// let result = pokemons.map(function(item){
//     arr1 = item.types;
//         if(arr1.length == 1 && item.types[0]=='poison'){
//             arr2.push(item.id);
//         }    
// })
// console.log(arr2);

//an array containing just the first type of all the pokémon whose second type is "flying"

// let arr1 = [];
// let arr2 = [];
// let result = pokemons.map(function(item){
//     arr1 = item.types;
//         if(arr1.length > 1 && arr1[1] == 'flying'){
//             arr2.push(arr1[0]);
//         }    
// })
// console.log(arr2);

//a count of the number of pokémon that are "normal" type

// let arr1 = [];
// let count = 0;
// let result = pokemons.map(function(item){
//     arr1 = item.types;
//     for (i=0;i<arr1.length;i++){
//         if(arr1[i] == 'normal'){
//             count++;
//         }
//     }
// })
// console.log(count);

