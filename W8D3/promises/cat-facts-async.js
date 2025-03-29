async function getCatFacts() {
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const responseData = await response.json();
  
    console.log(responseData);
    responseData.data.forEach( item => {
      console.log(item);
    });
  } catch (err) {
    console.log(err);
  }

}

getCatFacts();