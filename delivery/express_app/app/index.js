const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  apiRoutes = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

/* TODO: uncomment when using database */
// if (process.env.NODE_ENV !== 'production') {
//   mongoose.connect('mongodb://localhost/musix');
// } else {
//   mongoose.connect(process.env.MONGOLAB_URI);
// }

app.use('/api', apiRoutes);

app.listen(app.get('port'), () => console.log('Serving in port:', app.get('port')));