import { themes } from "@storybook/theming";
import "@pixel-ui/styles";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = isDarkMode ? themes.dark : themes.light;

export const parameters = {
  options: {
    storySort: {
      order: [
        "HTML|CSS",
        ["Quick Start", "Changelog", "Atoms", "Molecules", "Organisms"],
        "Components",
        ["Quick Start", "Changelog", "Atoms", "Molecules", "Organisms"],
        "*",
      ],
      locales: "en-US",
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
};
