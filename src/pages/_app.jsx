// pages/_app.jsx
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MUIWrapper from '@/components/layouts/MUIWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

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

export default MyApp;
