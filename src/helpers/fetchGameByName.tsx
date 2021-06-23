

const fetchGameByName = async (title: string) => {
  let games = null;
  try {
    games = await fetch(`https://api.rawg.io/api/games?key=27d32b9c9c7e448d948f1539a020235e&search=${title}`)
      .then(res => res.json())
      .then(data => {
        return data
      });
  } catch (err) {
    console.log("SEARCH ", err);
  }

  // let gamesResults = games.results
  //   gamesResults.map( (obj: { name: string; }) =>{
  //     console.log(obj)
  //       console.log(obj.name)
  //   })
  return games.results
};

export default fetchGameByName;


