import config from "../config.json";

const fetchGameByName = async (title: string) => {
  let listOfGames: Array<IGame> = [];

  try {
    listOfGames = await fetch(
      `https://api.rawg.io/api/games?key=${config.apiKey}&search=${title}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  } catch (err) {
    console.log("SEARCH ", err);
  }

  // let gamesResults = games.results;
  // gamesResults.map((obj: { name: string }) => {
  //   console.log(obj);
  //   console.log(obj.name);
  // });
  return listOfGames;
};

interface IGame {
  id: number;
  name: string;
  released: string;
  metacritic: number;
}

export default fetchGameByName;
