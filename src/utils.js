import pathToRegexp from 'path-to-regexp';
import createBrowserHistory from 'history/createBrowserHistory';

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

const createHistory = (options) => {
  let history = {};
  history.listen = () => {};
  history.push = () => {};

  if (typeof document !== 'undefined') {
    history = createBrowserHistory(options);
  }

  return history;
}

export { matchRoute as matchRoute, createHistory as createHistory };

