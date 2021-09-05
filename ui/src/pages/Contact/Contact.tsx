import React from "react";

import { Page } from "../Page";
import { SmallLogo } from "../../components/Logos/SmallLogo";

import "./contact.css";

export const Contact = () => {
  return (
    <Page className="about">
      <SmallLogo />
      <div className="contact-links">
        {ContactLink("Twitter", "@solitary-studio", "")}
        {ContactLink("Github", "/solitary-studio", "")}
        {ContactLink("Are.na", "/solitary-studio", "")}
        {ContactLink("Email", "hello@solitary.studio", "")}
      </div>
    </Page>
  );
};

const ContactLink = (type: string, display: string, url: string) => {
  return (
    <a href={url} style={{ textDecoration: "none" }}>
      <div className="contact-link">
        {type} {display}
      </div>
    </a>
  );
};
