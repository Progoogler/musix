const mongoose = require('mongoose');

class MongoPlug {

  constructor(model, schema) {
    this.collection = mongoose.model(model, schema);
  }

  save(input) {
    return this.collection.findById(input.id, (err, exists) => {
      if (err) throw err;
      if (exists) {
        return 'exists';
      } else {
        return new this.collection(input);
      }
    });
  }

}

module.exports = MongoPlug;