	
	let $input = $('.register input')
	
	// 邮箱
	let $yx = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
	// 手机号码
	let $sj = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
	// 密码
	let $mima = /^[a-zA-Z0-9\\W]{8,}$/
	// 所有form表单的对错状态
	let $foom1 = false
	let	$foom2 = false
	let $foom3 = false
	// 记录当前验证码图片
	let yzm_tup = 1
	// 对应验证码图片内容
	let yzm_nr = ['3N8S','R8PW','673J','RPF3']
	
	let textNode  = document.createElement("div");
	textNode.setAttribute('class','cuo');
	// 账号
	$($input[0]).on('blur',() => {
		if($yx.test($($input[0]).val()) || $sj.test($($input[0]).val())){
			$foom1 = true
			$("div").remove(".cuo")
		}else{
			$foom1 = false
			textNode.innerHTML = '请输入正确的邮箱/手机号码';
			$(textNode).prependTo($('.register'))
		}
	})
	// 密码
	$($input[1]).on('blur',() => {
		if($mima.test($($input[1]).val())){
			$foom2 = true
			$("div").remove(".cuo")
		}else{
			$foom2 = false
			textNode.innerHTML = '请输入不小于8位数的正确密码';
			$(textNode).prependTo($('.register'))
		}
	})
	// 密码的显示隐藏
	let zhuant = true
	$('#tu').on('click',() => {
		if(zhuant === true){
			$('#tu img').attr("src","images/show.png")
			$('#shu').attr("type","")
			zhuant = false
		}else{
			$('#tu img').attr("src","images/conceal.png")
			$('#shu').attr("type","password")
			zhuant = true
		}
	})
	
	// 验证码图片
	$('#yzm').on('click',() => {
		yzm_tup += 1
		$('#yzm').attr("src", `images/yzm_${yzm_tup}.jpg`);
		$('#yzm').attr("value", `${yzm_nr[yzm_tup - 1]}`);
		if(yzm_tup >= 4){
			yzm_tup = 0
		}
	})
	
	$('#dl').on('click',() => {
		// 验证码
		if($($input[2]).val() === $('#yzm').attr('value')){
			$foom3 = true
		}else{
			$foom3 = false
			yzm_tup += 1
			$('#yzm').attr("src", `images/yzm_${yzm_tup}.jpg`);
			$('#yzm').attr("value", `${yzm_nr[yzm_tup - 1]}`);
			if(yzm_tup >= 4){
				yzm_tup = 0
			}
		}
		// 判断三框的数据是否正确
		if($foom1 === true && $foom2 === true && $foom3 === true){
			
			// 初始化建立ajax_tj函数
			let zhao = new XMLHttpRequest()
			// 建立请求
			zhao.open('post', 'http://localhost:3000/test')
			// 设置post格式  get请求不用设置格式
			zhao.setRequestHeader('Content-Type', 'application/json')
			// 此为json发送请求的格式
			zhao.send(JSON.stringify({
				username: `${$($input[0]).val()}`,
				password: `${$($input[1]).val()}`
			}))
			// 监听状态码	（状态码会根据后台的情况，表现为不同的值）
			zhao.onreadystatechange = () => {
				if (zhao.readyState === 4 && zhao.status == 200 || zhao.status == 304){
					// 跳转,通过识别a来确认是通过已有账号访问
					let niu = Object.values(JSON.parse(zhao.responseText))
					window.location.href = `index.html?coi=1;bak=${niu[5]}`;
				}else{
					textNode.innerHTML = '该用户尚未注册';
					$(textNode).prependTo($('.register'))
				}
			}
			
		}else{
			if($foom1 === false){
				textNode.innerHTML = '请输入正确的邮箱/手机号码';
				$(textNode).prependTo($('.register'))
			}
			if($foom2 === false){
				textNode.innerHTML = '请输入不小于8位数的正确密码';
				$(textNode).prependTo($('.register'))
			}
			if($foom3 === false){
				textNode.innerHTML = '请输入正确的验证码';
				$(textNode).prependTo($('.register'))
			}
		}
		
	})
	 