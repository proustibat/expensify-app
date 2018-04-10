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

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher || {};

console.log( `${ publisherName }` ); // Penguin, default: Self-Published





