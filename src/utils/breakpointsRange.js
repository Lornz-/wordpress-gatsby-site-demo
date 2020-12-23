// vendors
import { greaterThanCondition } from './mediaQuery';
import { findValueWithTwoPoint } from './math/linearEquation';

const getClosestValueIndexBefore = (array, startIndex) => {
  const index = array
    .slice(0, startIndex)
    .reverse()
    .findIndex((e) => e !== undefined && e !== null);

  return startIndex - 1 - index;
};

const getClosestValueIndexAfter = (array, startIndex) => {
  const index = array
    .slice(startIndex)
    .findIndex((e) => e !== undefined && e !== null);

  return startIndex + index;
};

const generateValueList = (values, breakpoints, minLength = undefined) => {
  if (values.length > breakpoints.length)
    throw new Error(`They can't be more values then breakpoints`);

  let result = values;

  if (typeof values === 'number') {
    result = [values];
  }

  result = result.map((value, index) => {
    let res = value;

    if (value === undefined) {
      const i1 = getClosestValueIndexBefore(values, index);

      const i2 = getClosestValueIndexAfter(values, index);

      res = findValueWithTwoPoint(
        [
          { x: breakpoints[i1], y: values[i1] },
          { x: breakpoints[i2], y: values[i2] },
        ],
        breakpoints[index]
      );
    }

    return res;
  });

  if (values.length === 2) {
    const x1 = breakpoints[0];
    const y1 = values[0];
    const x2 = breakpoints[breakpoints.length - 1];
    const y2 = values[1];

    result = breakpoints.map((breakpoint, index) => {
      if (index === 0) return values[0];

      if (index === breakpoints.length - 1) return values[1];

      return findValueWithTwoPoint(
        [
          { x: x1, y: y1 },
          { x: x2, y: y2 },
        ],
        breakpoint
      );
    });
  }

  if (minLength) {
    result = result.concat(
      Array(minLength - result.length).fill(result[result.length - 1])
    );
  }

  return result;
};

const buildPropertyString = (value, base, unit) => {
  return `${value / base}${unit}`;
};

/**
 *
 * @param {[{prop: string, sizes: [number],unit: string, bases: [number]}]} properties
 * @param {[number]} breakpoints
 * @param {*} options
 */
export default (properties = [], breakpoints, options = {}) => {
  const result = {};

  const params = {
    bases: 16,
    unit: 'rem',
    smallestBreakpoint: 320,
    debug: false,
    ...options,
  };

  const breakpointList = [params.smallestBreakpoint, ...breakpoints];

  const propertiesList = properties.map((el) => {
    const { prop, unit = params.unit } = el;
    let { sizes, bases = params.bases } = el;

    sizes = generateValueList(sizes, breakpointList);
    bases = generateValueList(bases, breakpointList, sizes.length);

    return { prop, bases, unit, sizes };
  });

  breakpointList.forEach((breakpoint, index) => {
    if (index === 0) {
      propertiesList.forEach(({ prop, sizes, unit, bases }) => {
        result[prop] = buildPropertyString(sizes[index], bases[index], unit);
      });
    }

    if (index > 0) {
      const obj = {};

      propertiesList.forEach(({ prop, sizes, unit, bases }) => {
        if (!sizes[index] || !bases[index]) return;

        obj[prop] = buildPropertyString(sizes[index], bases[index], unit);
      });

      result[`@media ${greaterThanCondition(breakpoint)}`] = obj;
    }
  });

  if (params.debug) console.log('result : ', result);

  return result;
};
