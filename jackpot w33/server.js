const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// 默认首页 = game.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`网站运行中: http://localhost:${PORT}`));
