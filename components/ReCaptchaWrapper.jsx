'use client';
import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const HideRecaptchaBadge = () => {
    useEffect(() => {
        const hideBadge = () => {
            // Hide .grecaptcha-badge
            const badge = document.querySelector('.grecaptcha-badge');
            if (badge) {
                badge.style.cssText = 'visibility:hidden !important; opacity:0 !important; position:fixed !important; right:-9999px !important;';
            }
            // Hide any reCAPTCHA iframes (error overlays, challenge frames)
            document.querySelectorAll('iframe[src*="recaptcha"]').forEach((iframe) => {
                const parent = iframe.parentElement;
                if (parent && parent !== document.body && !parent.closest('form')) {
                    parent.style.cssText = 'display:none !important;';
                }
                iframe.style.cssText = 'display:none !important;';
            });
            // Hide high z-index divs injected by reCAPTCHA
            document.querySelectorAll('div[style]').forEach((div) => {
                const style = div.getAttribute('style') || '';
                if (style.includes('2000000000') || style.includes('recaptcha')) {
                    div.style.cssText = 'display:none !important;';
                }
            });
        };

        // Run immediately
        hideBadge();

        // Watch for dynamically added elements
        const observer = new MutationObserver(hideBadge);
        observer.observe(document.body, { childList: true, subtree: true });

        // Also run after a delay (reCAPTCHA loads async)
        const timer1 = setTimeout(hideBadge, 1000);
        const timer2 = setTimeout(hideBadge, 3000);
        const timer3 = setTimeout(hideBadge, 5000);

        return () => {
            observer.disconnect();
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return null;
};

const ReCaptchaWrapper = ({ children }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <HideRecaptchaBadge />
            {children}
        </GoogleReCaptchaProvider>
    );
};

export default ReCaptchaWrapper;
