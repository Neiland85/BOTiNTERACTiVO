// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const recommendationRoutes = require('./routes/recommendations');
const app = express();

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/recommendations', recommendationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

