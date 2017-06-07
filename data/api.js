
let Util = getApp().Util;
let Config = getApp().Config;

export default class API {

  /**
  * 获取用户创建相册集，参与的相册集 （每个相册选最新的3个发表）
  */
  static getCanteen(where, price) {
    return Util.NET.postJson(`${Config.HOST}/getCanteen`, { where: where, price: price });
  }

}

