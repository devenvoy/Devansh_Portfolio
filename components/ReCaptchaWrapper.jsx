'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const ReCaptchaWrapper = ({ children }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        // If no site key, render children without reCAPTCHA
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            {children}
        </GoogleReCaptchaProvider>
    );
};

export default ReCaptchaWrapper;
