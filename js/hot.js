
		
	const loc1 = document.getElementsByClassName('loc1')[0]
	const loc_left = document.getElementsByClassName('loc_left')[0]
	const loc_right = document.getElementsByClassName('loc_right')[0]
	const hot_1_loc = document.getElementsByClassName('hot_1_loc')[0]
	
	let lot_loc = () => {
	
		atlas_arr1.forEach(v => {
			
			// 渲染:8次
			loc1.innerHTML += 	`<div class="loc">
									<div class="loc_k1"><img src="${v.url_1}" class="loc_tx" /></div>
									<div class="loc_k2">
										<div class="loc_k2_1">
											<li class="loc_k2_cu1">${v.praise}</li>
											<li class="loc_k2_cu2">人气</li>
										</div>
										<div  class="loc_k2_1">
											<li class="loc_k2_cu1">${v.browse}</li>
											<li class="loc_k2_cu2">作品</li>
										</div>
									</div>
									<div class="loc_k3">${v.name}</div>
									<div class="loc_k4">${v.xin} | 摄影师</div>
									<div class="loc_k5">让你遇见全世界的作品</div>
									<div class="loc_k6">
										<button class="custom-gz btn-2"><span>关注</span></button>
									</div>
									<div class="loc_k7">
										<img src="${v.url_2}" />
										<img src="${v.url_3}" />
										<img src="${v.url_4}" />
									</div>
								</div>`
		})
	}
	
	// 初始原地距离
	let loc_Left = 0
	// 每次增加的距离
	let loc1_jli = 1

	// 最终到达并返回的终点
	let tim = loc1.offsetWidth - 1250
	
	let hot = () => {
		loc_Left += loc1_jli
		loc1.style.marginLeft = -loc_Left + "px"
	
		a = Math.max(loc_Left, 0)
		a = Math.min(loc_Left, tim)
		
		if(a === 0 || a === tim){
			loc1_jli = -loc1_jli	
		}
		// loc_Left = -loc1.offsetLeft
	}
	// 左右按钮
	// 减完后一直要更新loc_Left，不然点击一次鼠标移出后，还是会回到原地
	let loc_le = () => loc_Left = -loc1.offsetLeft
	// 到尽头后一样要将加值取反
	// 然后边界赋值为1初始值，以免超出边界，赋值为1是为了不和判断产生冲突
	loc_left.onclick = () => {
		if((-loc_Left + 700) >= 0){
			FyAnimate(loc1, {
				marginLeft: "1px"
			}, 500, "Linear", 0)
			
			loc1_jli = -loc1_jli
			loc_Left = 1
		}
		if((-loc_Left + 700) <= 0 ){
			FyAnimate(loc1, {
				marginLeft: -loc_Left + 700 + "px",
			}, 500, "Linear", 0)
			
			setTimeout(loc_le,500)
		}
		
		// 判断是自增还是自减，然后根据对应方向取反
		loc1_jli = loc1_jli > 0	? -loc1_jli : loc1_jli
	}
	
	loc_right.onclick = () => {
		if((loc_Left + 700) >= 1710){
			FyAnimate(loc1, {
				marginLeft: -tim + "px"
			}, 500, "Linear", 0)
			
			loc1_jli = -loc1_jli
			loc_Left = tim - 1
		}
		if((loc_Left + 700) <= 1710 ){
			FyAnimate(loc1, {
				marginLeft: -loc_Left - 700 + "px"
			}, 500, "Linear", 0)
			
			setTimeout(loc_le,500)
		}
		// 判断是自增还是自减，然后根据对应方向取反
		loc1_jli = loc1_jli < 0	? -loc1_jli : loc1_jli
	}
	

	let dime = null
	
	let ds_1 = () => dime = setInterval(hot,13)
	let ds_2 = () => clearInterval(dime)
	
	// 当body全部加载完再执行，不然会造成加载冲突产生卡顿的现象
	body.onload = () => ds_1()
	
	// 使用不了动画帧，因为在内部时刻移动是的空隙间，动画帧一样在一直执行，产出抖动效果
	loc1.onmouseover = () => ds_2()
	
	// 鼠标移出也要清除定时器，防止鼠标提前在内部移出是多增加一个定时器
	loc1.onmouseout = () => {
		ds_2()
		ds_1()
	}
	
	hot_1_loc.onmouseover = () => {
		loc_left.style.left = "20px"
		loc_right.style.right = "20px"
	} 
	
	hot_1_loc.onmouseout = () => {
		loc_left.style.left = "-60px"
		loc_right.style.right = "-60px"
	}
	
	loc_left.onmouseover = () => ds_2()
	
	loc_right.onmouseover = () => ds_2()
	
	ajax(4, lot_loc)
		

			
