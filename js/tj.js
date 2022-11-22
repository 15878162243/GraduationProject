
	// 记录图片数据的下标
	let shu = 0
	let sui = () => {
		// 渲染
		for (let i = 1; i < 5; i++) {
			view(i, shu)
			shu += 6
		}
	}
	
	// 思路：逐一渲染每排6个，渲染完6个后就继续换下一排渲染，总渲染四排
	let view = (i, k) => {

		let atlas = document.getElementById(`atlas_${i}`)

		for (let j = 0 + k; j < 6 + k; j++) {
			
			// 渲染		下面不用做对比，高度自适应就好了
			atlas.innerHTML +=	`<div class="atlas-location" style="width: 293.7px;">
			
									<img class="jia" src="${atlas_arr1[j].url}" style="width: 293.7px;" />
									
									<div id="atlas-yc" class="ou">
									
										<div class="atlas-tub1">
											<img class="tubdx" src="images/tj_ax1.png" />
										</div>
										
										<div class="atlas-tub2">
											<div style="float: left;"><img class="tubdx1" src="images/tj_ax.png" /></div>
											<div style="float: left; margin-left: 2px;">${atlas_arr1[j].praise}</div>
										</div>
										
										<div class="atlas-tub3">
											<div style="float: left;"><img class="tubdx1" src="images/tj_ll.png" /></div>
											<div style="float: left; margin-left: 2px;">${atlas_arr1[j].browse}</div>
										</div>
									</div>	
								</div>`
		}
	
	}
	
	let atlas_location = document.getElementsByClassName('atlas-location')
	let atlas_yc = document.getElementById('atlas-yc')
	
	let chuf = () => {
		for (let i = 0; i < atlas_location.length; i++) {
			// 
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
			// 
			atlas_location[i].onmouseout = () => {
				let atlas_yc = atlas_location[i].children[1]
				atlas_yc.className = "ou"
			}
		}
	}	
	
	// 请求图片数据	函数位于ajas.js文件	
	ajax(1, sui, chuf)	
			