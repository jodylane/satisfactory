export const setNestedObjectValues = (object, value, visited = new WeakMap(), response = {}) => {
  const isObject = (obj) => obj !== null && typeof obj === 'object';

  for (let k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
};

export const validZipcode = (zipcode) => {
  return zipcode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
};

export const validEmail = (email) => {
  return email.match(/^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
};

export const validPassword = (password) => {
  return password.match(/^.{6,}$/);
};
