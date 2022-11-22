
	class Airplane {
		// constructor函数用于装全局变量，方便更改和使用
		constructor(opt) {
			this.data = opt
			// 给this创个对象，接受外部传过来的数据
			this.navlistarr = ['首页','摄影专区', '精选视频', '优秀创意', '关于', ];
			this.interlinkage = ['index.html', 'photos.html', 'feature.html', 'originality.html']
			this.str = ``
			this.interlinkage_1 = []
			this.rendering()
			this.gurtiong()
		}
		
		detection() {
			this.interlinkage.forEach((v,y) => {
				this.interlinkage_1[y] = v += `${this.data.index_url}`
			})
			
			this.interlinkage = this.interlinkage_1
			console.log(this.interlinkage)
			this.rendering()
		}
		
		gurtiong() {
			let niu = ''
			let tpo = (zhui,gutto) => {
				// 初始化建立ajax_tj函数
				
				let zhao = new XMLHttpRequest()
				// 建立请求
				zhao.open('post', 'http://localhost:3000/test')
				// 设置post格式  get请求不用设置格式
				zhao.setRequestHeader('Content-Type', 'application/json')
				// 此为json发送请求的格式
				zhao.send(JSON.stringify({
					bak : `${zhui}`
				}))
				// 监听状态码	（状态码会根据后台的情况，表现为不同的值）
				zhao.onreadystatechange = () => {
					if (zhao.readyState === 4 && zhao.status == 200 || zhao.status == 304){
						niu = Object.values(JSON.parse(zhao.responseText))
						gutto()
					}
				}
			}
			
			let gutto = () => {
				$('div').remove('.deng')
				let $yhtx = `<div class="head"><img src="${niu[4]}" /></div>`
				$($yhtx).appendTo($('#navigation'))
				$(".navigation").append($yhtx);
			}
			let index_url = ''
			// 监听是否是从登录界面通过正确账号进入
			if(window.location.search){
			    let zhui = window.location.search.split("=")[2];
				console.log('123')
				tpo(zhui,gutto)
				this.detection()
				// $('.head img').attr('src',`$(head)`)
			}
		}

		rendering() {
			this.str = ''
			$('#navlist').html(this.str)
			for (var i in this.navlistarr) {
				if(i == this.data.add){
					this.str += `<li><a href="${this.interlinkage[i]}" style="color: #6139ca;">` + this.navlistarr[i] + `</a></li>`
				}else{
					this.str += `<li><a href="${this.interlinkage[i]}">` + this.navlistarr[i] + `</a></li>`
				}
			}
			$('#navlist').html(this.str)
			
			// 搜索
			$(".search_an").click(() => window.location.href = "photos.html")
			$("#search_shu").focus(() => $(".search_headline").removeClass("ou"))
			$("#search_shu").blur(() => $(".search_headline").addClass("ou"))
			// mousedown要优先于blur触发，单击事件不行
			$(".search_headline").on('mousedown',"li",() => window.location.href = "photos.html")
			
			// 右下角置顶
			$('.stick').click(() => $(document).scrollTop(0))
			
			// 左下角的小鱼缸
			$('.container').mouseover(() => $('.sc').attr('class','sc'))
			$('.container').mouseout(() => $('.sc').attr('class','sc ou'))
			$('.sc').click(() => $("div").remove(".container"))
		}
	}
	
	