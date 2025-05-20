import {  clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const copyTextToClipboard = async (text) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};