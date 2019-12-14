const logger = () => (req, res, next) => {
  console.log(`[${new Date().toISOString()}]: ${req.method} - ${req.url}: ${req.body}`);
  next();
};

module.exports = {
  logger,
};