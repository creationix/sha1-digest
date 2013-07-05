module.exports = function () {
  return { update: update, digest: digest };

  function update(data) {
    throw new Error("TODO: Implement update for browser");
  }

  function digest() {
    throw new Error("TODO: Implement digest for browser");
  }
};
