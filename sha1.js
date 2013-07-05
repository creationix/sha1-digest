var crypto = require('crypto');

module.exports = function () {
  var sha1sum = crypto.createHash('sha1');
  return { update: update, digest: digest };

  function update(data) {
    sha1sum.update(data);
  }

  function digest() {
    return sha1sum.digest('hex');
  }
}
