'use client';
import { useState } from 'react';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/devanshamdavadwala@gmail.com';

const useContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const updateField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
