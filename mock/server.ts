let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let Mock = require("mockjs")
app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

let router = express.Router();

// 测试
app.get('/', function (req, res) {
  res.send('hello world');
});

// router.use("/test",require('./test'));

// 以下就是模拟的接口--profile
router.use("/api/profiles", function (req, res) {
  console.log('req.body', req.body);
  //调用mock方法模拟数据
  let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  }
  );
  return res.json(data);
})

app.use("/api", router)

app.listen(3001, () => {
  console.log('mock server is running')
})
