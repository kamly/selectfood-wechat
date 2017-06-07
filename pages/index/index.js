//index.js

// 引入其他包
import API from "../../data/api";
import Util from "../../utils/util";

//获取应用实例
const App = getApp();

Page({
  data:{
    arrayWhere: ['一饭', '二饭', '三饭','四饭'], // 类型选择
    indexWhere: 0, // 类型选择

    arrayPrice: ['5蚊', '7蚊', '9蚊', '11蚊'], // 类型选择
    indexPrice: 0, // 类型选择
  }
})