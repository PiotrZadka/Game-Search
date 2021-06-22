import fetchTwitchClientId from "./fetchTwitchClientId";

const fetchGameByName = async (title: string) => {
  try {
    await fetch(`http://todo`, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("here ", data);
      });
  } catch (err) {
    console.log("SEARCH ", err);
  }
};

export default fetchGameByName;
