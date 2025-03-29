fetch("https://meowfacts.herokuapp.com/")
  .then((response) => response.json() )
  .then((responseData) => {
    console.log(responseData);
    responseData.data.forEach( item => {
      console.log(item);
    });
  })
  .catch( (err) => console.log(err));