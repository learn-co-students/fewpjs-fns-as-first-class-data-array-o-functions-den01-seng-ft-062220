let wakeDog = function wakeDog(dogName, dogBreed) {
  let newString = `Wake ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(newString);
}

let leashDog = function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(string);
}

let walkToPark = function walkToPark(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(string);
}

let throwFrisbee = function throwFrisbee(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(string);
}

let walkHome = function walkHome(dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(string);
}

let unleashDog = function unleashDog(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`;
  return consoleLogAndReturn(string);
};

function consoleLogAndReturn(string){
  console.log(string);
  return string;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  return routine.map(fn => fn(dogName, dogBreed))
}

