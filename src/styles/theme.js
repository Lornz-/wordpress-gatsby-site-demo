// import { darken } from 'polished';
// import colors from './colors';
// import { fontFamilies, fontWeights, lineHeights } from './typography';
// import breakpoints from './breakpoints';
// import layouts from './layouts';

// const theme = {
//   colors: {
//     text: colors.charcoal,
//     primary: colors.turtleGreen,
//     secondary: colors.paleOliveGreen,
//     tertiary: colors.charcoal,
//     disabled: colors.charcoal100,
//     error: colors.red,
//     ...colors,
//   },
//   fonts: {
//     ...fontFamilies,
//   },
//   fontWeights: {
//     body: fontWeights.medium,
//     heading: fontWeights.semibold,
//     ...fontWeights,
//   },
//   lineHeights,
//   breakpoints,
//   layouts,
//   textInput: {},
//   checkedInput: {},
// };

// const heading = {
//   fontWeight: theme.fontWeights.heading,
// };

// const styles = {
//   root: {
//     color: theme.colors.text,
//     fontFamily: theme.fonts.body,
//     lineHeight: theme.lineHeights.body,
//     fontWeight: theme.fontWeights.body,
//   },
//   h1: {
//     ...heading,
//     fontSize: [22 / 16, 50 / 22],
//     lineHeight: [26 / 22, 56 / 50],
//   },
//   h2: {
//     ...heading,
//     fontSize: [18 / 16, 34 / 22],
//     lineHeight: [22 / 18, 46 / 34],
//   },
//   h3: {
//     ...heading,
//     fontSize: [1, 26 / 22],
//     lineHeight: [18 / 16, 36 / 26],
//   },
//   h4: {
//     ...heading,
//     fontSize: [1, 22 / 22],
//     lineHeight: [1, 26 / 22],
//   },
//   h5: {},
//   h6: {},
//   p: {
//     color: theme.colors.text,
//     fontSize: 1.5,
//     fontFamily: theme.fonts.body,
//     fontWeight: theme.fontWeights.body,
//     lineHeight: theme.lineHeights.body,
//   },
// };

// const buttons = {
//   bg: theme.colors.secondary,
//   borderColor: theme.colors.secondary,
//   color: theme.colors.charcoal,
//   fontWeight: theme.fontWeights.body,
//   lineHeight: theme.lineHeights.body,
//   borderThin: 2,
//   outlineColor: theme.colors.charcoal,
//   outlined: {
//     color: theme.colors.secondary,
//     borderColor: theme.colors.secondary,
//     bg: 'transparent',
//     hover: {
//       bg: theme.colors.secondary,
//       borderColor: theme.colors.secondary,
//       color: theme.colors.charcoal,
//     },
//   },
//   hover: {
//     bg: theme.colors.paleOliveGreen600,
//     borderColor: theme.colors.paleOliveGreen600,
//   },
//   primary: {
//     color: theme.colors.white,
//     bg: theme.colors.primary,
//     borderColor: theme.colors.primary,
//     outlined: {
//       color: theme.colors.primary,
//       border: theme.colors.primary,
//       bg: 'transparent',
//       hover: {
//         color: theme.colors.white,
//         bg: theme.colors.primary,
//         borderColor: theme.colors.primary,
//       },
//     },
//     hover: {
//       bg: theme.colors.turtleGreen600,
//       borderColor: theme.colors.turtleGreen600,
//     },
//   },
//   white: {
//     color: theme.colors.charcoal,
//     bg: theme.colors.white,
//     borderColor: theme.colors.white,
//     outlined: {
//       color: theme.colors.white,
//       bg: 'transparent',
//       borderColor: theme.colors.white,
//       hover: {
//         color: theme.colors.charcoal,
//         bg: theme.colors.white,
//         borderColor: theme.colors.white,
//       },
//     },
//     hover: {
//       bg: darken(0.2, theme.colors.white),
//       borderColor: darken(0.2, theme.colors.white),
//     },
//   },
// };

// const card = {
//   bg: theme.colors.primary,
//   color: theme.colors.secondary,
//   icon: {
//     bg: 'transparent',
//     borderThin: 2,
//     borderColor: theme.colors.secondary,
//   },
//   hover: {
//     icon: { bg: theme.colors.secondary, color: theme.colors.charcoal },
//   },
//   primary: {
//     bg: theme.colors.tertiary,
//     color: theme.colors.white,
//     icon: {
//       borderColor: theme.colors.white,
//     },
//     hover: {
//       icon: { bg: theme.colors.white, color: theme.colors.primary },
//     },
//   },
// };

// const hero = {
//   bg: theme.colors.charcoal,
//   altBg: theme.colors.primary,
//   color: theme.colors.secondary,
//   primary: {
//     bg: theme.colors.primary,
//     altBg: theme.colors.charcoal,
//     color: theme.colors.white,
//   },
// };

// const heroHome = {
//   bg: theme.colors.secondary,
//   altBg: theme.colors.charcoal,
//   color: theme.colors.white,
// };

// const itemCard = {
//   bg: theme.colors.tertiary,
//   color: theme.colors.secondary,
//   fontSize: styles.h2.fontSize,
//   fontWeight: theme.fontWeights.light,
//   lineHeight: styles.h2.lineHeight,
// };

// const dataTable = {
//   bg: theme.colors.veryLightPink500,
//   color: styles.p.color,
//   fontWeight: styles.p.fontWeight,
//   lineHeight: styles.p.lineHeight,
//   borderColor: theme.colors.white,
//   padding: 1.2,
//   textAlign: 'left',
//   header: {
//     bg: theme.colors.veryLightPink800,
//     color: theme.colors.white,
//   },
//   alt: {
//     bg: theme.colors.white,
//     borderColor: theme.colors.veryLightPink500,
//   },
//   row: {
//     height: 3,
//   },
// };

// const accordionItem = {
//   bg: theme.colors.white,
//   color: theme.colors.primary,
//   fontSize: styles.p.fontSize,
//   fontWeight: styles.p.fontWeight,
//   lineHeight: styles.p.lineHeight,
//   borderThin: 2,
//   space: 1.5,
//   panel: {
//     bg: '#ebebeb',
//     color: theme.colors.tertiary,
//     spaceBottom: 2,
//   },
// };

// const breadcrumb = {
//   color: theme.colors.charcoal100,
// };

// const label = {
//   color: theme.colors.text,
//   fontWeight: theme.fontWeights.body,
//   lineHeight: theme.lineHeights.body,
// };

// const formHelperText = {
//   color: theme.colors.charcoal300,
//   fontWeight: theme.fontWeights.body,
//   lineHeight: theme.lineHeights.body,
// };

// const input = {
//   color: theme.colors.text,
//   fontWeight: theme.fontWeights.body,
//   lineHeight: theme.lineHeights.body,
//   borderColor: theme.colors.primary,
//   borderThin: 2,
//   focusHover: {
//     borderColor: theme.colors.turtleGreen900,
//   },
// };

// const checkedInput = {
//   size: 26,
//   marginRight: 16,
//   color: theme.colors.text,
//   fontWeight: theme.fontWeights.body,
//   lineHeight: theme.lineHeights.body,
//   borderThin: 2,
//   borderColor: theme.colors.primary,
//   backgroundColor: theme.colors.white,
//   focus: {
//     borderColor: theme.colors.turtleGreen900,
//   },
//   checked: {
//     size: 14,
//     backgroundColor: theme.colors.charcoal,
//   },
// };

// export default {
//   ...theme,
//   styles,
//   card,
//   hero,
//   heroHome,
//   itemCard,
//   buttons,
//   dataTable,
//   accordionItem,
//   breadcrumb,
//   label,
//   formHelperText,
//   input,
//   checkedInput,
// };
