import { Raleway, Great_Vibes, Nunito } from "next/font/google";
import MUIWrapper from "@/components/layouts/MUIWrapper";
import LoadingScreen from "@/components/LoadingScreen";
import ReCaptchaWrapper from "@/components/ReCaptchaWrapper";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import LayoutContent from "@/components/LayoutContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Optimize font loading with next/font
const raleway = Raleway({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-raleway",
	preload: true,
	fallback: ["Arial", "Helvetica", "sans-serif"],
});

const greatVibes = Great_Vibes({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-great-vibes",
	preload: true,
	fallback: ["cursive"],
});

const nunito = Nunito({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito",
	preload: true,
	fallback: ["Arial", "sans-serif"],
});

export const metadata = {
	title: 'Devansh Amdavadwala - Portfolio',
	description:
		'Mobile Android Software developer crafting beautiful, dynamic mobile experiences with modern technologies. View my projects and achievements.',
	authors: [{ name: 'Devansh Amdavadwala' }],
	icons: {
		icon: "/favicon.ico",
	},
	keywords: [
		'developer',
		'portfolio',
		'react',
		'typescript',
		'web development',
		'full-stack',
		'devenvoy',
		'devansh',
		'devansh amdavadwala',
		'android',
		'developer',
		'android developement',
		'flutter development',
		'flutter',
		'dart',
		'compose',
		'jetpack compose',
		'kotlin multiplatform',
		'compose multiplatform',
		'dynamic',
		'UI/UX',
		'ui/ux',
		'mobile app',
		'mobile development',
		'mobile developer',
		'android app',
		'android development',
		'android developer',
		'kotlin developer',
		'MVVM',
		'Clean Architecture',
		'RESTful APIs',
		'Firebase',
		'Git',
		'Agile',
		'Scrum',
		'Material Design',
		'Google Play Store',
		'app publishing',
		'debugging',
		'performance optimization',
	],
	openGraph: {
		title: 'Devansh Amdavadwala - Portfolio',
		description:
			'Mobile Android Software developer crafting beautiful, dynamic mobile experiences with modern technologies. View my projects and achievements.',
		type: 'website',
		images: [
			{
				url: 'https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759226789/Devansh_dnvavj.png',
				width: 1200,
				height: 630,
				alt: 'Devansh Amdavadwala Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Devansh Amdavadwala - Android Developer',
		site: 'https://devansh.amdavadwala.com',
		images: [
			'https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759226789/Devansh_dnvavj.png',
		],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: '/apple-touch-icon.png',
	},
	metadataBase: new URL('https://devansh.amdavadwala.com'),
};

export const viewport = {
	themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${raleway.variable} ${greatVibes.variable} ${nunito.variable}`}
			suppressHydrationWarning>
			<head>
				{/* Preconnect only to Cloudinary since you're using next/font for Google Fonts */}
				<link
					rel="preconnect"
					href="https://res.cloudinary.com"
				/>
				<link
					rel="dns-prefetch"
					href="https://res.cloudinary.com"
				/>

				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Devansh Amdavadwala - Portfolio</title>
				<meta
					name="description"
					content="Mobile Android Software developer crafting beautiful, dynamic mobile experiences with modern technologies. View my projects and achievements."
				/>
				<meta
					name="author"
					content="Devansh Amdavadwala"
				/>
				<meta
					name="keywords"
					content="developer, portfolio, react, typescript, web development, full-stack, devenvoy, devansh,devansh amdavadwala,android,developer,android developement, flutter development, flutter, dart, compose , jetpack compose, kotlin multiplatform, compose multiplatform, dynamic, UI/UX, ui/ux, mobile app, mobile development, mobile developer, android app, android development, android developer, kotlin developer,MVVM, Clean Architecture, RESTful APIs, Firebase, Git, Agile, Scrum, Material Design, Google Play Store, app publishing, debugging, performance optimization"
				/>

				<meta
					property="og:title"
					content="Devansh Amdavadwala - Portfolio"
				/>
				<meta
					property="og:description"
					content="Mobile Android Software developer crafting beautiful, dynamic mobile experiences with modern technologies. View my projects and achievements."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759226789/Devansh_dnvavj.png"
				/>

				<meta
					name="twitter:card"
					content="Devansh Amdavadwala - Android Developer"
				/>
				<meta
					name="twitter:site"
					content="https://devansh.amdavadwala.com"
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759226789/Devansh_dnvavj.png"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                try {
                  const mode = localStorage.getItem('mui-theme-mode');
                  if (mode === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
					}}
				/>
			</head>
			<body className={raleway.className} suppressHydrationWarning>
				<LoadingScreen>
					<ReCaptchaWrapper>
						<MUIWrapper>
							<AnalyticsProvider />
							<LayoutContent>{children}</LayoutContent>
							<ToastContainer />
						</MUIWrapper>
					</ReCaptchaWrapper>
				</LoadingScreen>
			</body>
		</html>
	);
}