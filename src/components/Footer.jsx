"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import Linkedin from "@/icons/social/Linkedin";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body _container">
          <div className="footer__content">
            <div className="footer__col-01">
              <nav className="footer__nav">
                <ul className="footer__menu">
                  <li className="footer__item">
                    <Link href="/for-advertisers" className="footer__link">For Advertisers</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/faq" className="footer__link">FAQ</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/for-publishers" className="footer__link">For Publishers</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/about-us" className="footer__link">About Us</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/industry-focus" className="footer__link">Industry Focus</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/contact-us" className="footer__link">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <nav className="footer__nav-policy">
                <ul className="footer__list">
                  <li className="footer__policy-item">
                    <Link href="/terms-of-service" className="footer__policy-link">Terms of Service</Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="/refund-policy" className="footer__policy-link">Refund Policy</Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="/privacy-policy" className="footer__policy-link">Privacy Policy</Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="/cookie-policy" className="footer__policy-link">Cookie Policy</Link>
                  </li>
                </ul>
              </nav>
              <div className="footer__copy">
                © {currentYear} Youmedia LTD. Every connection matters. All rights reserved.
              </div>
            </div>
            <div className="footer__col-02">
              <Link href="/" className="footer__logo">Logo</Link>
              <ul className="footer__contacts">
                <li className="footer__contact">
                  <Link href="tel:+447482191976" className="footer__contact-link">+447482191976</Link>
                </li>
                <li className="footer__contact">
                  <Link href="mailto:info@adfluentica.com" className="footer__contact-link">info@adfluentica.com</Link>
                </li>
                <li className="footer__contact">86-90 Paul Street, London, Greater London, England, EC2A 4NE</li>
                <li className="footer__contact">4th floor, office number 43, 1 Ropemaker St, London EC2V 9HT, UK</li>
              </ul>
              <ul className="footer__socials">
                <li className="footer__social">
                  <Link href="#" className="footer__social-link _facebook"> <Facebook /> </Link>
                </li>
                <li className="footer__social">
                  <Link href="#" className="footer__social-link _instagram"> <Instagram /> </Link>
                </li>
                <li className="footer__social">
                  <Link href="#" className="footer__social-link _linkedin"> <Linkedin /> </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;