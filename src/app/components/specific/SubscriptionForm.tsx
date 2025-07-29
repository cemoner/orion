'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SubscriptionForm() {
  const t = useTranslations('Footer'); // your translation namespace
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const { message: resultMessage } = await res.json();

      if (!res.ok) {
        setMessage(t(resultMessage) || resultMessage);
      } else {
        setMessage(t(resultMessage) || resultMessage);
        setEmail('');
      }
    } catch {
      setMessage(t('newsletter.error_generic') || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h4 className="text-lg font-semibold text-text-dark dark:text-text">
        {t('newsletter.title')}
      </h4>
      <p className="text-sm opacity-90 text-text-dark dark:text-text mb-6">
        {t('newsletter.subtitle')}
      </p>

      <form
        onSubmit={subscribe}
        className="flex flex-col gap-y-6 items-center justify-center w-full max-w-md"
      >
        <label htmlFor="email" className="sr-only">
          {t('newsletter.label')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t('newsletter.placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded-3xl text-gray-900 bg-white dark:bg-gray-100 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="py-3 px-6 text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white rounded-3xl cursor-pointer disabled:bg-gray-400"
        >
          {isLoading ? t('newsletter.button_loading') : t('newsletter.button')}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{message}</p>
      )}
    </div>
  );
}
