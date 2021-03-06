//index.js

// 引入其他包
import API from "../../data/api";
import Util from "../../utils/util";

//获取应用实例
const App = getApp();
const Config = App.Config;

Page({
  data: {
    arrayWhere: ['一饭', '二饭', '三饭', '四饭'], // 类型选择
    indexWhere: 0, // 类型选择

    arrayPrice: ['5蚊', '7蚊', '9蚊', '11蚊'], // 类型选择
    indexPrice: 0, // 类型选择

    currentTab: 0, //当前第几个选框

    winWidth: 0,
    winHeight: 0,

    resultImg: 'http://ww1.sinaimg.cn/large/8c2e9604gy1fgdp6j44n0j20hs0hsac4.jpg',
    resultName: 'waiyee'
  },


  onShow: function () {
    var that = this;

    //获取系统信息 
    Util.getSystemInfo()
      .then((data) => {
        // console.log(data)
        that.setData({
          winWidth: data.windowWidth,
          winHeight: data.windowHeight
        });
      })
  },

  // 选择地点
  bindPickerWhereChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexWhere: e.detail.value
    })
  },

  // 选择价格
  bindPickerPriceChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexPrice: e.detail.value
    })
  },

  // 滑动界面切换
  viewChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  // 点击tab切换
  swichTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    }
    else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  canteenConfirm: function () {
    var that = this;
    var Config = App.Config;
    var where = that.data.arrayWhere[that.data.indexWhere];
    var price = that.data.arrayPrice[that.data.indexPrice];
    // console.log(where);
    API.getCanteen(where, parseInt(price))
      .then((res) => {
        // console.log(res.data[0]);
        console.log(res.data[0].data)
        if (res.data[0].error == Config.ERR.NO_ERR) {
          that.setData({
            resultImg: res.data[0].data.img,
            resultName: res.data[0].data.name
          })
        } else {
          // console.log(res.data[0].data);
          Util.UI.loading(1000, res.data[0].data);
        }
      });
  }

})