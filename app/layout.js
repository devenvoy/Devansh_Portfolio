import { Raleway, Great_Vibes, Nunito } from 'next/font/google';
import MUIWrapper from '@/components/layouts/MUIWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

// Optimize font loading with next/font
const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  preload: true,
  fallback: ['cursive'],
});

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: 'Devansh Amdavadwala - Portfolio',
  description: 'Portfolio website of Devansh Amdavadwala - Full Stack Developer showcasing projects, skills, and experience',
  authors: [{ name: 'Devansh Amdavadwala' }],
  keywords: ['Devansh Amdavadwala', 'Portfolio', 'Full Stack Developer', 'Web Developer'],
  openGraph: {
    title: 'Devansh Amdavadwala - Portfolio',
    description: 'Portfolio website showcasing projects and skills',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#2563eb',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${raleway.variable} ${greatVibes.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect only to Cloudinary since you're using next/font for Google Fonts */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const mode = localStorage.getItem('mui-theme-mode');
                  const metaTheme = document.querySelector('meta[name="theme-color"]');
                  if (metaTheme) {
                    metaTheme.setAttribute('content', mode === 'dark' ? '#000000' : '#2563eb');
                  }
                  if (mode === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={raleway.className}>
        <MUIWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
          <ToastContainer />
        </MUIWrapper>
      </body>
    </html>
  );
}