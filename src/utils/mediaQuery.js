import { getValueAndUnit } from 'polished';

const baseValue = 16;

const generateLessThanValueString = (breakpoint) => {
  let [value, unit] = getValueAndUnit(breakpoint);

  if (unit === 'px' || unit === '') {
    value = (value - 0.02) / baseValue;

    unit = 'em';
  }

  return `${value}${unit}`;
};

const generateGreaterThanValueString = (breakpoint) => {
  let [value, unit] = getValueAndUnit(breakpoint);

  if (unit === 'px' || unit === '') {
    value /= baseValue;

    unit = 'em';
  }

  return `${value}${unit}`;
};

export const lessThanCondition = (breakpoint) => {
  const value = generateLessThanValueString(breakpoint);

  return `(max-width: ${value})`;
};

export const lessThan = (breakpoint) => {
  const condition = lessThanCondition(breakpoint);

  return `@media ${condition}`;
};

export const betweenCondition = (fromBreakpoint, toBreakpoint) => {
  const fromValue = generateGreaterThanValueString(fromBreakpoint);
  const toValue = generateLessThanValueString(toBreakpoint);

  return `(min-width: ${fromValue}) and (max-width: ${toValue})`;
};

export const between = (fromBreakpoint, toBreakpoint) => {
  const queryString = betweenCondition(fromBreakpoint, toBreakpoint);

  return `@media ${queryString}`;
};

export const greaterThanCondition = (breakpoint) => {
  const value = generateGreaterThanValueString(breakpoint);

  return `(min-width: ${value})`;
};

export const greaterThan = (breakpoint) => {
  const queryString = greaterThanCondition(breakpoint);

  return `@media ${queryString}`;
};

export default {
  lessThanCondition,
  lessThan,
  betweenCondition,
  between,
  greaterThanCondition,
  greaterThan,
};
