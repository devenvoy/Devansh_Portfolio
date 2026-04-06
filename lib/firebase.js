import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore instance
const db = getFirestore(app);

// Analytics (lazy, browser-only)
let analyticsInstance = null;
const getAnalyticsInstance = async () => {
    if (typeof window !== 'undefined' && (await isSupported())) {
        if (!analyticsInstance) {
            analyticsInstance = getAnalytics(app);
        }
        return analyticsInstance;
    }
    return null;
};

export { app, db, getAnalyticsInstance };

// ─── Remote Config (lazy, browser-only) ──────────────────────────────
let remoteConfigInstance = null;
let remoteConfigReady = false;

/**
 * Returns a boolean value from Firebase Remote Config.
 * Falls back to `defaultValue` when Remote Config isn't available
 * (SSR, fetch failure, or the key doesn't exist in the console).
 */
export const getRemoteConfigBoolean = async (key, defaultValue) => {
    if (typeof window === 'undefined') return defaultValue;
    try {
        if (!remoteConfigInstance) {
            remoteConfigInstance = getRemoteConfig(app);
            // Minimise fetch intervals – 1 hour for prod, 0 for dev
            remoteConfigInstance.settings.minimumFetchIntervalMillis =
                process.env.NODE_ENV === 'development' ? 0 : 3600000;
            // Set in-app defaults so the app works even before the first fetch
            remoteConfigInstance.defaultConfig = {
                [key]: defaultValue,
            };
        }
        if (!remoteConfigReady) {
            await fetchAndActivate(remoteConfigInstance);
            remoteConfigReady = true;
        }
        return getValue(remoteConfigInstance, key).asBoolean();
    } catch {
        return defaultValue;
    }
};
