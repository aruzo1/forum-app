import axios, { AxiosInstance } from "axios";

class ProviderUser {
  code: string;
  redirectUri: string;
  instance: AxiosInstance;

  constructor(code: string, redirectUri: string) {
    this.code = code;
    this.redirectUri = redirectUri;
    this.instance = axios.create({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
  }

  async discord() {
    const accessToken = await this.getAccessToken(
      "https://discord.com/api/oauth2/token",
      process.env.DISCORD_ID!,
      process.env.DISCORD_SECRET!
    );

    const user = await this.getUser(
      "https://discordapp.com/api/users/@me",
      accessToken
    );

    if (user.avatar) {
      user.avatar_url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
    }

    return user;
  }

  async github() {
    const accessToken = await this.getAccessToken(
      "https://github.com/login/oauth/access_token",
      process.env.GITHUB_ID!,
      process.env.GITHUB_SECRET!
    );

    const user = await this.getUser("https://api.github.com/user", accessToken);

    if (!user.email) {
      await this.instance
        .get("https://api.github.com/user/emails", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => (user.email = res.data[0].email));
    }

    return user;
  }

  async twitch() {
    const accessToken = await this.getAccessToken(
      "https://id.twitch.tv/oauth2/token",
      process.env.TWITCH_ID!,
      process.env.TWITCH_SECRET!
    );

    return (
      await this.getUser("https://api.twitch.tv/helix/users", accessToken, {
        "Client-Id": process.env.TWITCH_ID,
      })
    ).data[0];
  }

  async getAccessToken(url: string, id: string, secret: string) {
    const payload = new URLSearchParams({
      client_id: id,
      client_secret: secret,
      redirect_uri: this.redirectUri,
      code: this.code,
      grant_type: "authorization_code",
    });

    return this.instance
      .post(url, payload)
      .then((res) => res.data.access_token);
  }

  async getUser(url: string, accessToken: string, headers?: any) {
    return this.instance
      .get(url, {
        headers: { Authorization: `Bearer ${accessToken}`, ...headers },
      })
      .then((res) => res.data);
  }
}

export default ProviderUser;
