'use client';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/devanshamdavadwala@gmail.com';
export const MESSAGE_MAX_LENGTH = 1000;

const useContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const updateField = (field, value) => {
        // Enforce message character limit
        if (field === 'message' && value.length > MESSAGE_MAX_LENGTH) return;
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e, recaptchaToken) => {
        e.preventDefault();

        if (!recaptchaToken) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
            return;
        }

        setIsSubmitting(true);
        setIsError(false);

        try {
            const response = await fetch(FORMSUBMIT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: 'Portfolio Contact Message!!',
                    _template: 'table',
                    _captcha: 'true',
                }),
            });

            if (response.ok) {
                // Save to Firestore
                try {
                    await addDoc(collection(db, 'contact_messages'), {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        createdAt: serverTimestamp(),
                    });
                } catch (firestoreError) {
                    // Don't fail the whole submission if Firestore write fails
                    console.error('Firestore write failed:', firestoreError);
                }

                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 4000);
            } else {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }
        } catch (error) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        isSubmitted,
        isError,
        updateField,
        handleSubmit,
    };
};

export default useContactForm;
