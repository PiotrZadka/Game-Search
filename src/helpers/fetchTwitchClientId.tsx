const fetchTwitchClientId = async () => {
  const twitchConfig = {
    client_id: "",
    client_secret: "",
    grant_type: "",
  };

  let response = null;

  try {
    response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${twitchConfig.client_id}&client_secret=${twitchConfig.client_secret}&grant_type=${twitchConfig.grant_type}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (err) {
    console.log("TOKEN ", err);
  }
  console.log(response);
  return response;
};

export default fetchTwitchClientId;
