	
	// 用于接收图片的相关数据
	let atlas_arr1 = ''
	// 保存好一个原数组备用
	let atlas_arr2 = ''
	// password : 密码(密码对应着对应的数据)
	// sui : 渲染
	// locat : 图片和视频的移入移出显示
	let ajax = (password,sui,chuf) => {
		
		// 初始化建立ajax_tj函数
		let ajax_tj = new XMLHttpRequest()
		// 建立请求
		ajax_tj.open('post', 'http://localhost:3000/test')
		// 设置post格式  get请求不用设置格式
		ajax_tj.setRequestHeader('Content-Type', 'application/json')
		// 此为json发送请求的格式
		ajax_tj.send(JSON.stringify({
			username: "guangying",
			password: `${password}`
		}))
		// 监听状态码	（状态码会根据后台的情况，表现为不同的值）
		ajax_tj.onreadystatechange = () => {
			if (ajax_tj.readyState === 4 && ajax_tj.status == 200 || ajax_tj.status == 304){
				// 本次请求通过，能读取到后台的数据
				// 把请求到达json文本规格的数据转为对象才能使用
				atlas_arr1 = JSON.parse(ajax_tj.responseText)
				atlas_arr2 = atlas_arr1
				if(sui != undefined){
					sui()
				}
				if(chuf != undefined){
				    chuf()
				}
			}
		}
	}