'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';

// Set the character limit
const MAX_CHARS = 150;

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [message, setMessage] = useState('');
  // Use a state for character count
  const [charCount, setCharCount] = useState(0);

  // This function now correctly handles character limits.
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    // Only update the state if the input text is not over the character limit.
    // This will effectively block the user from typing more characters.
    if (inputText.length <= MAX_CHARS) {
      setMessage(inputText);
      setCharCount(inputText.length);
    }
  };

  return (
    <section className="container min-w-full px-4 py-8 font-sans bg-background dark:bg-background-dark text-text dark:text-text-dark">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-2 p-1">{t("mainTitle")}</h1>
        <p className="text-lg p-1">{t("subtitle")}</p>
      </div>

      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center lg:gap-8 max-w-6xl">
        {/* Contact Info */}
        <div className="w-full sm:max-w-md h-full mb-4 lg:mb-0 sm:mx-auto shadow-xl rounded-xl p-6 md:p-8 bg-background dark:bg-background-dark">
          {/* ... all your contact info JSX remains the same ... */}
          <div className="space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-logo-blue dark:text-text-dark">
                  <MapPin className="h-5 w-5 mt-1.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 p-0.5">{t("addressTitle")}</h3>
                  <p className="text-sm p-0.5">{t("addressLine1")}</p>
                  <p className="text-sm p-0.5">{t("addressLine2")}</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-logo-blue dark:text-text-dark">
                  <Phone className="h-5 w-5 mt-1.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 p-0.5">{t("phoneTitle")}</h3>
                  <p className="text-sm p-0.5">{t("phoneNumber")}</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-logo-blue dark:text-text-dark">
                  <Mail className="h-5 w-5 mt-1.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 p-0.5">{t("emailContactTitle")}</h3>
                  <p className="text-sm p-0.5">{t("contactEmail")}</p>
                </div>
              </div>
            </div>
            {/* Company Info */}
            <div className="pt-6 border-t border-border-gray">
              <h3 className="text-lg font-semibold mb-4 p-0.5">
                {t("companyNameLabel")} <span className="font-normal">{t("companyNameValue")}</span>
              </h3>
              <p className="text-sm mb-1 p-0.5">
                <span className="font-semibold">{t("taxNoLabel")}</span> {t("taxNoValue")}
              </p>
              <p className="text-sm mb-1 p-0.5">
                <span className="font-semibold">{t("taxOfficeLabel")}</span> {t("taxOfficeValue")}
              </p>
              <p className="text-sm mb-1 p-0.5">
                <span className="font-semibold">{t("tradeRegNoLabel")}</span> {t("tradeRegNoValue")}
              </p>
              <p className="text-sm p-0.5">
                <span className="font-semibold">{t("mersisNoLabel")}</span> {t("mersisNoValue")}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:max-w-md h-full sm:mx-auto shadow-xl rounded-xl p-2 md:p-2 bg-background dark:bg-background-dark">
          <div className="p-6 rounded-xl sm:max-w-lg sm:mx-auto bg-background dark:bg-background-dark h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center p-1">{t("formTitle")}</h2>
            <form className="space-y-6">
              {/* ... name and email inputs are the same ... */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-3 p-0.5">{t("nameLabel")}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder={t("namePlaceholder")}
                  className="block w-full px-4 py-4 border border-gray-300 shadow-sm rounded-md focus:ring-2 focus:ring-logo-blue focus:border-logo-blue sm:text-sm bg-[var(--color-background)] dark:bg-background-dark text-text dark:text-text-dark transition-all duration-150 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 p-0.5">{t("emailLabel")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  className="block w-full px-4 py-4 border border-gray-300 shadow-sm rounded-md focus:ring-2 focus:ring-logo-blue focus:border-logo-blue sm:text-sm bg-[var(--color-background)] dark:bg-background-dark text-text dark:text-text-dark transition-all duration-150 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 p-0.5">{t("messageLabel")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  value={message}
                  onChange={handleMessageChange}
                  className="block w-full px-4 py-4 border border-gray-300 shadow-sm rounded-md focus:ring-2 focus:ring-logo-blue focus:border-logo-blue sm:text-sm resize-y bg-[var(--color-background)] dark:bg-background-dark text-text dark:text-text-dark transition-all duration-150 ease-in-out"
                  required
                ></textarea>
                {/* UPDATE THE COUNTER TEXT */}
                <p className={`text-xs mt-1 text-right ${charCount >= MAX_CHARS ? 'text-red-500 font-semibold' : 'text-gray-500'}`}>
                  {charCount} / {MAX_CHARS} characters
                  {charCount >= MAX_CHARS && ' (limit reached)'}
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-base font-medium text-white bg-logo-blue hover:bg-[var(--color-hover-blue)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logo-blue transition-all duration-200 ease-in-out transform hover:scale-[1.02] dark:bg-logo-blue-dark dark:hover:bg-[var(--color-hover-blue-dark)] dark:focus:ring-logo-blue-dark rounded-md"
                >
                  {t("sendButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}