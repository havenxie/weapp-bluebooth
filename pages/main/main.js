// main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        textValue: "",
        searchBtnLoading: false,
        searchBtnEnable: true,
        connectBtnLoading: false,
        connectBtnEnable: true,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    bindInput: function (e) {
        console.log(e.detail.value);
        this.setData({
            textValue: e.detail.value,
        });
    },

    bindConfirm: function (e) {
        console.log(e.detail.value);
        this.setData({
            textValue: e.detail.value,
        });
    },

    /************************/
    //初始化蓝牙适配器  
    openBluetooth: function () {
        wx.openBluetoothAdapter({
            success: function (res) {
                console.log(res.errMsg)
                // success  
                wx.showToast({
                    title: "初始化蓝牙适配器成功",
                    duration: 2000
                })
            },
        })
    },
    //关闭蓝牙模块  
    closeBluetooth: function () {
        wx.openBluetoothAdapter()

        wx.closeBluetoothAdapter({
            success: function (res) {
                // success  
                console.log( res)
            }
        })
    },
    //获取本机蓝牙适配器状态  
    getBluetoothAdapterState: function () {
        wx.getBluetoothAdapterState({
            success: function (res) { 
                //console.log(res)
                
            }
        })
    },
    //监听蓝牙适配器状态变化事件  返回蓝牙适配器是否可用 蓝牙适配器是否处于搜索状态
    onBluetoothAdapterStateChange: function () {
        wx.onBluetoothAdapterStateChange(function (res) {
            console.log(`adapterState changed, now is`, res)
        })
    },
    // 开始搜寻附近的蓝牙外围设备  
    startBluetoothDevicesDiscovery: function () {
        wx.startBluetoothDevicesDiscovery({
            //services:[],
            success: function (res) {
                console.log(res)
            }
        })
    },
    // 停止搜寻附近的蓝牙外围设备  
    stopBluetoothDevicesDiscovery: function () {
        wx.stopBluetoothDevicesDiscovery({
            success: function (res) {
                console.log(res)
            }
        })
    },
    //获取所有已发现的蓝牙设备  
    getBluetoothDevices: function () {
        wx.getBluetoothDevices({
            success: function (res) {
                // success  
                console.log(res)
            },
        })
    },
    //监听寻找到新设备的事件  
    onBluetoothDeviceFound: function () {
        wx.onBluetoothDeviceFound(function (res) {
            // callback  
            console.log(res)
        })
    },
    //根据 uuid 获取处于已连接状态的设备  
    getConnectedBluetoothDevices: function () {
        wx.getConnectedBluetoothDevices({
            success: function (res) {
                console.log(res)
            }
        })
    },
    //连接低功耗蓝牙设备  
    createBLEConnection: function () {
        wx.createBLEConnection({
            deviceId: 'AC:BC:32:C1:47:80',
            success: function (res) {
                // success  
                console.log(res)
            },
            fail: function (res) {
                // fail  
            },
            complete: function (res) {
                // complete  
            }
        })
    },
    //断开与低功耗蓝牙设备的连接  
    closeBLEConnection: function () {
        wx.closeBLEConnection({
            deviceId: 'AC:BC:32:C1:47:80',
            success: function (res) {
                console.log(res)
            }
        })
    },
    //监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等  
    onBLEConnectionStateChanged: function () {
        wx.onBLEConnectionStateChanged(function (res) {
            console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
        })
    },
    //获取蓝牙设备所有 service（服务）  
    getBLEDeviceServices: function () {
        wx.getBLEDeviceServices({
            deviceId: '48:3B:38:88:E3:83',
            success: function (res) {
                // success  
                console.log('device services:', res.services.serviceId)
            },
            fail: function (res) {
                // fail  
            },
            complete: function (res) {
                // complete  
            }
        })
    },
    //获取蓝牙设备所有 characteristic（特征值）  
    getBLEDeviceCharacteristics: function () {
        wx.getBLEDeviceCharacteristics({
            deviceId: '48:3B:38:88:E3:83',
            serviceId: 'serviceId',
            success: function (res) {
                // success  
            },
            fail: function (res) {
                // fail  
            },
            complete: function (res) {
                // complete  
            }
        })
    },
    /**************************/
    bindSearchBtn: function () {
        var that = this;
        this.setData({
            searchBtnLoading: !this.data.searchBtnLoading
        })
        if (this.data.searchBtnLoading) {
            
            wx.openBluetoothAdapter({
                success: function (res) {
                    //console.log(res);
                    wx.showToast({
                        title: "初始化蓝牙成功",
                        duration: 1500
                    })
                    //that.startBluetoothDevicesDiscovery();
                    that.getBluetoothAdapterState();
                },
                fail: function (err) {
                    wx.showModal({
                        title: "提示",
                        content: "打开蓝牙失败，请检查蓝牙是否打开",
                        showCancel: false,
                    });
                }
            })
        } else {
            this.stopBluetoothDevicesDiscovery();
            wx.closeBluetoothAdapter({
                success: function (res) {
                    //console.log(res);
                    
                },
                fail: function (err) {
                    //console.log(err.errMsg);
                }
            })
        }
    },
    bindSendMsgBtn: function () {
        console.log(this.data.textValue);
    }
})