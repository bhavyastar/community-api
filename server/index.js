const express = require('express')
const app = express();
const PORT = process.env.PORT || 3233;
const posts = require('./posts')

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));