const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function getDirections( step, callback, errorCallback ) {
  console.log( directions[step] );
  // if step does not exist, print an error
  if (!directions[step]) {
    errorCallback('404 Step not found');
  } else {
    callback();
  }
}

getDirections(0, () => {
  getDirections(1, () => {
    getDirections(10, () => {
      
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err) );