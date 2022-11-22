
			const frame = document.getElementById('frame')
			const dibu = frame.children[2]
			const atlas_inde = document.getElementById('atlas')
			const label = document.getElementById('label')
			const label_ul = label.children
			const label_ul_z = (label.children)[1].children
			
			// 用来存储点击标签后筛选出来的数据
			let arr1_1 = []
			for (let i = 0; i < label_ul_z.length; i++) {
				label_ul_z[i].onclick = () => {
					// 每次点击后重新从第一个开始渲染,所以要重置atlas_loc指向
					atlas_loc = document.getElementById('atlas_1')
					// 每次点击标签，都要重置回原数组，用来筛选数据
					atlas_arr1 = atlas_arr2
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
					atlas_inde.style.height = '900px'
					
					// 筛选对应标签的图片数据并储存 然后重新渲染该标签数据数组，和移入移出事件函数
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
			
			// 存放图片框的高度
			let h = 0
			// 渲染函数，参数 i：
			let view = k => {
				// 每个图片应是高度比例的计算;
				h = Math.ceil(atlas_arr1[k].tp_height / (atlas_arr1[k].tp_width / 293.7)) // 向下取整
				// 渲染;		这里没有使用自适应高度是因为使用后下面的daodi函数并不能马上获取到对应的高度进行比较运算
				atlas_loc.innerHTML +=	`<div class="atlas-location" style="width: 293.7px;height: ${h}px; margin-bottom: 15px;">
					
											<img class="jia" src="${atlas_arr1[k].url}" style="width: 293.7px;" />
												
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
												
												<div class="atlas-tub4"></div>
											</div>	
										</div>`
				
				daodi(k)	
			
			}
			let daodi = (k) => {
				
				// 每次对比完都要清除上一次的对比数据
				hei_1 = hei_2 = hei_3 = hei_4 = 0
				// 得到高度，通过条件对比，4列从低到高的循序渲染，防止有单独一列过长的现象
				// 就是哪个的高度低，就渲染谁
				
				let bot = parseInt(atlas_1.children[0].style.marginBottom)

				for (let b = 0; b < atlas_1.children.length; b++) {
					hei_1 += atlas_1.children[b].offsetHeight + bot
				}
				for (let b = 0; b < atlas_2.children.length; b++) {
					hei_2 += atlas_2.children[b].offsetHeight + bot
				}
				for (let b = 0; b < atlas_3.children.length; b++) {
					hei_3 += atlas_3.children[b].offsetHeight + bot
				}
				for (let b = 0; b < atlas_4.children.length; b++) {
					hei_4 += atlas_4.children[b].offsetHeight + bot
				}
						
				let hei_loc = Math.min(hei_1, hei_2, hei_3, hei_4)
						
				switch (hei_loc){ 
					case hei_1:
						atlas_loc = document.getElementById("atlas_1") 
					break; 
						  
					case hei_2:
						atlas_loc = document.getElementById("atlas_2")
					break; 
						  
					case hei_3:
						atlas_loc = document.getElementById("atlas_3")
					break; 
						  
					case hei_4:
						atlas_loc = document.getElementById("atlas_4")
					break; 
				}
				
				// 这是滚动条的事件
				// 到达底部后判断四列中最高的值，然后赋值给整体高度。
				// 循环完整个数组所有数据后判断四列中最高的值，然后赋值给整体高度。
				if((k+1) >= atlas_arr1.length){
					let hei_loc = Math.max(hei_1, hei_2, hei_3, hei_4)
					console.log(hei_loc)
					atlas_inde.style.height = hei_loc + 'px'
					// 将底部的文字显示出来
					dibu.className = 'tpdibu'
				}	
			}	
			
			
			
			// 存放当前要渲染的数据在数组内的下标
			let shu = 0
			// 每次渲染4张图片，循环渲染六次，一组一共24张
			let sui = () => {
				for (let q = 0; q < 6; q++) {
					for (let i = 1; i < 5; i++) {
						// 判段图片下标自增有没有超过数组的数据数量
						if(shu < atlas_arr1.length){
							view(shu)
							shu += 1
						}
					}
				}	
			}
			
			
				
			
			// 鼠标移入移出效果
			const atlas_location = document.getElementsByClassName('atlas-location')
			
			
			let chuf = () => {
				for (let i = 0; i < atlas_location.length; i++) {
					// 移入显示
					atlas_location[i].onmousemove = () => {
						
						let atlas_yc = atlas_location[i].children[1]
						atlas_yc.className = ""
							
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
						let atlas_yc = atlas_location[i].children[1]
						atlas_yc.className = "ou"
					}
				}
			}
			
			
			
			// 加载完后监听监听滚动条是否到达当前高度的最下面，到达后触发图片函数
			$(document).ready(function() {
				$(window).scroll(function() {
					if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
						// 判段图片下标自增有没有超过数组的数据数量，没超过就继续下一组的图片继续渲染，在改变宽度	
						if(shu < atlas_arr1.length){
							let $a = atlas_inde.offsetHeight
							atlas_inde.style.height = $a + 1300 + 'px'
							sui()
							chuf()
						}
					}
				});
			});
			 
			// 请求图片数据	函数位于ajas.js文件
			ajax(3, sui, chuf)