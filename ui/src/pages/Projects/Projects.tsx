import React, { useState } from "react";
import { motion } from "framer-motion";

import { Page } from "../Page";
import { SmallLogo } from "../../components/Logos/SmallLogo";
import { ReactComponent as Arrow } from "../../arrow.svg";
import { ReactComponent as JikjiLogo } from "./logos/jikji.svg";
import { ReactComponent as ProductsLogo } from "./logos/products.svg";
import { ReactComponent as SubprimeLogo } from "./logos/subprime.svg";

import "./projects.css";

export const Projects = () => {
  const [activeProjectName, setActiveProjectName] = useState("");

  const renderProject = (
    name: string,
    url: string,
    colors: string[],
    logo: any,
    _new?: boolean
  ) => {
    return (
      <ProjectCard
        name={name}
        url={url}
        colors={colors}
        logo={logo}
        active={activeProjectName === name}
        activate={() => setActiveProjectName(name)}
        deactivate={() => setActiveProjectName("")}
        _new={_new}
      />
    );
  };

  return (
    <Page className="projects">
      <SmallLogo />
      <div className="projects-body">
        <motion.div
          className="projects-year"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="year">2021</div>
          <hr className="year-underline" />
          <div className="project-cards">
            {renderProject(
              "jikji.club",
              "https://jikji.club",
              ["#DC0084", "#FFF5F5", "#FECECE"],
              <JikjiLogo
                className="project-logo"
                style={{ height: 35, width: 35 }}
              />,
              true
            )}
            {renderProject(
              "subprime.fun",
              "https://subprime.fun",
              ["#B87B40", "#FFF5EB", "#FBDBBD"],
              <SubprimeLogo className="project-logo" />
            )}
          </div>
        </motion.div>
        <motion.div
          className="projects-year"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="year">2020</div>
          <hr className="year-underline" />
          <div className="project-cards">
            {renderProject(
              "products.gal...",
              "https://products.gallery",
              ["#00C9A5", "#EFFFF9", "#CAFFEC"],
              <ProductsLogo className="project-logo" />
            )}
          </div>
        </motion.div>
      </div>
    </Page>
  );
};

interface CardProps {
  name: string;
  url: string;
  colors: string[];
  logo: any;
  active: boolean;
  activate: () => void;
  deactivate: () => void;
  _new?: boolean;
}

const ProjectCard = ({
  name,
  url,
  colors,
  logo,
  active,
  activate,
  deactivate,
  _new,
}: CardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="project-card-link"
      onMouseEnter={() => setTimeout(() => activate(), 100)}
      onMouseLeave={() => deactivate()}
    >
      <motion.div
        className="project-card"
        style={{
          color: colors[0],
          background: `linear-gradient(30deg, ${colors[1]}, #F4F4F4)`,
        }}
        whileHover={{
          background: `linear-gradient(30deg, ${colors[2]}, #F4F4F4)`,
          scale: 1.05,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <div className="project-name">
          {logo} {name}
        </div>
        <Arrow className="project-arrow" stroke={colors[0]} fill={colors[0]} />
        {_new && (
          <div className={`project-new-badge ${active ? "active" : ""}`}>
            New! ✨
          </div>
        )}
      </motion.div>
      <div
        className={`project-card-shadow ${active ? "active" : ""}`}
        style={{ background: colors[0] }}
      />
    </a>
  );
};
