// util.js

// 引入其他包
import { Promise } from '../libs/rsvp-latest.min';
import netUtil from "netUtil.js";
import uiUtil from "uiUtil.js";

// 登录
function login() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      },
    })
  });
}

// 获取用户信息
function getUserInfo() {
  return new Promise(function (resolve, reject) {
    wx.getUserInfo({
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      },
    });
  });
}

// 获取系统信息 
function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    wx.getSystemInfo({
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      },
    });
  });
}



module.exports = {
  "NET": netUtil,
  "UI": uiUtil,
  "login": login,
  "getUserInfo": getUserInfo,
  "getSystemInfo": getSystemInfo,
}


