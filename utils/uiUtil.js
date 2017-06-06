
// 样式
export default class UiUtil {

  // loading
  static loading(time, title) {
    wx.showToast({
      title: title || "正在加载...",
      icon: "loading",
      duration: time
    });
  }

  // 成功
  static toast(text) {
    wx.showToast({
      title: text,
      icon: 'success',
      duration: 500
    });
  }

}

