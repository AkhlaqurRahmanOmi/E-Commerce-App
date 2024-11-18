import { config } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";

// Step 1: Define custom tokens
const customTokens = createTokens({
  //@ts-ignore
  color: {
    primary: "#4CAF50",
    secondary: "#FF5722",
    backgroundLight: "#F9F9F9",
    backgroundDark: "#212121",
    textLight: "#FFFFFF",
    textDark: "#000000",
  },
  size: {
    small: 10,
    medium: 18,
    large: 30,
    true: 16, // Default size as "medium"
  },
  radius: {
    small: 4,
    medium: 8,
    large: 12,
    buttonRound: 20, // custom radius for buttons
  },
  zIndex: {
    small: 1,
    medium: 5,
    large: 10,
    true: 5, // Default zIndex as "medium"
  },
});

// Step 2: Extend themes
const customThemes = {
  light: {
    background: "$backgroundLight",
    text: "$textDark",
    primary: "$primary",
    secondary: "$secondary",
  },
  dark: {
    background: "$backgroundDark",
    text: "$textLight",
    primary: "$primary",
    secondary: "$secondary",
  },
};

// Step 3: Merge the extended configuration with the default Tamagui config
const extendedConfig = {
  ...config,
  tokens: {
    ...config.tokens,
    ...customTokens,
  },
  themes: {
    ...config.themes,
    ...customThemes,
  },
};

export const tamaguiConfig = createTamagui(extendedConfig);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
