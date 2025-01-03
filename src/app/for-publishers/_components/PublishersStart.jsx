"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const PublishersStart = () => {
  return (
    <section className="home-start">
      <div className="home-start__container _container">
        <div className="home-start__body">
          <h2 className="home-start__title">
            START MONETIZATION <br />
            RIGHT NOW
          </h2>
          <div className="home-start__content">
            <div className="home-start__col-01"></div>
            <div className="home-start__col-02"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishersStart;