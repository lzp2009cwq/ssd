<template>
    <view >
      <view class="topTitle">已发现 {{deviceNum}} 个蓝牙设备</view>
	<!-- <view class="topTitle" :style="{background: 'url('+imageURL+')'}"> -->
		<view class="bg-set" :style="{backgroundImage: 'url('+imageURL+')'}">
	<!-- 如果是设置background-image则写成：<view class="content" :style="{backgroundImage: 'url('+imageURL+')'}"> -->
	</view>

      
      <view class="connectedStatus">
		  <!-- //按键块的位置 -->
		 <button size="defult" type="primary" @click="scan" style="margin: 20upx 0;">扫一扫</button> 
        </view> 
		 <view v-if="connected" class="nowConcat">
			<!-- <button size="defult" type="defult" @click="getBLEDeviceServices" style="margin: 20upx 0;">测试打印</button> -->
		<button size="defult" type="defult" @click="getBLEDeviceCharacteristics" style="margin: 20upx 0;">测试打印</button>
		</view> 
      </view>  
    </view>
</template>

<script>
		import permision from "@/common/permission.js"
	import uniCollapse from "@/plugs/uni-ui/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "@/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {uniCollapse,uniCollapseItem}, 
	//uniapp component-全局引用和局部引用，compoents中注册
		data() {
			return {
				deviceList:[],
				deviceNum:0,
				activeNames:0,
				connected:false,
				connectedName:'',
				prevConnected:false,
				pDeviceInfo:{},
				 deviceId:'lzp',
				serviceId:'0000AE00-0000-1000-8000-00805F9B34FB',
				characteristics:'0000AE10-0000-1000-8000-00805F9B34FB',
				characteristicsnotify:'0000AE02-0000-1000-8000-00805F9B34FB',
				// deviceId:'',
				//serviceId:'',
				// characteristics:'',
								returnMessage:'',
								macAddress:"",
								macValue:'',
								equipment: [],
			imageURL: '/static/navigation/1122.png',					
			};
		},
		onLoad() {
			//初始蓝牙模块
		//	this.pDeviceInfo = uni.getStorageSync('deviceInfo');// uni.getStorageSync判断缓存中是否此存在这设备，this.pDeviceInfo自己定义的
			// this.pDeviceInfo = uni.getStorageSync('lzp');
		//	this.pDeviceInfo ={"deviceId":"5B:07:37:AB:01:12","name":"lzp","RSSI": -67,"localName":"lzp","advertisServiceUUIDs":["00001812-0000-1000-8000-00805F9B34FB"],"advertisData":{}};
			if(!this.pDeviceInfo){
				this.prevConnected = true;
			}
		 this.initBluetoothModule() 
	       this.onBLEConnectionStateChange()
		//	this.notifyBLECharacteristicValueChange()
		},
		methods:{
			
			
			onChange(event){
				this.activeNames =event.detail; 
			},
			initBluetoothModule(){
				//初始蓝牙模块
				uni.openBluetoothAdapter({
				  success:res=> {
					this.searchBlueList();
				  },
				  fail:err=>{
					console.log(err)
				  }
				})
			},
			searchBlueList(){
				//开启蓝牙搜索
				uni.startBluetoothDevicesDiscovery({
					success:res=> {
						setTimeout(()=>{
							this.getBlueList();
							  uni.showToast({
								title: '开启成功',
								icon: 'success',
								duration: 1000
							});
						},1000);
					},
				})
			},
			getBlueList(){
				//获取搜索列表
				uni.getBluetoothDevices({
				  success:res=> {
					let data = res.devices
					let tempList=[];
					data.map(device=>{
					  if(!!device.localName){
						tempList.push(device)
					  }
					});
					this.deviceNum = tempList.length;
					this.deviceList=tempList;
					this.listenBluetooth();
				  }
				});
			},
			listenBluetooth(){
				let tempList =this.deviceList;
				//监听蓝牙搜索
				uni.onBluetoothDeviceFound((res) => {
				  let flag = false;
				  res.devices.forEach(device => {
					if(!!device.localName){
					  tempList.push(device)
					  flag =true;
					}
				  })
				  if(flag){
					this.deviceList=tempList;
					this.deviceNum = this.deviceList.length;
				  }
			   })
			},
			connetBlue(type,index){
				let deviceIndex = index;
				let deviceInfo = this.deviceList[deviceIndex];
				if(this.prevConnected && type == 1){
				  deviceInfo = this.pDeviceInfo;
				} 
			let dId = deviceInfo.deviceId;
		 // let dId =index;
		console.log(deviceInfo)
		 console.log(dId)
				uni.showLoading({
				  title: '正在连接...', //提示的内容,
				  mask: true
				});
				//连接蓝牙
				console.log('连接蓝牙');
				uni.createBLEConnection({
				  deviceId: dId,//设备id
				  	
				  success: res=> {
					  console.log(deviceInfo.deviceId);
					  console.log(deviceInfo.name)
					uni.hideLoading();	
					  console.log(res.errCode)
					// if(res.errCode == 0){
						if (res.errMsg == "createBLEConnection:ok") {
					  this.connected = true;
					  this.connectedName=deviceInfo.name;
					   uni.setStorageSync('deviceInfo',deviceInfo);
					  this.deviceId=dId;
					
					  uni.showToast({
						title: '连接成功',
						icon: 'success',
						duration: 1000
					});
					}
					uni.stopBluetoothDevicesDiscovery({
					  success: res => {
						console.log('连接蓝牙成功之后关闭蓝牙搜索');
					  }
					})
				  },
				  fail:err=>{
					uni.showToast({
						title: '连接失败！', 
						icon: 'none', 
						duration: 2000
					  });
				  }
				})
			},
			conBlue(type,index){
							let deviceIndex = index;
							let deviceInfo = JSON.parse(index);
							if(this.prevConnected && type == 1){
							  deviceInfo = this.pDeviceInfo;
							} 
					let dId = deviceInfo.deviceId;
					console.log(deviceInfo)
			// let dId =index;
			 console.log(dId)
							uni.showLoading({
							  title: '正在连接...', //提示的内容,
							  mask: true
							});
							//连接蓝牙
							console.log('连接蓝牙');

							
							uni.createBLEConnection({
							  deviceId: dId,//设备id
							//  deviceId: 'lzp',//设备id	
							  success: res=> {
								  console.log(deviceInfo.deviceId);
								  console.log(deviceInfo.name)
				
								uni.hideLoading();	
								  console.log(res.errCode)
								// if(res.errCode == 0){
									if (res.errMsg == "createBLEConnection:ok") {
								  this.connected = true;
								  this.connectedName=deviceInfo.name;
								   uni.setStorageSync('deviceInfo',deviceInfo);
								  this.deviceId=dId;
								
								  uni.showToast({
									title: '连接成功',
									icon: 'success',
									duration: 1000
								});
								 this.openinfo();
								}
								uni.stopBluetoothDevicesDiscovery({
								  success: res => {
									console.log('连接蓝牙成功之后关闭蓝牙搜索');
								  },
						  
								})
							  },
							  fail:err=>{
								uni.showToast({
									title: '连接失败！', 
									icon: 'none', 
									duration: 2000
								  });
							  }
							})
							
							
	this.notifyBLECharacteristicValueChange()		
						},
			getBLEDeviceServices(){
				//获取服务
				uni.showLoading({
				  title: '正在打印...', //提示的内容,
				  mask: true
				});
				let deviceId = this.deviceId;
				uni.getBLEDeviceServices({
					deviceId,
					success: (res) => {	
					  for (let i = 0; i < res.services.length; i++) {
						 
						if (res.services[i].isPrimary) {
						  this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid);
						   console.log(res.services[i].uuid)
						}
					  }
					},
					fail: (res) => {
					  uni.hideLoading();
					  console.log("获取蓝牙服务失败：" + JSON.stringify(res))
					}
				})
			},
			//获取单个服务的特征值(characteristic)
			getBLEDeviceCharacteristics(deviceId, serviceId){
				if(!!this.characteristics && !!this.serviceId){
					this.PrintStr();
				 console.log(this.deviceId)
				 console.log(this.serviceId)
				 console.log(this.characteristics)
					return;
				}
				uni.getBLEDeviceCharacteristics({
					deviceId,
					serviceId,
					success: (res) => {
						uni.hideLoading();
						for (let i = 0; i < res.characteristics.length; i++) {
							let item = res.characteristics[i];
							
							if (item.properties.write && !this.serviceId) {
								this.serviceId = serviceId;
								this.characteristics = item.uuid;
								this.PrintStr();
							}
						}
						console.log('获取特征值')
					},
					fail(res) {
					uni.hideLoading();
					console.error('获取特征值失败：', res)
					}
				})
			},
			
					ab2hex(buffer) {
								  const hexArr = Array.prototype.map.call(
								    new Uint8Array(buffer),
								    function (bit) {
								      return ('00' + bit.toString(16)).slice(-2)
								    }
								  )
								  return hexArr.join('')
								},
					/**
					 * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
					 */

					
					/**
					 * 订阅操作成功后需要设备主动更新特征值的 value，才会触发 uni.onBLECharacteristicValueChange 回调。
					 */
					notifyBLECharacteristicValueChange() {
			let deviceId = this.deviceId;
			let serviceId = this.serviceId;
			let characteristicId = this.characteristicsnotify;
			// let notify = this.characteristicsnotify.properties.notify;
						uni.notifyBLECharacteristicValueChange({
							state: true, // 启用 notify 功能
							// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
							deviceId,
							// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
							serviceId,
							// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
							characteristicId,
							success(res) {
								console.log('notifyBLECharacteristicValueChange success:' + res.errMsg);
								console.log(JSON.stringify(res));
							}
						});
						// console.log(deviceId);
						//console.log(serviceId);
						// console.log(characteristicId);
						// console.log(notify);
						console.log('监听notify');
						this.readBLECharacteristicValue();
					},
								onBLECharacteristicValueChange(deviceId){
									uni.onBLECharacteristicValueChange((res)=> {
									  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
                                       let str=this.ab2hex(res.value);
									   console.log(str[0])
									   console.log(str[4])
									   console.log(str[5])
									 // console.log(this.ab2hex(res.value))
								
									  this.macAddress = res.deviceId;
									  this.macValue = this.ab2hex(res.value);
									  // this.readBLECharacteristicValue(this.deviceId)
									})	
								},
					
					/*
					onBLECharacteristicValueChange() {
						// 必须在这里的回调才能获取
						console.log('监听低功耗蓝牙设备的特征值变化事件');
						uni.onBLECharacteristicValueChange(characteristic => {
							console.log('监听低功耗蓝牙设备的特征值变化事件成功');
							console.log(JSON.stringify(characteristic));
							console.log(this.ab2hex(characteristic.value));
							this.valueChangeData = characteristic;
											// var array = new Uint8Array(characteristic.value);
											// console.log('包' + array);
						});
					},
*/
						// 读取设备二进制数据
readBLECharacteristicValue() {

			let deviceId = this.deviceId;
			let serviceId = this.serviceId;
			let characteristicId = this.characteristicsnotify;
			console.log(deviceId);
			console.log(serviceId);
			console.log(characteristicId);
			// this.onBLECharacteristicValueChange();
			// this.notifyBLECharacteristicValueChange();
			uni.readBLECharacteristicValue({
				// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
				deviceId,
				// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
				serviceId,
				// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
				characteristicId,
				success: res => {
					console.log('读取设备数据值成功');
					console.log(JSON.stringify(res));
					this.notifyBLECharacteristicValueChange();
				},
				fail(e) {
					console.log('读取设备数据值失败，错误码：' + e.errCode);
					if (e.errCode !== 0) {
						initTypes(e.errCode);
					}
				}
			});
			this.onBLECharacteristicValueChange();
		},
						/**
								 * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
								 */
								onBLEConnectionStateChange() {
									uni.onBLEConnectionStateChange(res => {
										// 该方法回调中可以用于处理连接意外断开等异常情况
										console.log(`蓝牙连接状态 -------------------------->`);
										console.log(JSON.stringify(res));
										if (!res.connected) {
											if(this.isStop) return ;
											console.log('断开低功耗蓝牙成功:');
											this.$set(this.disabled, 1, false);
											this.$set(this.disabled, 3, true);
											this.$set(this.disabled, 4, true);
											this.$set(this.disabled, 5, true);
											this.$set(this.disabled, 6, true);
											this.$set(this.disabled, 7, true);
											this.$set(this.disabled, 8, true);
											this.$set(this.disabled, 9, true);
											this.searchLoad = false;
											this.equipment = [];
											this.servicesData = [];
											this.characteristicsData = [];
											this.valueChangeData = {};
											toast('已经断开当前蓝牙连接');
										}
									});
								},
						PrintStr() {
							const buf = Buffer.from("this is test content!");
							// var bufferstr = buf.buffer; 
							var bufferstr = 'AAAA1234567890123457'
						                let buffer = new ArrayBuffer(20)  
						                let dataView = new DataView(buffer)  
						                dataView.setUint8(0, 0x41)  
						                dataView.setUint8(1, 0x41)  
						                dataView.setUint8(2, 0x41)  
						                dataView.setUint8(3, 0x41)  
						                dataView.setUint8(4, 0x31)  
						                dataView.setUint8(5, 0x32)  
						                dataView.setUint8(6, 0x33)  
						                dataView.setUint8(7, 0x34) 
										dataView.setUint8(8, 0x35)
										dataView.setUint8(9, 0x36)  
										dataView.setUint8(10, 0x37)  
										dataView.setUint8(11, 0x38)  
									    dataView.setUint8(12, 0x39)  
									    dataView.setUint8(13, 0x30)  
										dataView.setUint8(14, 0x31)  
									    dataView.setUint8(15, 0x32)  
										dataView.setUint8(16, 0x33)
										dataView.setUint8(17, 0x34)  
										dataView.setUint8(18, 0x35)  
										dataView.setUint8(19, 0x36) 
										  
						
							uni.writeBLECharacteristicValue({
								deviceId: this.deviceId,
								serviceId: this.serviceId,
								characteristicId: this.characteristics,
								value: buffer,
								success: function (res) {
									 uni.hideLoading();
								},
								fail: function (res) {
									console.log("数据发送失败:" + JSON.stringify(res))
								},
								complete: function (res) {
									
								},
							})
							 console.log(this.deviceId)
							 console.log(this.serviceId)
							 console.log(this.characteristics)
							 console.log(buffer)
							 this.notifyBLECharacteristicValueChange();
							  // this.onBLECharacteristicValueChange();
						},
						closeBluetoothAdapter(){
							uni.closeBluetoothAdapter({
							  success: res => {
								console.log('关闭蓝牙适配器');
							  }
							});
						},
						openinfo(){
						    uni.redirectTo({
						    url:'../connet/connet'
						    })
						},
						

						async scan() {
							// #ifdef APP-PLUS
							let status = await this.checkPermission();
							if (status !== 1) {
							    return;
							}
							// #endif
							uni.scanCode({
								success: (res) => {
									//let result = JSON.parse(res.result)
								//	let result = res.result
								let result=JSON.parse(res.result)
									console.log(result.deviceId)
								//	let myJSON = JSON.parse(result.deviceId)
								//	console.log(myJSON)
									/*
									 console.log(this.result)
									 console.log(this.result[0])
									  console.log(this.result[1])
									   console.log(this.result[2])
									    console.log(this.result[3])
										 console.log(this.result[4])
										  console.log(this.result[5])
										   console.log(this.result[6])
										   this.initBluetoothModule();
										   */
								//	  while(this.connected==false)
								//	  {
									this.pDeviceInfo=res.result;
										 this.conBlue(1,res.result)	 
										
								//	  }
										 
								},
								fail: (err) => {
									// 需要注意的是小程序扫码不需要申请相机权限
								}
							});
						}
						// #ifdef APP-PLUS
						,
						async checkPermission(code) {
							let status = permision.isIOS ? await permision.requestIOS('camera') :
								await permision.requestAndroid('android.permission.CAMERA');
						
							if (status === null || status === 1) {
								status = 1;
							} else {
								uni.showModal({
									content: "需要相机权限",
									confirmText: "设置",
									success: function(res) {
										if (res.confirm) {
											permision.gotoAppSetting();
										}
									}
								})
							}
							return status;
						}
						// #endif
		},
		onUnload() {
		  this.closeBluetoothAdapter();
		}
	}
</script>

<style >
.topTitle{font-size: 15px;padding: 5px;color: #999;text-align: center;}
.deviceListWrap{height: calc(100vh - 160rpx); }
.connectedStatus{position: fixed;bottom: 30rpx;left: 15%;width: 70%;text-align: center;border-top: 1px solid #eee;}
.concatBtn{text-align: center;margin: 30rpx 0;}
.nowConcat {margin: 5px 0;color: #333;}
.npConcat{margin: 5px 0;color: #999;}
.ft-color-red{margin: 5px 0;color: #999;}
.bg-set{position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: #f4f4f4;z-index: -1;}
</style>
