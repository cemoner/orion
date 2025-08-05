"use client";

import React, { useState } from "react";
import type { FC } from "react";
import { useTranslations } from "next-intl";

// Interface for a single product entry in the form
interface ProductEntry {
  id: number;
  productName: string;
  weight: string;
}

// Interface for the overall form data structure
interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  products: ProductEntry[];
}

  
// Available product options for the dropdown
const productOptions = [
  "08 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "10 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "12 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "14 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "16 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "18 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "20 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "22 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "24 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "25 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "26 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "28 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "30 MM NERVÜRLÜ İNŞAAT DEMİRİ",
  "32 MM NERVÜRLÜ İNŞAAT DEMİRİ",
];

// SVG icon component for the trash can
const TrashIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 group-hover:text-text transition-colors"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z"
      clipRule="evenodd"
    />
  </svg>
);

// Main component for the "Receive Offer" form
const ReceiveOffer: FC = () => {
  const t = useTranslations("Offer");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    products: [{ id: Date.now(), productName: productOptions[0], weight: "" }],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handles changes for standard input fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles changes within the dynamic product rows
  const handleProductChange = (
    id: number,
    field: "productName" | "weight",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      ),
    }));
  };

  // Adds a new, empty product row to the form
  const addProductRow = () => {
    setFormData((prev) => ({
      ...prev,
      products: [
        ...prev.products,
        { id: Date.now(), productName: productOptions[0], weight: "" },
      ],
    }));
  };

  // Removes a product row, ensuring at least one remains
  const removeProductRow = (id: number) => {
    if (formData.products.length > 1) {
      setFormData((prev) => ({
        ...prev,
        products: prev.products.filter((product) => product.id !== id),
      }));
    }
  };

  // Handles form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
  };

  // Render a success message after the form is submitted
  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 bg-background rounded-xl shadow-lg text-center">
        <svg
          className="w-16 h-16 mx-auto text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold text-text mt-4">
          {t("submissionSuccessTitle")}
        </h2>
        <p className="text-text mt-2">{t("submissionSuccessMessage")}</p>
      </div>
    );
  }

  // Render the main form
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-text mb-2">
            {t("formTitle")}
          </h1>
          <p className="text-text mb-8">{t("formSubtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal and Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-text mb-1"
                >
                  {t("fullNameLabel")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-text mb-1"
                >
                  {t("companyNameLabel")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text mb-1"
                >
                  {t("phoneLabel")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-1"
                >
                  {t("emailLabel")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-text mb-1"
                >
                  {t("locationLabel")}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Products Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-text">
                {t("productsTitle")}
              </h2>
              {formData.products.map((product, index) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                >
                  <div className="sm:col-span-7">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-text mb-1">
                        {t("productSelectLabel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    )}
                    <select
                      value={product.productName}
                      onChange={(e) =>
                        handleProductChange(
                          product.id,
                          "productName",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      {productOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-text mb-1">
                        {t("quantityLabel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    )}
                    <input
                      type="number"
                      placeholder={t("quantityPlaceholder")}
                      value={product.weight}
                      onChange={(e) =>
                        handleProductChange(
                          product.id,
                          "weight",
                          e.target.value
                        )
                      }
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="sm:col-span-1 flex items-end justify-center h-full">
                    {formData.products.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProductRow(product.id)}
                        className="p-2 rounded-full group hover:bg-gray-200 mt-5 sm:mt-0 transition-colors"
                        aria-label={t("removeProductAriaLabel")}
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex justify-start pt-2">
                <button
                  type="button"
                  onClick={addProductRow}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  {t("addProductButton")}
                </button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-center w-full pt-4 border-t border-gray-200 gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                {t("submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReceiveOffer;
