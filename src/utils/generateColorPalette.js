import { tint, shade } from 'polished';

export default (name, color) => {
  const result = {};

  for (let i = 1; i < 10; i += 1) {
    let newColor = color;

    if (i < 5) {
      newColor = tint((5 - i) * 0.1, color);
    }

    if (i > 5) {
      newColor = shade((i - 5) * 0.1, color);
    }

    result[`${name}${i * 100}`] = newColor;
  }

  console.info(result);

  return result;
};
