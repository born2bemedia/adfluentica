"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import Linkedin from "@/icons/social/Linkedin";
import X from "@/icons/social/X";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body _container">
          <div className="footer__content">
            <div className="footer__row-01">
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
              </div>
              <div className="footer__col-02">
                <ul className="footer__contacts">
                  <li className="footer__contact">
                    <Link href="tel:+447482191976" className="footer__contact-link">
                      Phone: <br />
                      +447482191976
                    </Link>
                  </li>
                  <li className="footer__contact">
                    <Link href="mailto:info@adfluentica.com" className="footer__contact-link">
                      Email: <br />
                      info@adfluentica.com
                    </Link>
                  </li>
                  <li className="footer__contact">
                    Registration: <br />
                    1 Kings Avenue, London, United Kingdom, N21 3NA</li>
                  <li className="footer__contact">
                    Office: <br />
                    4th floor, office number 43, 1 Ropemaker St, London EC2V 9HT, UK</li>
                </ul>
              </div>
              <div className="footer__col-03">
                <Link href="/" className="footer__logo"><img src="/images/logo-footer.svg" alt="logo" /></Link>
                <ul className="footer__socials">
                  <li className="footer__social">
                    <Link href="https://www.facebook.com/adfluenticacom/" className="footer__social-link _facebook"> <Facebook /> </Link>
                  </li>
                  {/* <li className="footer__social">
                    <Link href="#" className="footer__social-link _instagram"> <Instagram /> </Link>
                  </li> */}
                  <li className="footer__social">
                    <Link href="https://x.com/adfluentica/" className="footer__social-link _twitter"> <X /> </Link>
                  </li>
                  <li className="footer__social">
                    <Link href="https://linkedin.com/company/adfluentica/" className="footer__social-link _linkedin"> <Linkedin /> </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__row-02">
              <div className="footer__copy">
                © {currentYear} Youmedia LTD. Every connection matters. All rights reserved.
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;