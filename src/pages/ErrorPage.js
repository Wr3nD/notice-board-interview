import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-epptec-background overflow-hidden w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl sm:text-4xl text-brandColor p-5">
          {t("error")}
        </h1>
        <Link to="/" className="text-2xl sm:text-4xl text-link underline">
          {t("returnToMain")}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
