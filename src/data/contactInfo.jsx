import LinkedIn, { GitHub, GMail, Twitter, Resume } from "../components/icons/Icons";

const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/devansh-a-bb104524a/",
        icon: LinkedIn
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/devenvoy",
        icon: GitHub
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:devanshamdavadwala@gmail.com",
        icon: GMail
    },
    {
        id: 6,
        name: "Twitter",
        link: "https://x.com/AjDevansh",
        icon: Twitter
    },
    {
        id: 5,
        name: "Resume",
        link: "https://drive.google.com/file/d/194hASLGWkzKPrlWP9baIgheV60aBLqQs/view",
        icon: Resume,
        download: true
    },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "https://discord.com/users/arcenvoy",
    //   icon: <Discord />,
    // },
    // {
    //     id: 4,
    //     name: "Telegram",
    //     link: "https://t.me/DevEnvoy",
    //     icon: <Telegram />,
    // },
];

export default contactInfo;