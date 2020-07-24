function wakeDog(dogName, dogBreed) {
  return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(name, breed) {
  return `Walk to the park with ${name} the ${breed}`;
}

function throwFrisbee(name, breed) {
  return `Throw the frisbee for ${name} the ${breed}`;
}

function walkHome(name, breed) {
  return `Walk home with ${name} the ${breed}`;
}

function unleashDog(name, breed) {
  return `Unleash ${name} the ${breed}`;
}

const routine =[wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  return routine.map( stuff => stuff(dogName, dogBreed));
}
