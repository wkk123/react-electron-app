let Mock = require("mockjs");
const Random = Mock.Random;
let express = require("express");
let router = express.Router();

//调用mock方法模拟数据

// 消息列表
router.use("/informationList", function (req:any, res:any) {
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
      "finalTime": Random.now('yyyy/MM/dd')||Random.time('HH:mm'),
      "nickname": "@chineseName(2,8)",
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

// 消息列表
router.use("/informationInfo", function (req:any, res:any) {
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
      "nickname": "@chineseName(2,8)",
      "callContent": "@cparagraph(2)",
      "index": i,
      "role": "caller"||'callee',
      'img': '@image',//生成一个随机的图片地址,
      'img-1': '@image("200x100", "#000", "#fff", "png", "Mock.js")', //生成一个200*100, 背景色#000，前景色#fff, 格式png, 文字mock.js的图片
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
router.use("/addressBook", function (req:any, res:any) {
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
      "nickname": "@chineseName(2,8)",
      "signature":'@cparagraph(1,30)',
      'region': '@region', //生成一个大区
      'province': '@province', //生成一个省份
      'city': '@city', //生成一个市
      'country': '@country', //一个县
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

module.exports = router;
