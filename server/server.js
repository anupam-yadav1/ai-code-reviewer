const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.get('/', (req, res) => {
  res.send('AI Code Reviewer API is running');
});
app.use('/api/review', reviewRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));