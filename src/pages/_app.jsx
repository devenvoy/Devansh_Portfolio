import '@/styles/globals.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import MUIWrapper from '@/components/layouts/MUIWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { ToastContainer } from 'react-toastify';
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <MUIWrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <BackToTopButton />
      <ToastContainer />
    </MUIWrapper>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
