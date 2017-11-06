const MongoPlug = require('./mongo_plug');
const songSchema = require('../app/song/song_schema');

class SongJack {

  constructor(plug) {
    switch (plug) {
      case 'mongo':
        this.plug = new MongoPlug('User', songSchema);
        break;
    }
  }

  save(input) {
    return this.plug.save(input);
  }

}

module.exports = SongJack;