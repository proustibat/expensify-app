// Object destructuring
// ----------------------

// const person = {
//     name: 'Jenni',
//     age: 32,
//     location: {
//         city: 'Paris',
//         temp: 28
//     }
// };
//
// const { name: firstName = 'Jen', age } = person;
// console.log( `${ firstName } is ${ age }.` );
//
// const { city, temp: temperature } = person.location;
// if( city && temperature ) {
//     console.log(`It's ${ temperature } in ${ city }.`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher || {};
// console.log( `${ publisherName }` ); // Penguin, default: Self-Published



// Array destructuring
// ----------------------

// const address = [
//     '1299 S Juniper Street',
//     'Philadelphia',
//     'Pennslyvania',
//     '19147'
// ];
// const [ , city, state = 'New York' ] = address;
// console.log( `You are in ${ city } ${ state }` );

const item = [
  'Coffea (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
];
const [ drink, , price  ] = item;
console.log( `A medium ${ drink } costs ${ price }` );


