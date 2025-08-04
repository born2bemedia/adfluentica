"use client";
import React, { useState, useEffect } from "react";
import "@/styles/contacts.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";


const ContactsMain = () => {
    return (
        <section className="contacts-main">
            <div className="contacts-main__container _container">
                <div className="contacts-main__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="contacts-main__title">DIRECT REQUESTS</motion.h2>
                    <div className="contacts-main__content">
                        <div className="contacts-main__col-01">
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="contacts-main__list">
                                <li className="contacts-main__item">
                                    Email:
                                    <Link href="mailto:info@adfluentica.com" className="contacts-main__link">info@adfluentica.com</Link>
                                </li>
                                <li className="contacts-main__item">
                                    Phone:
                                    <Link href="tel:+447482191976" className="contacts-main__link">+447482191976</Link>
                                </li>
                            </motion.ul>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="contacts-main__col-02">
                            <div className="contacts-main__col-03">
                                <div className="contacts-main__address">
                                    Office:
                                    <br />
                                    4th floor, office number 43, 1 Ropemaker St, London EC2V 9HT, UK
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.665343845818!2d-0.09082112388022226!3d51.5194281936967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cabc288d83b%3A0x16efe76810360f68!2s43%2C%201%20Ropemaker%20St%2C%20City%20of%20London%2C%20London%20EC2V%209HT%2C%20UK!5e0!3m2!1sen!2sua!4v1735921255053!5m2!1sen!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="contacts-main__col-04">
                                <div className="contacts-main__address">
                                    Registration:
                                    <br />
                                    1 Kings Avenue, London, United Kingdom, N21 3NA
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3197569546373!2d-0.08625492290296817!3d51.52569477181754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fd67523%3A0x1483f30997bfd8ba!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sua!4v1735921334821!5m2!1sen!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="contacts-main__image">
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactsMain;