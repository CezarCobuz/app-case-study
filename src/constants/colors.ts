const palette = {
  transparent: "transparent",
  royalBlue: "#2D50E6",
  mercury: "#E5E5E5",
  lemonGrass: "#96948A",
  madras: "#2C2302",
  peat: "#6B6651",
  whiteSolid: "#FFFFFF",
  blackSolid: "#000000",
};

export const colors = {
  light: {
    transparent: palette.transparent,
    text: palette.blackSolid,
    background: palette.mercury,
    primaryButton: palette.royalBlue,
    tint: palette.royalBlue,
    tabIconDefault: palette.lemonGrass,
    tabIconSelected: palette.royalBlue,
    textPrimary: palette.madras,
    textFaded: palette.peat,
    contentBackground: palette.whiteSolid,
    dark: palette.blackSolid,
  },
  dark: {
    // TODO: Add corresponding dark colors
    transparent: palette.transparent,
    text: palette.blackSolid,
    background: palette.mercury,
    primaryButton: palette.royalBlue,
    tint: palette.royalBlue,
    tabIconDefault: palette.lemonGrass,
    tabIconSelected: palette.royalBlue,
    textPrimary: palette.madras,
    textFaded: palette.peat,
    contentBackground: palette.whiteSolid,
    dark: palette.blackSolid,
  },
};
