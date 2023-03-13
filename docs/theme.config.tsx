import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="text-lg font-semibold">Theme Toggles</span>,

  project: {
    link: "https://github.com/AlfieJones/theme-toggles",
  },
  docsRepositoryBase: "https://github.com/AlfieJones/theme-toggles/docs",
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <span>
        Theme Toggles, build by{" "}
        <a
          className="text-blue-600 dark:text-blue-500 hover:dark:text-blue-400 hover:text-blue-800"
          href="https://ajones.uk/"
        >
          Alfie Jones
        </a>
      </span>
    ),
  },
};

export default config;
