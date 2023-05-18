import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const SlideNavMenu = ({ isNavMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  if (isNavMenuOpen) {
    return (
      <div className="absolute  bottom-0 left-0  w-full ">
        <nav
          role="navigation"
          className={
            isNavMenuOpen
              ? "fixed  flex h-max flex-col bg-clip-content bg-secondColor transition-all ease-in-out duration-500  shadow-md border-b-2 w-full text-white "
              : "fixed mt-0 h-0 flex flex-col  transition-all  ease-in-out  duration-500 text-white "
          }
        >
          <Link
            className={
              pathname === "/"
                ? "nav-element-mobile underline pt-5"
                : "nav-element-mobile"
            }
            to="/"
          >
            {t("nav1")}
          </Link>
          <a href="https://www.epptec.eu/sluzby" className="nav-element-mobile">
            {t("nav2")}
          </a>
          <a
            href="https://www.epptec.eu/produkty"
            className="nav-element-mobile"
          >
            {t("nav3")}
          </a>
          <a
            href="https://www.epptec.eu/partneri"
            className="nav-element-mobile"
          >
            {t("nav4")}
          </a>
          <a
            href="https://www.epptec.eu/reference"
            className="nav-element-mobile"
          >
            {t("nav5")}
          </a>
          <a href="https://www.epptec.eu/tym" className="nav-element-mobile">
            {t("nav6")}
          </a>
          <a
            href="https://www.epptec.eu/kariera"
            className="nav-element-mobile"
          >
            {t("nav7")}
          </a>
          <a
            href="https://www.epptec.eu/kontakt"
            className="nav-element-mobile pb-5 "
          >
            {t("nav8")}
          </a>
        </nav>
      </div>
    );
  }
};

export default SlideNavMenu;
