const getRandomId = (userContext, events, done) => {
  const number = Math.floor((Math.random() * 10000000) + 1);
  userContext.vars.number = number;
  return done();
};

module.exports = {
  getRandomId,
};
