import pathToRegexp from 'path-to-regexp';

const matchRoute = (pattern = '', location = {}) => {
  const { pathname = '', search } = location;
  const keys = [];
  const params = {};

  const reg = pathToRegexp(pattern, keys);
  const isMatch = reg.test(pathname);

  if (!isMatch) return false;

  const tokens = reg.exec(pathname);

  keys.forEach((key, i) => {
    params[key.name] = tokens[i + 1]
  });

  return {
    params,
    search
  }
}

export { matchRoute as matchRoute };

