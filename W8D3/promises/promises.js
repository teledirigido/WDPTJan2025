const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

// This is the definition of a promise inside a function
function getDirection(step) {
  return new Promise( (resolve, reject) => {
    
    // Do something...
    console.log( directions[step] );
    if ( !directions[step]) { 
      reject('Instructions not found'); 
    } else {
      resolve();
    }
  })
}

// This is how we consume
getDirection(0)
  .then( () => { return getDirection(1) })
  .then( () => { return getDirection(2) })
  .then( () => { return getDirection(10) })
  .catch( (err) => {
    console.log(err);
  })