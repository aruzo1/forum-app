import Link from "next/link";
import Discord from "../../public/icons/discord.svg";
import Github from "../../public/icons/github.svg";
import Twitch from "../../public/icons/twitch.svg";

const buttons = [
  {
    name: "Discord",
    href: `https://discord.com/api/oauth2/authorize?client_id=961288377259401326&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth/discord&response_type=code&scope=identify%20email`,
    Icon: Discord,
  },
  {
    name: "Github",
    href: `https://github.com/login/oauth/authorize?client_id=37db809f3668ce2970b6&scope=user&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth/github`,
    Icon: Github,
  },
  {
    name: "Twitch",
    href: `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=9acv2qlueqtlrmhsye1wuwapfjfmpr&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth/twitch&scope=user:read:email`,
    Icon: Twitch,
  },
];

const SocialButtons = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {buttons.map(({ name, Icon, href }) => (
        <Link key={name} href={href}>
          <a key={name} className="btn-border-icon w-full" type="button">
            <Icon className="fill-brand-400" />
            Sign in with {name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
