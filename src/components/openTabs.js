import React from "react";
import { useEffect } from 'react';
const OpenTabs = () => {

//TODO add Username & Password to .env and then process them for automatic inject, if that is possible.
const websites = [
  {url: "https://shineforth.harvestapp.com/time"},
  {url: "https://shineforth.atlassian.net/jira/your-work"},
  {url: "https://www.figma.com/file/j8OIo6RKjcXTwc2UZf4c0X/Condo-World.com-shineforth-design-homepage?node-id=780%3A23188"},
  {url: "https://app.contentful.com/spaces/vecsxsx4go2y/home"}
];
useEffect(()=> {
  handleOpenTabs();
})

const handleOpenTabs = () => {
 websites.forEach((website) => {
   window.open(website.url, "_blank")
 })
}

  return (
    <>
    <div>
      <button onClick={() => handleOpenTabs()}>Open tabs</button>
    </div>
    </>
  )
}

export default OpenTabs;