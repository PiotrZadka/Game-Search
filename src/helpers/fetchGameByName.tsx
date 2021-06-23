import config from "../config.json";

const fetchGameByName = async (title: string) => {
  let games = null;
  try {
    games = await fetch(
      `https://api.rawg.io/api/games?key=${config.apiKey}&search=${title}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (err) {
    console.log("SEARCH ", err);
  }

  // let gamesResults = games.results;
  // gamesResults.map((obj: { name: string }) => {
  //   console.log(obj);
  //   console.log(obj.name);
  // });
  return games.results;
};

export default fetchGameByName;
