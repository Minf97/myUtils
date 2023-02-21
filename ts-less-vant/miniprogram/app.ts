// app.ts

// 
App<IAppOption>({
    globalData: {
        systemInfo: null,
    },
    onLaunch() {
    // 自定义头部所需的系统信息
    const systemInfo = wx.getSystemInfoSync();
    const menuInfo = wx.getMenuButtonBoundingClientRect();
    this.globalData.systemInfo = Object.assign({}, systemInfo, menuInfo);
    
},
    
})