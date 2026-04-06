'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import EasterEgg from '@/components/EasterEgg';

const LayoutContent = ({ children }) => {
    const pathname = usePathname();
    const isEasterEggPage = pathname === '/achievements';

    return (
        <>
            {!isEasterEggPage && <Navbar />}
            <main>{children}</main>
            {!isEasterEggPage && <Footer />}
            {!isEasterEggPage && <BackToTopButton />}
            {!isEasterEggPage && <EasterEgg />}
        </>
    );
};

export default LayoutContent;
