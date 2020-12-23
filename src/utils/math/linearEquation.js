export const slope = (coordonates = []) => {
  if (coordonates.length === 2) {
    // (y2 - y1) / (x2 - x1)

    return (
      (coordonates[1].y - coordonates[0].y) /
      (coordonates[1].x - coordonates[0].x)
    );
  }

  return coordonates[0].y / coordonates[0].x;
};

export const findValueWithTwoPoint = (knowPoints = [], x) => {
  // Ax + B = y
  const A = slope(knowPoints);
  const B = knowPoints[0].y - A * knowPoints[0].x;

  return A * x + B;
};
