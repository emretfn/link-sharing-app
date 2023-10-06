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
  backgroundColor: string;
}

const SocialLinks: Links[] = [
  {
    name: "Github",
    value: "github",
    icon: IconGithub,
    backgroundColor: "#1a1a1a",
  },
  {
    name: "Frontend Mentor",
    value: "frontend-mentor",
    icon: IconFrontendMentor,
    backgroundColor: "#ffffff",
  },
  {
    name: "Twitter",
    value: "twitter",
    icon: IconTwitter,
    backgroundColor: "#43b7e9",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    icon: IconLinkedin,
    backgroundColor: "#2d68ff",
  },
  {
    name: "Youtube",
    value: "youtube",
    icon: IconYoutube,
    backgroundColor: "#ee3939",
  },
  {
    name: "Facebook",
    value: "facebook",
    icon: IconFacebook,
    backgroundColor: "#2442ac",
  },
  {
    name: "Twitch",
    value: "twitch",
    icon: IconTwitch,
    backgroundColor: "#ee3fc8",
  },
  {
    name: "Dev.to",
    value: "dev-to",
    icon: IconDevTo,
    backgroundColor: "#333333",
  },
  {
    name: "Codewars",
    value: "codewars",
    icon: IconCodewars,
    backgroundColor: "#8a1a50",
  },
  {
    name: "Codepen",
    value: "codepen",
    icon: IconCodepen,
    backgroundColor: "#333333",
  },
  {
    name: "freeCodeCamp",
    value: "free-code-camp",
    icon: IconFreeCodeCamp,
    backgroundColor: "#302267",
  },
  {
    name: "GitLab",
    value: "gitlab",
    icon: IconGitlab,
    backgroundColor: "#eb4925",
  },
  {
    name: "Hashnode",
    value: "hashnode",
    icon: IconHashnode,
    backgroundColor: "#0330d1",
  },
  {
    name: "Stack Overflow",
    value: "stack-overflow",
    icon: IconStackOverflow,
    backgroundColor: "#ec7100",
  },
];

export default SocialLinks;
