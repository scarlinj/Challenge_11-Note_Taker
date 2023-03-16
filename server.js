const routes = require('./routes');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
// const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
// const { notes } = require('./public/lib/notes')

// parse incoming string or array data
app.use(express.urlencoded({
    extended: true
}));
// parse incoming JSON data
app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});