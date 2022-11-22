	const body = document.getElementsByTagName('body')[0]
	const pic = document.getElementsByClassName('pic')[0]
	const picLi = document.querySelectorAll('.pic li')
	const tabLi = document.querySelectorAll('.tab li')
	const liOn = document.getElementsByClassName('on')[0]
	const prev = document.getElementsByClassName('prev')[0]
	const next = document.getElementsByClassName('next')[0]
	
	let index = 0
	let date = new Date()

	// 右边按钮
	next.onclick = () => {
		fn()
	}
	let fn = () => {
		// 取最新时间 - 之前的时间 小于1秒钟 按钮不执行
		if (new Date() - date < 500) return;
		index++
		
		if (index !== picLi.length - 1) {
			// tabli的黄色的按钮left值
			FyAnimate(liOn, {
				left: 30 * index + 10
			}, 500, "Linear", 0)
		}else {
			FyAnimate(liOn, {
				opacity: 0
			}, 250, "Linear", 0, () => {
				liOn.style.left = "10px" 
				FyAnimate(liOn, {opacity: 1}, 250, "Linear", 0)
			})
		}
		
		FyAnimate(pic, {
			left: -1250 * index
		}, 500, "Linear", 0, () =>{
			if (index === picLi.length - 1) {
				pic.style.left = 0
				index = 0
			}
		})
		date = new Date()
	}
	
	// 每5秒移动一次
	let timer = null
	
	let fv = () => {
		clearInterval(timer)
		timer = setInterval(fn,5000)
	}
	let ft = () => clearInterval(timer)
	
	fv()
	
	// 鼠标移入后停止定时器 移出后重启定时器
	wrap.onmouseover = () => {
		ft()
		prev.style.left = "10px"
		next.style.right = "10px"
	} 
	// 移出按钮	
	wrap.onmouseout = () => {
		fv() 
		prev.style.left = "-60px"
		next.style.right = "-60px"
	}
	
	// 按钮一样要清除定时器
	prev.onmouseover = () => ft()
	next.onmouseover = () => ft()

	// 焦点
	window.onblur = () => ft()
	window.onfocus = () => fv()
	
	
	
	
	prev.onclick = () => {
		if (new Date() - date < 500) return;
		
		if (index === 0) {
			
			// 先要离开让第六张图瞬间显示出来（第二个第一张）
			// 再让li正常的滚动即可
			pic.style.left = -1250 * (picLi.length - 1) + "px"
			index = picLi.length - 1

			FyAnimate(liOn, {
				opacity: 0
			}, 250, "Linear", 0, () => {
				liOn.style.left = (tabLi.length - 2) * 30 + 10 + "px"
			
				FyAnimate(liOn, {opacity: 1}, 250, "Linear", 0)
			})
		}

		index--;

		if (index !== picLi.length - 2) {
			FyAnimate(liOn, {left: 30 * index + 10}, 500, "Linear", 0)
		}

		FyAnimate(pic, {
			left: -1250 * index
		}, 500, "Linear", 0)
	}

	for (let i = 1; i < tabLi.length; i++){
		tabLi[i].onclick = () => {
			FyAnimate(pic, {left: -1250 * (i - 1)}, 500, "Linear", 0)
			if (Math.abs(i - 1 - index) === 1) {
				FyAnimate(liOn, {left: 30 * (i - 1) + 10}, 500,"Linear", 0)
			}else{
				FyAnimate(liOn, {
					opacity: 0
				}, 250, "Linear", 0, () => {
					liOn.style.left = (i - 1) * 30 + 10 + "px"
					FyAnimate(liOn, {opacity: 1}, 250, "Linear", 0)
				})
			}
			index = i - 1
		}
	}