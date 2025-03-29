// index.js

fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => response.json())
  .then((data) => {

  data.forEach((launchObj) => {
    console.log(launchObj.name);
  });

}).catch((err) => console.log(err));
