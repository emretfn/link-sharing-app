import IconGithub from "@/public/assets/images/icon-github.svg";
import IconFrontendMentor from "@/public/assets/images/icon-frontend-mentor.svg";
import IconTwitter from "@/public/assets/images/icon-twitter.svg";
import IconLinkedin from "@/public/assets/images/icon-linkedin.svg";
import IconYoutube from "@/public/assets/images/icon-youtube.svg";
import IconFacebook from "@/public/assets/images/icon-facebook.svg";
import IconTwitch from "@/public/assets/images/icon-twitch.svg";
import IconDevTo from "@/public/assets/images/icon-devto.svg";
import IconCodewars from "@/public/assets/images/icon-codewars.svg";
import IconCodepen from "@/public/assets/images/icon-codepen.svg";
import IconFreeCodeCamp from "@/public/assets/images/icon-freecodecamp.svg";
import IconGitlab from "@/public/assets/images/icon-gitlab.svg";
import IconHashnode from "@/public/assets/images/icon-hashnode.svg";
import IconStackOverflow from "@/public/assets/images/icon-stack-overflow.svg";

interface Links {
  name: string;
  value: string;
  icon: any;
}

const SocialLinks: Links[] = [
  {
    name: "Github",
    value: "github",
    icon: IconGithub,
  },
  {
    name: "Frontend Mentor",
    value: "frontend-mentor",
    icon: IconFrontendMentor,
  },
  {
    name: "Twitter",
    value: "twitter",
    icon: IconTwitter,
  },
  {
    name: "Linkedin",
    value: "linkedin",
    icon: IconLinkedin,
  },
  {
    name: "Youtube",
    value: "youtube",
    icon: IconYoutube,
  },
  {
    name: "Facebook",
    value: "facebook",
    icon: IconFacebook,
  },
  {
    name: "Twitch",
    value: "twitch",
    icon: IconTwitch,
  },
  {
    name: "Dev.to",
    value: "dev-to",
    icon: IconDevTo,
  },
  {
    name: "Codewars",
    value: "codewars",
    icon: IconCodewars,
  },
  {
    name: "Codepen",
    value: "codepen",
    icon: IconCodepen,
  },
  {
    name: "freeCodeCamp",
    value: "free-code-camp",
    icon: IconFreeCodeCamp,
  },
  {
    name: "GitLab",
    value: "gitlab",
    icon: IconGitlab,
  },
  {
    name: "Hashnode",
    value: "hashnode",
    icon: IconHashnode,
  },
  {
    name: "Stack Overflow",
    value: "stack-overflow",
    icon: IconStackOverflow,
  },
];

export default SocialLinks;
