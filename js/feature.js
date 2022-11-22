			
	const frame = document.getElementById('frame')
	const dibu = frame.children[2]
	const atlas_inde = document.getElementById('atlas')
	const label = document.getElementById('label')
	const label_ul = label.children
	const label_ul_z = (label.children)[1].children
	
	
	// 用来存储点击标签后筛选出来的数据
	let arr1_1 = []
	// 提前筛选好当前符合标签的数据
	
	for (let i = 0; i < label_ul_z.length; i++) {
		label_ul_z[i].onclick = () => {
			// 每次点击后重新从第一个开始渲染,所以要重置atlas_loc指向
			atlas_loc = document.getElementById('atlas_1')
			// 每次点击标签，都要重置回原数组，用来筛选数据
			atlas_arr1 = atlas_arr2
			console.log(atlas_arr1)
			// 清除上一次标签的数据
			arr1_1 = []
			// 每次点击都要先把记录当前atlas_arr1的下标的变量
			shu = 0
			// 将底部的字重新隐藏ou
			dibu.className = 'tpdibu ou'
			
			//点击后清除4列div中的所有图片，并重置高度
			for (let v = 1; v < 5; v++) {
					let atlas = document.getElementById(`atlas_${v}`)
					atlas.innerHTML = ''
			}
			atlas_inde.style.height = '1131px'
			
			
			// 筛选对应标签的图片数据并储存
			if(label_ul_z[i].innerHTML === "全部"){
				sui()
				chuf()
			}else{
				for (let t = 0; t < atlas_arr1.length; t++) {
					if(atlas_arr1[t].sigm === label_ul_z[i].innerHTML){
						arr1_1[arr1_1.length] = atlas_arr1[t]
					}
				}
				// 然后改变数组全局变量，方便下面各个条件的使用该数组循环
				atlas_arr1 = arr1_1
				// 渲染该标签数组
				sui()
				chuf()
			}
		}
	}
	
	const atlas_1 = document.getElementById('atlas_1')
	const atlas_2 = document.getElementById('atlas_2')
	const atlas_3 = document.getElementById('atlas_3')
	const atlas_4 = document.getElementById('atlas_4')
	// 存放4列div每次添加图片的高度，用于对比出最低的高度顺序
	let hei_1, hei_2, hei_3, hei_4
	
	let atlas_loc = document.getElementById('atlas_1')
	
	// 渲染函数，参数 i：
	let view = (k,i) => {
		
		atlas_loc = document.getElementById(`atlas_${i}`)
		// 渲染
		atlas_loc.innerHTML +=	`<div class="atlas-location" style="width: 292.5px;h">
									
									<video src="${atlas_arr1[k].url}" muted="muted" loop="loop"></video>
										
									<div id="atlas-yc" class="ou">
										
										<div class="atlas-tub1">
											<img class="tubdx" src="images/tj_ax1.png" />
										</div>
											
										<div class="atlas-tub2">
											<div style="float: left;"><img class="tubdx1" src="images/tj_ax.png" /></div>
											<div style="float: left; margin-left: 3px;">${atlas_arr1[k].praise}</div>
										</div>
											
										<div class="atlas-tub3">
											<div style="float: left;"><img class="tubdx1" src="images/tj_ll.png" /></div>
											<div style="float: left; margin-left: 3px;">${atlas_arr1[k].browse}</div>
										</div>
										<div class="atlas-tub4">
											<div style="float: left;">${atlas_arr1[k].theme}</div>
										</div>
									</div>	
								</div>`
		
		
		
		// 循环所以数据后将底部的文字显示出来
		if((k+1) >= atlas_arr1.length){
			dibu.className = 'tpdibu'
		}	

	}
	
	
	// 存放当前要渲染的数据在数组内的下标
	let shu = 0
	// 每次渲染4个视频，循环渲染六次，一组一共24个视频
	let sui = () => {
		for (let q = 0; q < 6; q++) {
			for (let i = 1; i < 5; i++) {
				// 判段图片下标自增有没有超过数组的数据数量
				if(shu < atlas_arr1.length){
					view(shu,i)
					shu += 1
				}
			}
		}	
	}

	
	// 鼠标移入移出效果
	const atlas_location = document.getElementsByClassName('atlas-location')
	
	let atlas_yc = null		// 显示隐藏	
	let atlas_video = null	// 播放视频
	let atlas_tub1 = null	// 更换心型点赞图标
	
	let yingmu = document.getElementsByClassName('yingmu')
	let yingmu_src = null	// 视频
	let yingmu_sc = null	// 右上角删除

	let chuf = () => {
		for (let i = 0; i < atlas_location.length; i++) {
			// 移入显示
			atlas_location[i].onmousemove = () => {
				atlas_yc = atlas_location[i].children[1]
				
				atlas_yc.className = ""
				
				// 播放视频
				atlas_video = atlas_location[i].children[0]
				atlas_video.play()
				
				
				let atlas_tub1 = atlas_yc.children[0]
				let atlas_tub1_img = atlas_tub1.children[0]
					
				atlas_tub1.onmouseover = () => {
					atlas_tub1_img.src = "images/tj_ax2.png"
				}
					
				atlas_tub1.onmouseout = () => {
					atlas_tub1_img.src = "images/tj_ax1.png"
				}
				
			}
			// 移出隐藏
			atlas_location[i].onmouseout = () => {
				atlas_yc = atlas_location[i].children[1]
				atlas_yc.className = "ou"
				
				// 暂停视频
				atlas_video = atlas_location[i].children[0]
				atlas_video.pause() 
			}
			
			atlas_location[i].onclick = () => {
				// 获取到当前标签的视频链接
				let loy = atlas_location[i].children[0].src
				yingmu[0].innerHTML = `	<video controls>
											<source src="${loy}"  type="video/mp4">
										</video>
										<img src="images/sc.png" />
										`
				yingmu[0].className = "yingmu"
				
				yingmu_src = yingmu[0].children[0]
				yingmu_sc = yingmu[0].children[1]
				
				yingmu_sc.onclick = () => {
					yingmu_src.setAttribute('muted','muted')
					yingmu[0].className = "yingmu ou"
					yingmu[0].innerHTML = ''
				}
				
			}
			// <source src="${atlas_arr1[i].url}"  type="video/ogg">
		}
	}
	
	// 加载完后监听监听滚动条是否到达当前高度的最下面，到达后触发图片函数
	$(document).ready(function() {
		$(window).scroll(function() {
			if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
				// 判段图片下标自增有没有超过数组的数据数量，没超过就继续下一组的图片继续渲染，在改变宽度	
				if(shu < atlas_arr1.length){
					let $a = atlas_inde.offsetHeight
					atlas_inde.style.height = $a + 1131.3 + 'px'
					console.log(atlas_inde.style.height)
					sui()
					chuf()
				}
			}
		});
	});
	
	// 请求视频数据	函数位于ajas.js文件
	ajax(2, sui, chuf)	