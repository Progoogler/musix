class Song {

  constructor(songJack) {
    this.songJack = songJack;
  }

  save(song) {
    return this.songJack.save(song)
  }

}

module.exports = Song;