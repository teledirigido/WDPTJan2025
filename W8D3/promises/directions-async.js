const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function getDirection(step) {
  return new Promise( (resolve, reject) => {
    console.log( directions[step] );
    if ( !directions[step]) { 
      reject('Instructions not found'); 
    } else {
      resolve();
    }
  });
}

async function goToIronhack() {
  try {
    await getDirection(1);
    await getDirection(2);
    await getDirection(3);
    await getDirection(1000);

    console.log('finally...')

  } catch(error) {
    console.log(error);
  }
}

goToIronhack();