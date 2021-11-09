const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const users = [];
const devices = [];
const workers = [];

app.post("/api/users/add", (req, res) => {
  // 구조분해를 통해 id 와 name을 추출
  const { id, pw, name, email, contact } = req.body

  //concat 함수는 자바스크립트에서 배열 함수이다. 새로운 데이터를 추가하면 새로운 배열로 반환한다.
  const user = users.concat({ id, pw, name, email, contact });

  res.json({ok: true, users: user})
});

app.post("/api/device/add", (req, res) => {
  // 구조분해를 통해 id 와 name을 추출
  const { serial, selected, wearer } = req.body

  //concat 함수는 자바스크립트에서 배열 함수이다. 새로운 데이터를 추가하면 새로운 배열로 반환한다.
  const device = devices.concat({ serial, selected, wearer });

  res.json({ok: true, devices: device})
});

app.post("/api/worker/add", (req, res) => {
  // 구조분해를 통해 id 와 name을 추출
  const { name, age, sex, weight, height, smart, wearable } = req.body

  //concat 함수는 자바스크립트에서 배열 함수이다. 새로운 데이터를 추가하면 새로운 배열로 반환한다.
  const worker = workers.concat({ name, age, sex, weight, height, smart, wearable });

  res.json({ok: true, workers: worker})
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))