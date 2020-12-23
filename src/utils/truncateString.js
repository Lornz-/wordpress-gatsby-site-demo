export default (str, limit, after) => {
  if (!str || !limit) return;
  // eslint-disable-next-line consistent-return
  return str.trim().substr(0, limit) + (after || '');
};
