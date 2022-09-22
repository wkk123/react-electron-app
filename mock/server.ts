let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let Mock = require("mockjs");
const Random = Mock.Random;
app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

let router = express.Router();

// 以下就是模拟的接口--profile
router.use("/profiles", function (req, res) {
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

// 消息列表
router.use("/informationList", function (req, res) {
  let data = {
    "status": 200,
    "data":{},
    "msg":"请求成功",
  };

  data.data =Mock.mock({
    'list|1-100': [
      {
        "id|+1": 1,
        "finalTime": Random.pick([Random.now('yyyy/MM/dd'),Random.time('HH:mm')]),
        "nickname": "@cname(2,8)",
        "content|1-100": [
          {
            "id|+1": 1,
            "nickname": "@cname(2,8)",
            "index|+1": 0,
            "role":  Math.floor(Math.random()*10)%2===1?'caller':'callee',
            "callerTTS": '@cparagraph()',
            "calleeTTS": '@cparagraph()',
          }
        ],
      }
    ],
  })
  return res.json(data);
});

// 消息详情
router.use("/informationInfo", function (req, res) {
  let data = {
    "status": 200,
    "data":{},
    "msg":"请求成功",
  };
  let list = [];
  const total = Math.round(Math.random()*100);
  for (let i = 0; i < total; i++) {
    let mockItem = Mock.mock({
      "id": `id${Random.now('yyyyMMddHHmmss')}${i+1}`,
      "nickname": "@cname(2,8)",
      "callContent": "@cparagraph(2)",
      "index": i,
      "role": i%2===0?'caller':'callee',
    });
    list.push(mockItem);
  }
  data.data ={
    list: list,
    pageNum: 1,
    pageSize: 10,
    total: total,
  }
  return res.json(data);
});

// 通讯列表
router.use("/addressBook", function (req, res) {
  let data = {
    "status": 200,
    "data":{},
    "msg":"请求成功",
  };
  let list = [];
  const total = Math.round(Math.random()*100);
  for (let i = 0; i < total; i++) {
    let mockItem = Mock.mock({
      "id": `${(new Date()).getTime()}${i+1}`,
      "nickname": "@cname(2,8)",
      "signature":'@cparagraph()',
      'province': '@province', //生成一个省份
      'city': '@city', //生成一个市
      'isBoolean': '@boolean()'
    });
    list.push(mockItem);
  }
  data.data ={
    list: list,
    pageNum: 1,
    pageSize: 10,
    total: total,
  }
  return res.json(data);
});

app.use("/api", router)

app.listen(3001, () => {
  console.log('mock server is running')
})
