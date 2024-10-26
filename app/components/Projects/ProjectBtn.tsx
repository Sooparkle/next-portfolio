"use client";

import React, { useState } from "react";
import styles from "./MainProjects.module.css";

interface Popup {
  [key: string]: string;
}

const ProjectBtn = ({
  liveDemo,
  popupURL,
}: {
  liveDemo: string;
  popupURL: Popup[];
}) => {
  const [popup, setPopUp] = useState(false);

  return (
    <div className={styles.projectBtnWrap}>
      <a 
        href={liveDemo} 
        target="_blank" 
        className={styles.liveDemoBtn}
      >
        Live Demo
      </a>

      <button
        onClick={() => setPopUp((prev) => !prev)}
      > 
        <svg 
        className={popup ? styles.popupPlusBtn : ""}
        width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
        </svg>
        {
          popup &&
          <div>
            {
              popupURL.map((linkObj, index) => {
                const [linkName, url] = Object.entries(linkObj)[0]; // Destructure to get the name and URL
                return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.popupLink}
                    >
                      {linkName}
                    </a>

                );
            })
            }
          </div>
          
        }
      </button>
    </div>
  );
};

export default ProjectBtn;
