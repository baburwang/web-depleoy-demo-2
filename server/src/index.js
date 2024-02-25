const express = require('express');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username = '', password = '' } = req.body;
  if (username !== 'admin') {
    res.send({
      status: {
        code: 1,
        message: `${username} 用户不存在`
      }
    });
    return;
  }

  if (password !== '123456') {
    res.send({
      status: {
        code: 2,
        message: `密码错误`
      }
    });
    return;
  }

  res.send({
    status: {
      code: 0,
      message: '',
    },
    result: {
      id: 1,
      username: 'admin',
    }
  });
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080')
});