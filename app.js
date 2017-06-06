//app.js

// 引入接口
import Util from "utils/util";
import Config from "config";

App({
  globalData: {
    userInfo: null,
    openId: null,
    code: null,
    sessionKey: null,
  },

  "Util": Util,
  "Config": Config,

  onLaunch() {
    var that = this;
    that.inIt();
  },

  // 小程序初始化
  inIt: function () {
    const that = this;
    that.Util.login() // 登录
      .then((res) => {
        // console.log(res);
        that.globalData.code = res.code;
        return that.Util.getUserInfo();  // 获取用户信息
      })
      .then((res) => {
        // console.log(res);
        that.globalData.userInfo = res.userInfo;
      })
  },


})

