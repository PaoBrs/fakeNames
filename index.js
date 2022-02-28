const { faker } = require('@faker-js/faker');
const fs=require('fs');

let strNames = "";
for ( let index = 0; index < 1000; index++){
    const randomName = faker.name.findName(); // Rowan Nikolaus
    strNames += (index + 1) + '. ' + randomName + "\n" ;
}

fs.writeFile('./names.txt', strNames, error => {
  if (error)
    console.log(error);
  else
    console.log('El archivo fue creado exitosamente!');
});

console.log('última línea del programa');
