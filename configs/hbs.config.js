const hbs = require('hbs');
const path = require('path');
require('./../helpers/helpers')(hbs);

hbs.registerPartials(path.join(__dirname, '../views/partials'));