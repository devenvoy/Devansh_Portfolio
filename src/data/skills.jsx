import ReactJs, {
	Bash,
	Bootstrap,
	C,
	CPlusPlus,
	CSharp,
	Compose,
	AndroidStudio,
	SQLite,
	Rust,
	Flutter,
	ComposeMultiplatform,
	Ktor,
	CSS,
	Doker,
	DotNet,
	ExpressJS,
	FireBase,
	Git,
	GitHub,
	Heroku,
	HTML,
	Java,
	JQuery,
	JS,
	Kotlin,
	Kubernets,
	MaterialUI,
	MongoDB,
	MySQL,
	GraphQL,
	NextJs,
	NodeJS,
	PHP,
	PostGreSql,
	PostMan,
	Python,
	Redis,
	Redux,
	SASS,
	TailwindCSS,
	TS,
	VSCode,
} from "../components/icons/SkillIcons";

const skills = [
	{
		id: 3,
		icon: <Kotlin />,
		name: "Kotlin",
		style: {
			shadow: "shadow-[#B14F97]",
			cover: "bg-gradient-to-b from-black to-[#B14F9780] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 4,
		icon: <Java />,
		name: "Java",
		style: {
			shadow: "shadow-[#3481d3]",
			cover: "bg-gradient-to-b from-black to-[#3481d380] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 5,
		icon: <AndroidStudio />,
		name: "Android Studio",
		style: {
			shadow: "shadow-[#3DDC84]",
			cover: "bg-gradient-to-b from-black to-[#3DDC8480] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 6,
		icon: <Compose />,
		name: "Jetpack Compose",
		style: {
			shadow: "shadow-[#38BF6E]",
			cover: "bg-gradient-to-b from-black to-[#38BF6E80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 7,
		icon: <Flutter />,
		name: "Flutter",
		style: {
			shadow: "shadow-[#19599A]",
			cover: "bg-gradient-to-b from-black to-[#19599A80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 8,
		icon: <MaterialUI />,
		name: "MaterialUI",
		style: {
			shadow: "shadow-[#1266A9]",
			cover: "bg-gradient-to-b from-black to-[#1266A980] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 9,
		icon: <SQLite />,
		name: "SQLite",
		style: {
			shadow: "shadow-[#76BEE8]",
			cover: "bg-gradient-to-b from-black to-[#76BEE880] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 10,
		icon: <FireBase />,
		name: "Firebase",
		style: {
			shadow: "shadow-[#d49a35]",
			cover: "bg-gradient-to-b from-black to-[#d49a3580] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 11,
		icon: <MongoDB />,
		name: "MongoDB",
		style: {
			shadow: "shadow-[#4FAA41]",
			cover: "bg-gradient-to-b from-black to-[#4FAA4180] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 12,
		icon: <PostMan />,
		name: "PostMan",
		style: {
			shadow: "shadow-[#FF6C37]",
			cover: "bg-gradient-to-b from-black to-[#FF6C3780] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 13,
		icon: <Git />,
		name: "Git",
		style: {
			shadow: "shadow-[#F34F29]",
			cover: "bg-gradient-to-b from-black to-[#F34F2980] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 14,
		icon: <GitHub />,
		name: "GitHub",
		style: {
			shadow: "shadow-[#5c5a5a]",
			cover: "bg-gradient-to-b from-black to-[#5c5a5a80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 15,
		icon: <PHP />,
		name: "PHP",
		style: {
			shadow: "shadow-[#9597c8]",
			cover: "bg-gradient-to-b from-black to-[#9597c880] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 16,
		icon: <Python />,
		name: "Python",
		style: {
			shadow: "shadow-[#ddbe4e]",
			cover: "bg-gradient-to-b from-black to-[#ddbe4e80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 17,
		icon: <C />,
		name: "C",
		style: {
			shadow: "shadow-[#3949AB]",
			cover: "bg-gradient-to-b from-black to-[#3949AB80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 18,
		icon: <CPlusPlus />,
		name: "C++",
		style: {
			shadow: "shadow-[#004482]",
			cover: "bg-gradient-to-b from-black to-[#00448280] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 19,
		icon: <CSharp />,
		name: "C#",
		style: {
			shadow: "shadow-[#A179DC]",
			cover: "bg-gradient-to-b from-black to-[#A179DC80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 30,
		icon: <Rust />,
		name: "Rust",
		style: {
			shadow: "shadow-[#CE412B]",
			cover: "bg-gradient-to-b from-black to-[#CE412B80] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 20,
		icon: <MySQL />,
		name: "MySQL",
		style: {
			shadow: "shadow-[#F29111]",
			cover: "bg-gradient-to-b from-black to-[#F2911180] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 21,
		icon: <PostGreSql />,
		name: "PostgreSql",
		style: {
			shadow: "shadow-[#336791]",
			cover: "bg-gradient-to-b from-black to-[#33679180] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 22,
		icon: <VSCode />,
		name: "VS Code",
		style: {
			shadow: "shadow-[#1D95E5]",
			cover: "bg-gradient-to-b from-black to-[#1D95E580] rounded-b-md",
			opacity: "opacity-80",
		},
	},
	{
		id: 23,
		icon: <Bash />,
		name: "Bash",
		style: {
			shadow: "shadow-[#4dbc85]",
			cover: "bg-gradient-to-b from-black to-[#4dbc8580] rounded-b-md",
			opacity: "opacity-80",
		},
	},
];

export default skills;

/*{
        id: 7,
        icon: <ReactJs />,
        name: "React",
        style: {
            shadow: "shadow-[#61DAFB]",
            cover: "bg-gradient-to-b from-black to-[#61DAFB] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    {
        id: 8,

        icon: <NodeJS />,
        name: "Node Js",
        style: {
            shadow: "shadow-[#83CD27]",
            cover: "bg-gradient-to-b from-black to-[#83CD27] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        icon: <NextJs />,
        name: "NextJs",
        style: {
            shadow: "shadow-[#646464]",
            cover: "bg-gradient-to-b from-black to-[#646464] rounded-b-md",
            opacity: "opacity-80"

        }
    },
{
        id: 6,
        icon: <ExpressJS />,
        name: "Express Js",
        style: {
            shadow: "shadow-[#444444]",
            cover: "bg-gradient-to-b from-black to-[#444444] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 28,
        icon: <Redux />,
        name: "Redux",
        style: {
            shadow: "shadow-[#764ABC]",
            cover: "bg-gradient-to-b from-black to-[#764ABC] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 10,
        icon: <TailwindCSS />,
        name: "Tailwind",
        style: {
            shadow: "shadow-[#3D8FC6]",
            cover: "bg-gradient-to-b from-black to-[#3D8FC6] rounded-b-md",
            opacity: "opacity-80"
        }
    },
   {
        id: 11,
        icon: <Bootstrap />,
        name: "Bootstrap",
        style: {
            shadow: "shadow-[#6610F2]",
            cover: "bg-gradient-to-b from-black to-[#6610F2] rounded-b-md",
            opacity: "opacity-80"
        }
    },
        {
        id: 36,
        icon: <GraphQL />,
        name: "GraphQL",
        style: {
            shadow: "shadow-[#FF1493]",
            cover: "bg-gradient-to-b from-black to-[#FF1493] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 12,
        icon: <SASS />,
        name: "SASS",
        style: {
            shadow: "shadow-[#CC6699]",
            cover: "bg-gradient-to-b from-black to-[#CC6699] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 27,
        icon: <Redis />,
        name: "Redis",
        style: {
            shadow: "shadow-[#C6302B]",
            cover: "bg-gradient-to-b from-black to-[#C6302B] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 30,
        icon: <JQuery />,
        name: "JQuery",
        style: {
            shadow: "shadow-[#1266A9]",
            cover: "bg-gradient-to-b from-black to-[#1266A9] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 31,
        icon: <Doker />,
        name: "Doker",
        style: {
            shadow: "shadow-[#0091E2]",
            cover: "bg-gradient-to-b from-black to-[#0091E2] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 32,
        icon: <Kubernets />,
        name: "Kubernets",
        style: {
            shadow: "shadow-[#326DE6]",
            cover: "bg-gradient-to-b from-black to-[#326DE6] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 34,
        icon: <Heroku />,
        name: "Heroku",
        style: {
            shadow: "shadow-[#430098]",
            cover: "bg-gradient-to-b from-black to-[#430098] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 35,
        icon: <DotNet />,
        name: "DotNet Core",
        style: {
            shadow: "shadow-[#430098]",
            cover: "bg-gradient-to-b from-black to-[#430098] rounded-b-md",
            opacity: "opacity-80"

        }
    },*/
