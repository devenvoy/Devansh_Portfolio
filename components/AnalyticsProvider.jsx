'use client';
import { useEffect } from 'react';
import { getAnalyticsInstance } from '@/lib/firebase';

const AnalyticsProvider = () => {
    useEffect(() => {
        // Initialize Firebase Analytics on mount (browser-only)
        getAnalyticsInstance();
    }, []);

    return null; // This component only initializes analytics, renders nothing
};

export default AnalyticsProvider;
