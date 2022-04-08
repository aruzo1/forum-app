import axios from "axios";
axios.defaults.headers.common.Accept = "application/json";

const discordProvider = async (code: string) => {
  const payload = new URLSearchParams({
    client_id: process.env.DISCORD_ID!,
    client_secret: process.env.DISCORD_SECRET!,
    grant_type: "authorization_code",
    code,
  });

  const access_token = await axios
    .post("https://discord.com/api/oauth2/token", payload, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((res) => res.data.access_token);

  const user = await axios
    .get("https://discordapp.com/api/users/@me", {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    .then((res) => res.data);

  if (user.avatar) {
    user.avatar_url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
  }

  return user;
};

const githubProvider = async (code: string) => {
  const payload = {
    client_id: process.env.GITHUB_ID!,
    client_secret: process.env.GITHUB_SECRET!,
    code,
  };

  const access_token = await axios
    .post("https://github.com/login/oauth/access_token", payload)
    .then((res) => res.data.access_token);

  const user = await axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    .then((res) => res.data);

  if (!user.email) {
    await axios
      .get("https://api.github.com/user/emails", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => (user.email = res.data[0].email));
  }

  return user;
};

export default {
  discord: discordProvider,
  github: githubProvider,
};
