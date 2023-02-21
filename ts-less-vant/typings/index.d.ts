/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    // 系统信息 + 胶囊信息
    systemInfo?: WechatMiniprogram.SystemInfo & WechatMiniprogram.ClientRect | {},
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}