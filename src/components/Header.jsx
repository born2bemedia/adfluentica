"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RequestButton from "./RequestButton";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [activeImageClass, setActiveImageClass] = useState(''); // Состояние для класса
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened((prev) => {
      const newState = !prev;
      document.body.classList.toggle("no-scroll", newState);

      const header = document.querySelector(".header__body");
      const nav = document.querySelector(".header__menu");
      const menuBtn = document.querySelector(".header__menu-btn");
      header?.classList.toggle("_active", newState);
      nav?.classList.toggle("_active", newState);
      menuBtn?.classList.toggle("_active", newState);

      return newState;
    });
  };

  // Функция для изменения класса при ховере
  const handleHover = (className) => {
    setActiveImageClass(className); // Устанавливаем соответствующий класс
  };

  // Функция для сброса класса при уходе с элемента
  const handleLeave = () => {
    setActiveImageClass(''); // Сбрасываем класс
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");

    const header = document.querySelector(".header__body");
    const nav = document.querySelector(".header__menu");
    const menuBtn = document.querySelector(".header__menu-btn");
    header?.classList.remove("_active");
    nav?.classList.remove("_active");
    menuBtn?.classList.remove("_active");
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__content">
              <div className="header__col-01">
                <Link href="/" className="header__logo">
                  <img src="/images/logo-mobile.svg" alt="logo" />
                  adfluentica
                </Link>
              </div>
              <div className="header__col-02">
                <nav className="header__nav">
                  <ul className="header__list">
                    <li className="header__item">
                      <Link href="/for-advertisers" className="header__link">
                        For Advertisers
                      </Link>
                    </li>
                    <li className="header__item">
                      <Link href="/for-publishers" className="header__link">
                        For Publishers
                      </Link>
                    </li>
                    <li className="header__item">
                      <Link href="/industry-focus" className="header__link">
                        Industry Focus
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="language">
                  <LangSwitcher />
                </div>
                <button
                  className="header__menu-btn"
                  onClick={menuOpen}
                >
                  <img src="/images/icon-open.svg" alt="icon-open" className="open" />
                  <img src="/images/icon-close.svg" alt="icon-close" className="close" />
                </button>
                <RequestButton
                  className={"header__join"}
                  text={"JOIN"}
                />
              </div>
            </div>
            <div className="header__menu">
              <div
                className={`col-01 ${activeImageClass}`}
              ></div>
              <div className="col-02">
                <ul className="list">
                  <li className="li">
                    <Link href="/for-advertisers" className="link">
                      For Advertisers
                    </Link>
                  </li>
                  <li className="li">
                    <Link href="/for-publishers" className="link">
                      For Publishers
                    </Link>
                  </li>
                  <li className="li">
                    <Link href="/industry-focus" className="link">
                      Industry Focus
                    </Link>
                  </li>
                  <li
                    className="li"
                    onMouseEnter={() => handleHover('_img-01')} // Ховер на FAQ
                    onMouseLeave={handleLeave}
                  >
                    <Link href="/faq" className="link">
                      FAQ
                    </Link>
                  </li>
                  <li
                    className="li"
                    onMouseEnter={() => handleHover('_img-02')} // Ховер на About Us
                    onMouseLeave={handleLeave}
                  >
                    <Link href="/about-us" className="link">
                      About Us
                    </Link>
                  </li>
                  <li
                    className="li"
                    onMouseEnter={() => handleHover('_img-03')} // Ховер на Contact Us
                    onMouseLeave={handleLeave}
                  >
                    <Link href="/contact-us" className="link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
