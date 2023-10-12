//PreviewIcon
import PreviewIconGithub from "@/public/assets/preview-icons/github.svg";
import PreviewIconFrontendMentor from "@/public/assets/preview-icons/frontend-mentor.svg";
import PreviewIconTwitter from "@/public/assets/preview-icons/twitter.svg";
import PreviewIconLinkedin from "@/public/assets/preview-icons/linkedin.svg";
import PreviewIconYoutube from "@/public/assets/preview-icons/youtube.svg";
import PreviewIconFacebook from "@/public/assets/preview-icons/facebook.svg";
import PreviewIconTwitch from "@/public/assets/preview-icons/twitch.svg";
import PreviewIconDevTo from "@/public/assets/preview-icons/devto.svg";
import PreviewIconCodewars from "@/public/assets/preview-icons/codewars.svg";
import PreviewIconCodepen from "@/public/assets/preview-icons/codepen.svg";
import PreviewIconFreeCodeCamp from "@/public/assets/preview-icons/freecodecamp.svg";
import PreviewIconGitlab from "@/public/assets/preview-icons/gitlab.svg";
import PreviewIconHashnode from "@/public/assets/preview-icons/hashnode.svg";
import PreviewIconStackOverflow from "@/public/assets/preview-icons/stackoverflow.svg";

//SelectIcon
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
  selectIcon: any;
  previewIcon: any;
  backgroundColor: string;
}

const SocialLinks: Links[] = [
  {
    name: "Github",
    value: "github",
    previewIcon: PreviewIconGithub,
    selectIcon: IconGithub,
    backgroundColor: "#1a1a1a",
  },
  {
    name: "Frontend Mentor",
    value: "frontend-mentor",
    previewIcon: PreviewIconFrontendMentor,
    selectIcon: IconFrontendMentor,
    backgroundColor: "#ffffff",
  },
  {
    name: "Twitter",
    value: "twitter",
    previewIcon: PreviewIconTwitter,
    selectIcon: IconTwitter,
    backgroundColor: "#43b7e9",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    previewIcon: PreviewIconLinkedin,
    selectIcon: IconLinkedin,
    backgroundColor: "#2d68ff",
  },
  {
    name: "Youtube",
    value: "youtube",
    previewIcon: PreviewIconYoutube,
    selectIcon: IconYoutube,
    backgroundColor: "#ee3939",
  },
  {
    name: "Facebook",
    value: "facebook",
    previewIcon: PreviewIconFacebook,
    selectIcon: IconFacebook,
    backgroundColor: "#2442ac",
  },
  {
    name: "Twitch",
    value: "twitch",
    previewIcon: PreviewIconTwitch,
    selectIcon: IconTwitch,
    backgroundColor: "#ee3fc8",
  },
  {
    name: "Dev.to",
    value: "dev-to",
    previewIcon: PreviewIconDevTo,
    selectIcon: IconDevTo,
    backgroundColor: "#333333",
  },
  {
    name: "Codewars",
    value: "codewars",
    previewIcon: PreviewIconCodewars,
    selectIcon: IconCodewars,
    backgroundColor: "#8a1a50",
  },
  {
    name: "Codepen",
    value: "codepen",
    previewIcon: PreviewIconCodepen,
    selectIcon: IconCodepen,
    backgroundColor: "#333333",
  },
  {
    name: "freeCodeCamp",
    value: "free-code-camp",
    previewIcon: PreviewIconFreeCodeCamp,
    selectIcon: IconFreeCodeCamp,
    backgroundColor: "#302267",
  },
  {
    name: "GitLab",
    value: "gitlab",
    previewIcon: PreviewIconGitlab,
    selectIcon: IconGitlab,
    backgroundColor: "#eb4925",
  },
  {
    name: "Hashnode",
    value: "hashnode",
    previewIcon: PreviewIconHashnode,
    selectIcon: IconHashnode,
    backgroundColor: "#0330d1",
  },
  {
    name: "Stack Overflow",
    value: "stack-overflow",
    previewIcon: PreviewIconStackOverflow,
    selectIcon: IconStackOverflow,
    backgroundColor: "#ec7100",
  },
];

export default SocialLinks;
