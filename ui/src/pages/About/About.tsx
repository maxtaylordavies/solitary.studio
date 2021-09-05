import React from "react";
import { motion } from "framer-motion";

import { Page } from "../Page";
import { SmallLogo } from "../../components/Logos/SmallLogo";

import "./about.css";

export const About = () => {
  return (
    <Page className="about">
      <SmallLogo />
      <motion.div
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0 }}
      >
        <span className="solitary">Solitary</span> is a{" "}
        <a className="one-man" href="https://maxtaylordavi.es">
          one-man
        </a>{" "}
        studio based in London creating ✨art✨ through the medium of software{" "}
        <div className="square" />
      </motion.div>
    </Page>
  );
};
