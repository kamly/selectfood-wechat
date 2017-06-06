
/**
 * 基于Promise封装网络请求
 * 引入了https://github.com/tildeio/rsvp.js
 */



export default class NetUtil {

  // 发送Post请求，提交数据是json
  static postJson(url, data) {
    return NetUtil.requestJson(url, data, "post");
  }

  // 发送Get请求，提交数据是json
  static getJson(url, data) {
    return NetUtil.requestJson(url, data, "get");
  }

  // 发送请求
  static requestJson(url, data, method) {
    data = data || {};
    return new Promise(function (resolve, reject) {
      // wx.showNavigationBarLoading();
      wx.request({
        "method": method,
        "url": url,
        "data": data,
        "header": {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          //    wx.hideNavigationBarLoading();
          resolve(res);
        },
        fail: function (err) {
          // wx.hideNavigationBarLoading();
          reject(err);
        }
      })
    });
  }

  // 上传文件
  static uploadFile(url, filePath, name, data) {
    data = data || {};
    return new Promise(function (resolve, reject) {
      wx.uploadFile({
        "url": url,
        "filePath": filePath,
        "name": name,
        "formData": data,
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    });
  }
}
