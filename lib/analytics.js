import { logEvent } from 'firebase/analytics';
import { getAnalyticsInstance } from './firebase';

/**
 * Log a custom event to Firebase Analytics.
 * Safe to call on server — silently no-ops if analytics isn't available.
 */
export const trackEvent = async (eventName, params = {}) => {
    try {
        const analytics = await getAnalyticsInstance();
        if (analytics) {
            logEvent(analytics, eventName, params);
        }
    } catch (error) {
        // Silently fail — analytics should never break the app
        console.error('Analytics error:', error);
    }
};

// ─── Pre-defined event helpers ───────────────────────────────────────

/** User revealed hidden contact details */
export const trackContactReveal = (type) =>
    trackEvent('contact_details_revealed', { detail_type: type });

/** User clicked a social link */
export const trackSocialClick = (platform) =>
    trackEvent('social_link_click', { platform });

/** User submitted the contact form */
export const trackFormSubmit = (success) =>
    trackEvent('contact_form_submit', { success: String(success) });

/** User clicked the resume/CV download button */
export const trackResumeDownload = () =>
    trackEvent('resume_download');

/** User clicked a CTA button */
export const trackCTAClick = (buttonName) =>
    trackEvent('cta_click', { button_name: buttonName });

/** Section came into view */
export const trackSectionView = (sectionName) =>
    trackEvent('section_view', { section: sectionName });

/** User clicked on a project */
export const trackProjectClick = (projectName) =>
    trackEvent('project_click', { project_name: projectName });

/** User toggled the theme */
export const trackThemeToggle = (mode) =>
    trackEvent('theme_toggle', { mode });
