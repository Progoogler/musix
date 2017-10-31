const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/vue'));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV !== 'production') {
  mongoose.connect('mongodb://localhost/musix');
} else {
  mongoose.connect(process.env.MONGOLAB_URI);
}

app.listen(app.get('port'), () => console.log('Serving in port:', app.get('port')));