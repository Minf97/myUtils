// app.ts

// 
App<IAppOption>({
    globalData: {
        systemInfo:{}
    },
    onLaunch() {
        // 自定义头部所需的系统信息
        const systemInfo = wx.getSystemInfoSync();
        const menuInfo = wx.getMenuButtonBoundingClientRect();
        Object.assign(this.globalData.systemInfo, systemInfo, menuInfo);
        // 
    },
})