export const lightTheme = {
  backgroundColor: 'white',
  fontColor: 'black',
};
export const blackTheme = {
  backgroundColor: '#1a1d24',
  fontColor: 'white',
};

export const theme = {
  color: blackTheme,
  // toogleTheme() {
  //   this.color = blackTheme;
  // },
};

export type Theme = typeof theme;
