
Promise.allProperties = (object) => {
  const keys = Object.keys(object);

  return Promise.all(keys.map((k) => { return object[k] }))
    .then((values) => {
      return values.reduce((o, p, i) => {
        o[keys[i]] = p;
        return o;
      }, object);
    });
}
