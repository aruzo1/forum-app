import { Router } from "express";
import url from "url";
import { User } from "../../entities";
import generateToken from "../generateToken";
import ProviderUser from "./ProviderUser";

const router = Router();

router.get("/:provider", async (req, res) => {
  const code = req.query.code as string;
  const provider = req.params.provider;
  const uri = `${process.env.BACKEND_URL}/oauth/${provider}`;

  if (
    !code ||
    (provider !== "discord" && provider !== "github" && provider !== "twitch")
  ) {
    return res.sendStatus(400);
  }

  try {
    const providerUser = await new ProviderUser(code, uri)[provider]();
    if (!providerUser.email) return res.sendStatus(401);

    let user = await User.findOneBy({ email: providerUser.email });
    if (!user) {
      user = await User.create({
        login: providerUser.login || providerUser.username || providerUser.name,
        email: providerUser.email,
        avatarUrl: providerUser.avatar_url,
      }).save();
    }

    res.redirect(
      url.format({
        host: process.env.FRONTEND_URL,
        query: { token: generateToken(user.id) },
      })
    );
  } catch (err) {
    res.sendStatus(401);
  }
});

export default router;
