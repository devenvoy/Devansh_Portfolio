import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/devansh-a-bb104524a/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/devenvoy",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:devanshamdavadwala@gmail.com",
        icon: <GMail />,
    },
    {
        id: 6,
        name: "Twitter",
        link: "https://x.com/AjDevansh",
        icon: <Twitter />,
      },
    // {
    //     id: 4,
    //     name: "Telegram",
    //     link: "https://t.me/DevEnvoy",
    //     icon: <Telegram />,
    // },
    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "https://discord.com/users/arcenvoy",
    //   icon: <Discord />,
    // },
];

export default contactInfo;