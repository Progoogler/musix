module.exports = {
  name: String,
  artist: {
    first: String,
    last: String
  },
  spectrum: [],
  length: {
    hour: Number,
    minutes: Number,
    seconds: Number,
  },
  stanzas: Number,
  notesPerStanza: Number,
  instrument: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
};