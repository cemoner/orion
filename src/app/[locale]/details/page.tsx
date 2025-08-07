"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const t = useTranslations("Product_Detail");

  const TabButton = ({ id, labelKey }: { id: string; labelKey: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`py-3 px-4 sm:px-6 font-semibold text-lg border-b-4 transition-colors duration-300 ${
        activeTab === id
          ? "border-hover-blue-dark text-hover-blue-dark dark:text-hover-blue dark:border-hover-blue"
          : "border-transparent text-hover-gray hover:text-hover-gray-dark dark:text-graycolor dark:hover:text-text-dark"
      }`}
    >
      {t(labelKey)}
    </button>
  );

  return (
    <div className="bg-background dark:bg-background-dark-lighter min-h-screen font-sans">
      <div className="w-full mx-auto p-4 lg:p-4 sm:p-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-6 dark:border-b dark:border-gray-700">
          {/* --- Product Image Section --- */}
          <div className="w-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-auto lg:h-full">
              <img
                src="https://images.pexels.com/photos/129441/pexels-photo-129441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt={t("product.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- Product Details Section --- */}
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl md:text-5xl text-center md:text-start font-bold text-text dark:text-text-dark mb-3">
              {t("product.title")}
            </h1>
            <p className="text-2xl text-center md:text-start md:text-3xl font-semibold text-blue-700 mb-5">
              {t("product.priceRange")}
            </p>
            <p className="text-gray-600 dark:text-graycolor mb-6 text-base sm:text-lg leading-relaxed">
              {t("product.shortDescription")}
            </p>

            <div className="w-full flex items-center justify-center">
              <div className="text-text-dark w-full md:w-100 bg-blue-800 p-4 rounded-2xl mb-6 shadow">
                <h4 className="font-bold mb-1 w-full">
                  {t("importantNote.title")}
                </h4>
                <p className="text-sm sm:text-base w-full">
                  {t("importantNote.content")}
                </p>
              </div>
            </div>

            <div className="mt-3 mb-6 w-full flex justify-center">
              <Link
                href="/contact"
                className="text-center bg-blue-800 text-text-dark font-bold py-4 px-6 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300 lg:text-lg"
              >
                {t("actions.contactUs")}
              </Link>
            </div>
          </div>
        </div>

        <div className="md:mt-16 mb-12">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <div className="overflow-x-auto">
              <nav className="-mb-px flex space-x-2 sm:space-x-6 whitespace-nowrap">
                <TabButton id="description" labelKey="tabs.description" />
                <TabButton
                  id="additional_info"
                  labelKey="tabs.additionalInfo"
                />
              </nav>
            </div>
          </div>
          <div>
            {activeTab === "description" && (
              <div className="prose sm:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-12">
                <p>{t("description.paragraph1")}</p>

                <div className="bg-light-background-blue dark:bg-background-dark-extral-blue p-6 sm:p-8 rounded-xl max-w-4xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
                    {t("description.feature1.title")}
                  </h3>
                  <p className="mt-4 text-center text-base sm:text-lg">
                    {t("description.feature1.content")}
                  </p>
                </div>

                <div className="bg-light-background-blue dark:bg-background-dark-extral-blue p-6 sm:p-8 rounded-xl max-w-4xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    {t("advantages.title")}
                  </h3>
                  <ul className="space-y-4 max-w-md mx-auto text-base sm:text-lg">
                    <li className="flex items-start">
                      <Star
                        className="text-blue-700 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span>
                        <strong>{t("advantages.item1.title")}</strong>{" "}
                        {t("advantages.item1.description")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star
                        className="text-blue-700 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span>
                        <strong>{t("advantages.item2.title")}</strong>{" "}
                        {t("advantages.item2.description")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star
                        className="text-blue-700 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span>
                        <strong>{t("advantages.item3.title")}</strong>{" "}
                        {t("advantages.item3.description")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star
                        className="text-blue-700 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span>
                        <strong>{t("advantages.item4.title")}</strong>{" "}
                        {t("advantages.item4.description")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star
                        className="text-blue-700 mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span>
                        <strong>{t("advantages.item5.title")}</strong>{" "}
                        {t("advantages.item5.description")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "additional_info" && (
              <div className="text-gray-700 dark:text-gray-300">
                <p>{t("additionalInfo.placeholder")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
