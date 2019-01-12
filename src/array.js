const reduce = arr => {
  return arr.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value
    };
  }, {});
};

export { reduce };
