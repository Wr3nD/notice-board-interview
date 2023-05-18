import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SlideNavMenu from "./SlideNavMenu";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const actualLanguage = localStorage.getItem("i18nextLng");

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  const transitionNavBar = () => {
    if (window.scrollY > 36) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setNavMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        show === true
          ? "flex justify-between fixed top-0 pt-5 pb-3 px-8 transition-all ease-in-out  bg-white w-full border-b-2 shadow-md z-50"
          : "flex justify-between fixed bg-white bg-opacity-30   top-0 p-8 transition-all ease-in-out  z-50 w-full"
      }
    >
      {/* left part */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center md:text-xl  text-brandColor  ">
          <Link to="/">
            <img src={logo} className="mr-1 sm:mr-5 w-6 sm:w-8 md:w-14 " />
          </Link>
          <div>epptec.eu</div>

          <div className="w-[1px] h-12 bg-[#dfe1ea] mx-4 hidden sm:block "></div>
          <a
            href="tel:+420608406426"
            className="text-sm md:text-base hidden sm:block hover:mt-1"
          >
            +420 608 406 426
          </a>
        </div>
      </div>
      {/* right part */}
      <div className="flex justify-center items-center">
        {!isMobile ? (
          <nav role="navigation" className=" flex align-middle items-center">
            <Link
              className={
                pathname === "/" ? "nav-element underline" : "nav-element"
              }
              to="/"
            >
              {t("nav1")}
            </Link>
            <a href="https://www.epptec.eu/sluzby" className="nav-element">
              {t("nav2")}
            </a>
            <a href="https://www.epptec.eu/produkty" className="nav-element">
              {t("nav3")}
            </a>
            <a href="https://www.epptec.eu/partneri" className="nav-element">
              {t("nav4")}
            </a>
            <a href="https://www.epptec.eu/reference" className="nav-element">
              {t("nav5")}
            </a>
            <a href="https://www.epptec.eu/tym" className="nav-element">
              {t("nav6")}
            </a>
            <a href="https://www.epptec.eu/kariera" className="nav-element">
              {t("nav7")}
            </a>
            <a href="https://www.epptec.eu/kontakt" className="nav-element">
              {t("nav8")}
            </a>
          </nav>
        ) : (
          <Bars3Icon
            className={
              isNavMenuOpen
                ? "bg-secondColor w-10 sm:w-12 p-2 text-white"
                : "w-10 sm:w-12 p-2"
            }
            onClick={() => setNavMenuOpen(!isNavMenuOpen)}
          />
        )}
        {actualLanguage === "en" ? (
          <button
            onClick={() => changeLanguageHandler("cz")}
            className="bg-gray-200 p-2 sm:p3 text-sm sm:text-lg rounded-full ml-2"
          >
            CZ
          </button>
        ) : (
          <button
            onClick={() => changeLanguageHandler("en")}
            className="bg-gray-200 p-2 sm:p3 text-sm sm:text-lg rounded-full ml-2"
          >
            EN
          </button>
        )}
      </div>
      <SlideNavMenu isNavMenuOpen={isNavMenuOpen} />
    </div>
  );
};

export default Navbar;
