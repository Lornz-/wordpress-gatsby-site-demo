// import generateColorPalette from '../utils/generateColorPalette';

const black = '#130c0e';
const white = '#ffffff';
const redOrange = '#CD2800';

const fireOrange100 = '#ff9379';
const fireOrange200 = '#ff8162';
const fireOrange300 = '#ff6f4c';
const fireOrange400 = '#ff5d36';
const fireOrange500 = '#ff4c20';
const fireOrange600 = '#e5441c';
const fireOrange700 = '#cc3c19';
const fireOrange800 = '#b23516';
const fireOrange900 = '#992d13';

const sandyBrown100 = '#f6c69f';
const sandyBrown200 = '#f4bc8f';
const sandyBrown300 = '#f3b37f';
const sandyBrown400 = '#f1a96f';
const sandyBrown500 = '#F0A060';
const sandyBrown600 = '#d89056';
const sandyBrown700 = '#c0804c';
const sandyBrown800 = '#a87043';
const sandyBrown900 = '#906039';

const blueCrayola100 = '#79bae3';
const blueCrayola200 = '#63aede';
const blueCrayola300 = '#4da3da';
const blueCrayola400 = '#3797d5';
const blueCrayola500 = '#218CD1';
const blueCrayola600 = '#1d7ebc';
const blueCrayola700 = '#1a70a7';
const blueCrayola800 = '#176292';
const blueCrayola900 = '#13547d';

const darkSienna100 = '#887370';
const darkSienna200 = '#745b58';
const darkSienna300 = '#604440';
const darkSienna400 = '#4c2d28';
const darkSienna500 = '#391611';
const darkSienna600 = '#33130f';
const darkSienna700 = '#2d110d';
const darkSienna800 = '#270f0b';
const darkSienna900 = '#220d0a';

const oldLavender100 = '#aca3a6';
const oldLavender200 = '#9f9498';
const oldLavender300 = '#918589';
const oldLavender400 = '#83767a';
const oldLavender500 = '#76676C';
const oldLavender600 = '#6a5c61';
const oldLavender700 = '#5e5256';
const oldLavender800 = '#52484b';
const oldLavender900 = '#463d40';

const colors = {
  black,
  white,
  redOrange,

  fireOrange100,
  fireOrange200,
  fireOrange300,
  fireOrange400,
  fireOrange500,
  fireOrange600,
  fireOrange700,
  fireOrange800,
  fireOrange900,

  sandyBrown100,
  sandyBrown200,
  sandyBrown300,
  sandyBrown400,
  sandyBrown500,
  sandyBrown600,
  sandyBrown700,
  sandyBrown800,
  sandyBrown900,

  blueCrayola100,
  blueCrayola200,
  blueCrayola300,
  blueCrayola400,
  blueCrayola500,
  blueCrayola600,
  blueCrayola700,
  blueCrayola800,
  blueCrayola900,

  darkSienna100,
  darkSienna200,
  darkSienna300,
  darkSienna400,
  darkSienna500,
  darkSienna600,
  darkSienna700,
  darkSienna800,
  darkSienna900,

  oldLavender100,
  oldLavender200,
  oldLavender300,
  oldLavender400,
  oldLavender500,
  oldLavender600,
  oldLavender700,
  oldLavender800,
  oldLavender900,
};

const alias = {
  background: colors.darkSienna500,
  primary: colors.blueCrayola500,
  text: colors.black,
};

export default { ...colors, ...alias };
