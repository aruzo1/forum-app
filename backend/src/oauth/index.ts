import { Router } from "express";
import url from "url";
import { User } from "../entities";
import generateToken from "../helpers/generateToken";
import providers from "./providers";

const router = Router();

router.get("/authorize/:providerName", async (req, res) => {
  const providerName = req.params.providerName;
  const code = req.query.code as string;

  if (!code) return res.sendStatus(400);
  if (providerName !== "discord" && providerName !== "github") {
    return res.sendStatus(400);
  }

  const provider = providers[providerName];
  try {
    const providerUser = await provider(code);
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
        host: process.env.APP_URL,
        query: { token: generateToken(user.id) },
      })
    );
  } catch (err) {
    res.sendStatus(401);
  }
});

export default router;
