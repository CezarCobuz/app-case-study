const palette = {
  transparent: "transparent",
  royalBlue: "#2D50E6",
  mercury: "#E5E5E5",
  lemonGrass: "#96948A",
  madras: "#2C2302",
  peat: "#6B6651",
  cottonSeed: "#C0BEB8",
  pampas: "#F4F3EF",
  cararra: "#EAE9E3",
  // TODO: Use for filling default chevron
  dawn: "#AAA8A1",
  whiteSolid: "#FFFFFF",
  blackSolid: "#000000",
};

export const colors = {
  light: {
    transparent: palette.transparent,
    text: palette.blackSolid,
    background: palette.mercury,
    primaryButton: palette.royalBlue,
    disabledButton: palette.cottonSeed,
    tint: palette.royalBlue,
    tabIconDefault: palette.lemonGrass,
    tabIconSelected: palette.royalBlue,
    textPrimary: palette.madras,
    textFaded: palette.peat,
    fadedAccent: palette.pampas,
    dimAccent: palette.pampas,
    contentBackground: palette.whiteSolid,
    dark: palette.blackSolid,
  },
  dark: {
    // TODO: Add corresponding dark colors
    transparent: palette.transparent,
    text: palette.blackSolid,
    background: palette.mercury,
    primaryButton: palette.royalBlue,
    disabledButton: palette.cottonSeed,
    tint: palette.royalBlue,
    tabIconDefault: palette.lemonGrass,
    tabIconSelected: palette.royalBlue,
    textPrimary: palette.madras,
    textFaded: palette.peat,
    fadedAccent: palette.pampas,
    dimAccent: palette.pampas,
    contentBackground: palette.whiteSolid,
    dark: palette.blackSolid,
  },
};
