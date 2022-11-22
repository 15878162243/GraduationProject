	const Koa = require('koa')
	const app = new Koa
	const cors = require("@koa/cors")
	const Router = require('koa-router')
	const body = require('koa-body')

	const router = new Router

	app.use(cors()).use(body())

	router.post('/test', async ctx => {
		let user = ctx.request.body
		let arr = null
		let res = {
			url: '',
			state: 0,
			msg: '[POST]用户名或密码错误'
		}

		if (user.username === "guangying" && user.password === "1"){
			arr = [
				{url: 'images/tj_1.jpg',  tp_width: 4000, tp_height: 5686, praise: 562, browse: 4215, sigm: "自然风光"},
				{url: 'images/tj_2.jpg',  tp_width: 5248, tp_height: 2952, praise: 230, browse: 2014, sigm: "优美壁纸"},
				{url: 'images/tj_3.jpg',  tp_width: 7820, tp_height: 4399, praise: 401, browse: 8521, sigm: "建筑空间"},
				{url: 'images/tj_6.jpg',  tp_width: 5472, tp_height: 3648, praise: 812, browse: 4764, sigm: "自然风光"},
				{url: 'images/tj_4.jpg',  tp_width: 3537, tp_height: 2871, praise: 904, browse: 7103, sigm: "人生百态"},
				{url: 'images/tj_5.jpg',  tp_width: 2003, tp_height: 3000, praise: 810, browse: 6170, sigm: "自然风光"},
				{url: 'images/tj_7.jpg',  tp_width: 4032, tp_height: 1960, praise: 888, browse: 8282, sigm: "人生百态"},
				{url: 'images/tj_8.jpg',  tp_width: 3542, tp_height: 5313, praise: 742, browse: 8245, sigm: "人生百态"},
				{url: 'images/tj_9.jpg',  tp_width: 4440, tp_height: 6720, praise: 035, browse: 7055, sigm: "建筑空间"},
				{url: 'images/tj_13.jpg', tp_width: 5466, tp_height: 3554, praise: 453, browse: 3083, sigm: "优美壁纸"},
				{url: 'images/tj_10.jpg', tp_width: 4244, tp_height: 5305, praise: 640, browse: 4389, sigm: "建筑空间"},
				{url: 'images/tj_11.jpg', tp_width: 2860, tp_height: 2508, praise: 775, browse: 4077, sigm: "自然风光"},
				{url: 'images/tj_12.jpg', tp_width: 5760, tp_height: 3270, praise: 959, browse: 8791, sigm: "优美壁纸"},
				{url: 'images/tj_14.jpg', tp_width: 1152, tp_height: 2048, praise: 813, browse: 1781, sigm: "人生百态"},
				{url: 'images/tj_15.jpg', tp_width: 5760, tp_height: 3840, praise: 565, browse: 4210, sigm: "优美壁纸"},
				{url: 'images/tj_16.jpg', tp_width: 5568, tp_height: 3712, praise: 567, browse: 3116, sigm: "建筑空间"},
				{url: 'images/tj_17.jpg', tp_width: 4500, tp_height: 2531, praise: 713, browse: 1196, sigm: "建筑空间"},
				{url: 'images/tj_18.jpg', tp_width: 3500, tp_height: 2188, praise: 966, browse: 4320, sigm: "建筑空间"},
				{url: 'images/tj_19.jpg', tp_width: 3800, tp_height: 2012, praise: 562, browse: 3631, sigm: "自然风光"},
				{url: 'images/tj_20.jpg', tp_width: 4629, tp_height: 2829, praise: 936, browse: 2561, sigm: "人生百态"},
				{url: 'images/tj_21.jpg', tp_width: 3600, tp_height: 2025, praise: 169, browse: 8543, sigm: "自然风光"},
				{url: 'images/tj_22.jpg', tp_width: 3912, tp_height: 2391, praise: 552, browse: 2688, sigm: "自然风光"},
				{url: 'images/tj_23.jpg', tp_width: 3500, tp_height: 2127, praise: 918, browse: 7451, sigm: "人生百态"},
				{url: 'images/tj_24.jpg', tp_width: 1920, tp_height: 2880, praise: 811, browse: 2162, sigm: "优美壁纸"},
				{url: 'images/tj_25.jpg', tp_width: 3686, tp_height: 4607, praise: 344, browse: 5191, sigm: "优美壁纸"},
				{url: 'images/tj_26.jpg', tp_width: 6240, tp_height: 4160, praise: 181, browse: 9220, sigm: "自然风光"},
				{url: 'images/tj_27.jpg', tp_width: 5472, tp_height: 3648, praise: 436, browse: 5813, sigm: "自然风光"},
				{url: 'images/tj_28.jpg', tp_width: 5472, tp_height: 3648, praise: 411, browse: 2620, sigm: "优美壁纸"},
				{url: 'images/tj_29.jpg', tp_width: 3997, tp_height: 4601, praise: 253, browse: 8590, sigm: "人生百态"},
				{url: 'images/tj_30.jpg', tp_width: 5569, tp_height: 3713, praise: 292, browse: 8424, sigm: "优美壁纸"},
				{url: 'images/tj_31.jpg', tp_width: 6000, tp_height: 4000, praise: 188, browse: 7422, sigm: "优美壁纸"},
				{url: 'images/tj_32.jpg', tp_width: 3648, tp_height: 5472, praise: 312, browse: 8080, sigm: "优美壁纸"},
				{url: 'images/tj_33.jpg', tp_width: 6488, tp_height: 4325, praise: 195, browse: 8855, sigm: "优美壁纸"},
				{url: 'images/tj_34.jpg', tp_width: 1920, tp_height: 1195, praise: 162, browse: 4809, sigm: "自然风光"},
				{url: 'images/tj_35.jpg', tp_width: 4774, tp_height: 2889, praise: 165, browse: 4807, sigm: "自然风光"},
				{url: 'images/tj_36.jpg', tp_width: 6000, tp_height: 4000, praise: 209, browse: 8792, sigm: "建筑空间"},
				{url: 'images/tj_37.jpg', tp_width: 5472, tp_height: 3648, praise: 553, browse: 1388, sigm: "人生百态"},
				{url: 'images/tj_38.jpg', tp_width: 3840, tp_height: 5760, praise: 163, browse: 6084, sigm: "优美壁纸"},
				{url: 'images/tj_39.jpg', tp_width: 5112, tp_height: 2876, praise: 110, browse: 8510, sigm: "优美壁纸"},
				{url: 'images/tj_40.jpg', tp_width: 4000, tp_height: 2250, praise: 551, browse: 9118, sigm: "优美壁纸"},
				{url: 'images/tj_41.jpg', tp_width: 4928, tp_height: 3264, praise: 413, browse: 9196, sigm: "自然风光"},
				{url: 'images/tj_42.jpg', tp_width: 5938, tp_height: 3919, praise: 610, browse: 4140, sigm: "自然风光"},
				{url: 'images/tj_43.jpg', tp_width: 3744, tp_height: 5616, praise: 362, browse: 1691, sigm: "人生百态"},
				{url: 'images/tj_44.jpg', tp_width: 2048, tp_height: 1362, praise: 153, browse: 6261, sigm: "人生百态"},
				{url: 'images/tj_45.jpg', tp_width: 3433, tp_height: 5150, praise: 109, browse: 8543, sigm: "人生百态"},
				{url: 'images/tj_46.jpg', tp_width: 4928, tp_height: 3264, praise: 566, browse: 1628, sigm: "建筑空间"},
				{url: 'images/tj_47.jpg', tp_width: 4412, tp_height: 2935, praise: 501, browse: 1821, sigm: "人生百态"},
				{url: 'images/tj_48.jpg', tp_width: 3024, tp_height: 4032, praise: 901, browse: 1020, sigm: "人生百态"},
				{url: 'images/tj_49.jpg', tp_width: 3024, tp_height: 4032, praise: 924, browse: 1081, sigm: "建筑空间"},
				{url: 'images/tj_50.jpg', tp_width: 4786, tp_height: 3195, praise: 151, browse: 5050, sigm: "自然风光"},
				{url: 'images/tj_51.png', tp_width: 1024, tp_height: 682,  praise: 836, browse: 5153, sigm: "人生百态"},
				{url: 'images/tj_52.png', tp_width: 1024, tp_height: 1536, praise: 921, browse: 1089, sigm: "优美壁纸"},
				{url: 'images/tj_53.png', tp_width: 1024, tp_height: 684,  praise: 223, browse: 1510, sigm: "优美壁纸"},
				{url: 'images/tj_54.png', tp_width: 1024, tp_height: 1536, praise: 212, browse: 5754, sigm: "建筑空间"},
				{url: 'images/tj_55.png', tp_width: 1024, tp_height: 678,  praise: 528, browse: 5822, sigm: "建筑空间"},
				{url: 'images/tj_56.png', tp_width: 1024, tp_height: 1536, praise: 642, browse: 8815, sigm: "人生百态"},
				{url: 'images/tj_57.png', tp_width: 1024, tp_height: 1536, praise: 535, browse: 7795, sigm: "优美壁纸"},
				{url: 'images/tj_58.png', tp_width: 1024, tp_height: 1536, praise: 690, browse: 5199, sigm: "自然风光"},
				{url: 'images/tj_59.png', tp_width: 1024, tp_height: 1535, praise: 765, browse: 7147, sigm: "自然风光"},
				{url: 'images/tj_60.png', tp_width: 1024, tp_height: 681,  praise: 229, browse: 8512, sigm: "优美壁纸"},
				{url: 'images/tj_61.png', tp_width: 1702, tp_height: 1080, praise: 503, browse: 1098, sigm: "建筑空间"},
				{url: 'images/tj_62.png', tp_width: 1280, tp_height: 853,  praise: 320, browse: 7104, sigm: "人生百态"},
				{url: 'images/tj_63.png', tp_width: 1280, tp_height: 847,  praise: 150, browse: 8010, sigm: "优美壁纸"},
				{url: 'images/tj_64.jpg', tp_width: 4629, tp_height: 3086, praise: 547, browse: 5218, sigm: "建筑空间"},
				{url: 'images/tj_65.png', tp_width: 1619, tp_height: 1080, praise: 453, browse: 1096, sigm: "建筑空间"},
				{url: 'images/tj_66.png', tp_width: 4128, tp_height: 6192, praise: 706, browse: 1420, sigm: "人生百态"},
				{url: 'images/tj_67.png', tp_width: 1280, tp_height: 853,  praise: 362, browse: 1651, sigm: "人生百态"},
				{url: 'images/tj_68.png', tp_width: 1814, tp_height: 1080, praise: 903, browse: 8451, sigm: "人生百态"},
				{url: 'images/tj_69.png', tp_width: 1280, tp_height: 853,  praise: 139, browse: 1936, sigm: "人生百态"},
				{url: 'images/tj_70.png', tp_width: 1280, tp_height: 830,  praise: 806, browse: 8188, sigm: "自然风光"},
				{url: 'images/tj_71.png', tp_width: 1920, tp_height: 1080, praise: 957, browse: 9821, sigm: "建筑空间"},
				{url: 'images/tj_72.png', tp_width: 990,  tp_height: 1280, praise: 552, browse: 2060, sigm: "自然风光"},
				{url: 'images/tj_73.png', tp_width: 1280, tp_height: 853,  praise: 354, browse: 7451, sigm: "人生百态"},
				{url: 'images/tj_74.png', tp_width: 1280, tp_height: 861,  praise: 691, browse: 5260, sigm: "自然风光"},
				{url: 'images/tj_75.jpg', tp_width: 4800, tp_height: 3600, praise: 536, browse: 5903, sigm: "人生百态"},
				{url: 'images/tj_76.jpg', tp_width: 3611, tp_height: 4514, praise: 515, browse: 5261, sigm: "自然风光"},
				{url: 'images/tj_77.jpg', tp_width: 5000, tp_height: 3335, praise: 523, browse: 1901, sigm: "优美壁纸"},
				{url: 'images/tj_78.png', tp_width: 1509, tp_height: 1080, praise: 502, browse: 5624, sigm: "人生百态"},
				{url: 'images/tj_79.png', tp_width: 3024, tp_height: 3024, praise: 608, browse: 6062, sigm: "建筑空间"},
				{url: 'images/tj_80.jpg', tp_width: 5184, tp_height: 3456, praise: 962, browse: 8025, sigm: "优美壁纸"},
				{url: 'images/tj_81.jpg', tp_width: 4235, tp_height: 2818, praise: 925, browse: 7155, sigm: "优美壁纸"},
				{url: 'images/tj_82.jpg', tp_width: 3648, tp_height: 2432, praise: 609, browse: 9929, sigm: "自然风光"},
				{url: 'images/tj_83.jpg', tp_width: 5860, tp_height: 3907, praise: 358, browse: 5157, sigm: "建筑空间"},
				{url: 'images/tj_84.jpg', tp_width: 5472, tp_height: 3648, praise: 623, browse: 8592, sigm: "建筑空间"},
				{url: 'images/tj_85.jpg', tp_width: 4008, tp_height: 6011, praise: 509, browse: 5268, sigm: "建筑空间"},
				{url: 'images/tj_86.jpg', tp_width: 3276, tp_height: 2430, praise: 993, browse: 7284, sigm: "建筑空间"},
				{url: 'images/tj_87.jpg', tp_width: 3000, tp_height: 1999, praise: 710, browse: 8610, sigm: "建筑空间"},
				{url: 'images/tj_88.jpg', tp_width: 2266, tp_height: 2832, praise: 517, browse: 5118, sigm: "建筑空间"},
				{url: 'images/tj_89.jpg', tp_width: 3774, tp_height: 4717, praise: 405, browse: 9006, sigm: "建筑空间"},
				{url: 'images/tj_90.jpg', tp_width: 3456, tp_height: 2364, praise: 516, browse: 1060, sigm: "自然风光"},
				{url: 'images/tj_91.jpg', tp_width: 2448, tp_height: 3264, praise: 342, browse: 1521, sigm: "自然风光"},
				{url: 'images/tj_92.jpg', tp_width: 4709, tp_height: 3141, praise: 843, browse: 9111, sigm: "建筑空间"},
				{url: 'images/tj_93.jpg', tp_width: 4512, tp_height: 3000, praise: 369, browse: 3103, sigm: "建筑空间"},
				{url: 'images/tj_94.jpg', tp_width: 6004, tp_height: 4008, praise: 396, browse: 8889, sigm: "优美壁纸"},
				{url: 'images/tj_95.jpg', tp_width: 2000, tp_height: 1123, praise: 309, browse: 8421, sigm: "优美壁纸"},
				{url: 'images/tj_96.jpg', tp_width: 2201, tp_height: 1467, praise: 843, browse: 8406, sigm: "自然风光"},
			]
		}
		
		if (user.username === "guangying" && user.password === "2"){
			arr = [
				{url: 'video/sp_1.mp4',   praise: 1941, browse: 13851,  sigm: "自然风光", theme: "至洁的雪景"},
				{url: 'video/sp_2.mp4',   praise: 1291, browse: 18040,  sigm: "自然风光", theme: "水中气泡"},
				{url: 'video/sp_3.mp4',   praise: 5336, browse: 55563,  sigm: "精彩剪辑", theme: "梦想与现实之间 致郁混剪"},
				{url: 'video/sp_4.mp4',   praise: 9151, browse: 92560,  sigm: "自然风光", theme: "海滩风景线"},
				{url: 'video/sp_5.mp4',   praise: 5453, browse: 51090,  sigm: "自然风光", theme: "城市夜景"},
				{url: 'video/sp_6.mp4',   praise: 1888, browse: 14222,  sigm: "精彩剪辑", theme: "好莱坞影片 热血混剪"},
				{url: 'video/sp_7.mp4',   praise: 2888, browse: 24222,  sigm: "自然风光", theme: "风与草"},
				{url: 'video/sp_8.mp4',   praise: 3342, browse: 38845,  sigm: "精彩剪辑", theme: "宫崎骏新海诚混剪"},
				{url: 'video/sp_9.mp4',   praise: 2835, browse: 20755,  sigm: "自然风光", theme: "自然奇景混剪"},
				{url: 'video/sp_10.mp4',  praise: 3835, browse: 37055,  sigm: "自然风光", theme: "夜晚城市公路"},
				{url: 'video/sp_11.mp4',  praise: 4805, browse: 47555,  sigm: "精彩剪辑", theme: "愿你乘风破浪 电影混剪"},
				{url: 'video/sp_12.mp4',  praise: 5035, browse: 50755,  sigm: "自然风光", theme: "晚霞中的雪景"},
				{url: 'video/sp_13.mp4',  praise: 6830, browse: 67655,  sigm: "精彩剪辑", theme: "《海贼王》三部剧场版混剪"},
				{url: 'video/sp_14.mp4',  praise: 7035, browse: 70755,  sigm: "自然风光", theme: "尽头的海岸线"},
				{url: 'video/sp_15.mp4',  praise: 8065, browse: 77855,  sigm: "自然风光", theme: "森林的声音"},
				{url: 'video/sp_16.mp4',  praise: 9035, browse: 97055,  sigm: "精彩剪辑", theme: "高考励志混剪"},
				{url: 'video/sp_17.mp4',  praise: 5435, browse: 59254,  sigm: "精彩剪辑", theme: "那些年的青春爱情故事 混剪"},
				{url: 'video/sp_18.mp4',  praise: 4005, browse: 40880,  sigm: "自然风光", theme: "夜晚的车流"},
				{url: 'video/sp_19.mp4',  praise: 5465, browse: 58741,  sigm: "精彩剪辑", theme: "风雨过后 走心励志短片"},
				{url: 'video/sp_20.mp4',  praise: 3975, browse: 31130,  sigm: "精彩剪辑", theme: "LOL英雄从未坠落 混剪"},
				{url: 'video/sp_21.mp4',  praise: 8105, browse: 81077,  sigm: "自然风光", theme: "日出"},
				{url: 'video/sp_22.mp4',  praise: 8065, browse: 86618,  sigm: "精彩剪辑", theme: "致敬周星驰电影 混剪"},
				{url: 'video/sp_23.mp4',  praise: 8111, browse: 80058,  sigm: "自然风光", theme: "那夕阳与白天"},
				{url: 'video/sp_24.mp4',  praise: 3401, browse: 37758,  sigm: "精彩剪辑", theme: "世界大战 热血混剪"},
				{url: 'video/sp_25.mp4',  praise: 6110, browse: 60055,  sigm: "自然风光", theme: "忙碌的城市"},
				{url: 'video/sp_26.mp4',  praise: 8410, browse: 87055,  sigm: "精彩剪辑", theme: "生存还是毁灭 混剪"},
				{url: 'video/sp_27.mp4',  praise: 6035, browse: 67751,  sigm: "精彩剪辑", theme: "为戏痴狂-张国荣 混剪"},
				{url: 'video/sp_28.mp4',  praise: 4135, browse: 47055,  sigm: "自然风光", theme: "大自然变化之美"},
				{url: 'video/sp_29.mp4',  praise: 9615, browse: 97415,  sigm: "自然风光", theme: "海滩与鸟"},
				{url: 'video/sp_30.mp4',  praise: 3865, browse: 37105,  sigm: "精彩剪辑", theme: "该死的爱情 混剪"},
				{url: 'video/sp_31.mp4',  praise: 8831, browse: 81055,  sigm: "精彩剪辑", theme: "地铁的形形色色"},
				{url: 'video/sp_32.mp4',  praise: 4435, browse: 47355,  sigm: "精彩剪辑", theme: "《你的名字》"},
				{url: 'video/sp_33.mp4',  praise: 8641, browse: 84655,  sigm: "自然风光", theme: "星光"},
				{url: 'video/sp_34.mp4',  praise: 3534, browse: 37315,  sigm: "精彩剪辑", theme: "港片大佬 混剪"},
				{url: 'video/sp_35.mp4',  praise: 3878, browse: 36785,  sigm: "自然风光", theme: "夏天的枫叶"},
				{url: 'video/sp_36.mp4',  praise: 6321, browse: 61765,  sigm: "精彩剪辑", theme: "我们的城市 混剪"},
				{url: 'video/sp_37.mp4',  praise: 4562, browse: 40655,  sigm: "精彩剪辑", theme: "孩子之间的交流"},
				{url: 'video/sp_38.mp4',  praise: 4466, browse: 47155,  sigm: "精彩剪辑", theme: "勇往无前"},
				{url: 'video/sp_39.mp4',  praise: 2816, browse: 21725,  sigm: "自然风光", theme: "角落里那些震撼的高山湖泊"},
				{url: 'video/sp_40.mp4',  praise: 9569, browse: 99855,  sigm: "自然风光", theme: "开往春天的列车"},
				{url: 'video/sp_41.mp4',  praise: 6969, browse: 61055,  sigm: "自然风光", theme: "流星云海蓝天高山..."},
				{url: 'video/sp_42.mp4',  praise: 3810, browse: 37915,  sigm: "精彩剪辑", theme: "城市间的文化"},
				{url: 'video/sp_43.mp4',  praise: 4849, browse: 44595,  sigm: "自然风光", theme: "那些让人震撼的山岳"},
				{url: 'video/sp_44.mp4',  praise: 6756, browse: 57565,  sigm: "自然风光", theme: "流水湖泊"},
				{url: 'video/sp_45.mp4',  praise: 7758, browse: 71705,  sigm: "精彩剪辑", theme: "快节奏文图跳动"},
				{url: 'video/sp_46.mp4',  praise: 2584, browse: 27815,  sigm: "自然风光", theme: "人在自然中的足迹"},
				{url: 'video/sp_47.mp4',  praise: 6230, browse: 70765,  sigm: "精彩剪辑", theme: "《叶问》混剪"},
				{url: 'video/sp_48.mp4',  praise: 9958, browse: 98415,  sigm: "精彩剪辑", theme: "你自己的人生 混剪"},
			]
		}
		
		if (user.username === "guangying" && user.password === "3"){
			arr = [
				{url: 'images/cy_1.jpeg', tp_width: 4000, tp_height: 3038, praise: 3674, browse: 13851,  sigm: "设计"},
				{url: 'images/cy_2.jpg',  tp_width: 10428,tp_height: 3487, praise: 4711, browse: 52400,  sigm: "插画"},
				{url: 'images/cy_3.png',  tp_width: 1000, tp_height: 1000, praise: 8306, browse: 55463,  sigm: "图标"},
				{url: 'images/cy_4.jpg',  tp_width: 1010, tp_height: 1516, praise: 6174, browse: 52851,  sigm: "设计"},
				{url: 'images/cy_5.jpg',  tp_width: 2000, tp_height: 1333, praise: 5491, browse: 52452,  sigm: "插画"},
				{url: 'images/cy_6.png',  tp_width: 1000, tp_height: 1000, praise: 5186, browse: 55103,  sigm: "图标"},
				{url: 'images/cy_7.jpg',  tp_width: 2600, tp_height: 1362, praise: 6184, browse: 38510,  sigm: "设计"},
				{url: 'images/cy_8.jpg',  tp_width: 2923, tp_height: 4219, praise: 2091, browse: 25200,  sigm: "插画"},
				{url: 'images/cy_9.png',  tp_width: 512,  tp_height: 512,  praise: 1436, browse: 14163,  sigm: "图标"},
				{url: 'images/cy_10.jpg', tp_width: 5472, tp_height: 3648, praise: 1674, browse: 13851,  sigm: "设计"},
				{url: 'images/cy_11.jpg', tp_width: 4167, tp_height: 4167, praise: 4291, browse: 52240,  sigm: "插画"},
				{url: 'images/cy_12.png', tp_width: 500,  tp_height: 500,  praise: 1436, browse: 15563,  sigm: "图标"},
				{url: 'images/cy_13.jpg', tp_width: 3600, tp_height: 2000, praise: 5674, browse: 30851,  sigm: "设计"},
				{url: 'images/cy_14.jpg', tp_width: 2583, tp_height: 3000, praise: 1491, browse: 15240,  sigm: "插画"},
				{url: 'images/cy_15.png', tp_width: 800,  tp_height: 800,  praise: 4036, browse: 55563,  sigm: "图标"},
				{url: 'images/cy_16.png', tp_width: 1920, tp_height: 1416, praise: 6874, browse: 63851,  sigm: "设计"},
				{url: 'images/cy_17.jpg', tp_width: 6000, tp_height: 4000, praise: 4291, browse: 52140,  sigm: "插画"},
				{url: 'images/cy_18.png', tp_width: 800,  tp_height: 800,  praise: 8436, browse: 95563,  sigm: "图标"},
				{url: 'images/cy_19.jpg', tp_width: 3917, tp_height: 2611, praise: 7674, browse: 83851,  sigm: "设计"},
				{url: 'images/cy_20.jpg', tp_width: 3000, tp_height: 2119, praise: 8291, browse: 95240,  sigm: "插画"},
				{url: 'images/cy_21.png', tp_width: 1024, tp_height: 1024, praise: 7291, browse: 51240,  sigm: "图标"},
				{url: 'images/cy_22.jpg', tp_width: 3928, tp_height: 2619, praise: 7436, browse: 55063,  sigm: "设计"},
				{url: 'images/cy_23.jpeg',tp_width: 5152, tp_height: 3435, praise: 3674, browse: 38561,  sigm: "插画"},
				{url: 'images/cy_24.png', tp_width: 1000, tp_height: 1000, praise: 2291, browse: 52440,  sigm: "图标"},
				{url: 'images/cy_25.jpg', tp_width: 5135, tp_height: 2884, praise: 6436, browse: 54683,  sigm: "设计"},
				{url: 'images/cy_26.jpg', tp_width: 4000, tp_height: 4000, praise: 5344, browse: 38451,  sigm: "插画"},
				{url: 'images/cy_27.png', tp_width: 1000, tp_height: 1000, praise: 6691, browse: 51040,  sigm: "图标"},
				{url: 'images/cy_28.jpg', tp_width: 1920, tp_height: 1920, praise: 6636, browse: 58703,  sigm: "设计"},
				{url: 'images/cy_29.png', tp_width: 1920, tp_height: 1358, praise: 4674, browse: 38711,  sigm: "插画"},
				{url: 'images/cy_30.png', tp_width: 512,  tp_height: 512,  praise: 6291, browse: 52470,  sigm: "图标"},
				{url: 'images/cy_31.jpg', tp_width: 4000, tp_height: 4000, praise: 6391, browse: 54440,  sigm: "设计"},
				{url: 'images/cy_32.jpg', tp_width: 3508, tp_height: 2482, praise: 6936, browse: 54663,  sigm: "插画"},
				{url: 'images/cy_33.png', tp_width: 900,  tp_height: 900,  praise: 4174, browse: 34841,  sigm: "图标"},
				{url: 'images/cy_34.jpg', tp_width: 4000, tp_height: 6000, praise: 5991, browse: 52140,  sigm: "设计"},
				{url: 'images/cy_35.jpg', tp_width: 4100, tp_height: 2396, praise: 5936, browse: 45643,  sigm: "插画"},
				{url: 'images/cy_36.png', tp_width: 512,  tp_height: 512,  praise: 5614, browse: 31841,  sigm: "图标"},
				{url: 'images/cy_37.jpg', tp_width: 1920, tp_height: 1665, praise: 6201, browse: 51264,  sigm: "设计"},
				{url: 'images/cy_38.jpg', tp_width: 10417,tp_height: 5564, praise: 6331, browse: 54165,  sigm: "插画"},
				{url: 'images/cy_39.png', tp_width: 1000, tp_height: 1000, praise: 3614, browse: 34111,  sigm: "图标"},
				{url: 'images/cy_40.jpg', tp_width: 4500, tp_height: 3267, praise: 6001, browse: 51210,  sigm: "设计"},
				{url: 'images/cy_41.jpg', tp_width: 6000, tp_height: 4000, praise: 5091, browse: 41040,  sigm: "插画"},
				{url: 'images/cy_42.png', tp_width: 900,  tp_height: 900,  praise: 9336, browse: 88643,  sigm: "图标"},
				{url: 'images/cy_43.jpg', tp_width: 5760, tp_height: 3840, praise: 5004, browse: 48251,  sigm: "设计"},
				{url: 'images/cy_44.png', tp_width: 1920, tp_height: 1920, praise: 5092, browse: 41210,  sigm: "插画"},
				{url: 'images/cy_45.png', tp_width: 1000, tp_height: 1000, praise: 8339, browse: 81009,  sigm: "图标"},
				{url: 'images/cy_46.jpg', tp_width: 5472, tp_height: 3648, praise: 8674, browse: 83861,  sigm: "设计"},
				{url: 'images/cy_47.jpg', tp_width: 1920, tp_height: 960,  praise: 7291, browse: 71026,  sigm: "插画"},
				{url: 'images/cy_48.jpg', tp_width: 1920, tp_height: 1920, praise: 5386, browse: 45163,  sigm: "图标"},
				{url: 'images/cy_49.jpg', tp_width: 2448, tp_height: 3059, praise: 5114, browse: 40511,  sigm: "设计"},
				{url: 'images/cy_50.jpg', tp_width: 2480, tp_height: 3508, praise: 5019, browse: 45740,  sigm: "插画"},
				{url: 'images/cy_51.jpg', tp_width: 1920, tp_height: 1920, praise: 5905, browse: 41099,  sigm: "图标"},
				{url: 'images/cy_52.jpg', tp_width: 2952, tp_height: 2952, praise: 5077, browse: 41039,  sigm: "设计"},
				{url: 'images/cy_53.png', tp_width: 3100, tp_height: 3100, praise: 1618, browse: 10411,  sigm: "插画"},
				{url: 'images/cy_54.png', tp_width: 512,  tp_height: 512,  praise: 1436, browse: 10640,  sigm: "图标"},
				{url: 'images/cy_55.png', tp_width: 4500, tp_height: 3000, praise: 7356, browse: 65103,  sigm: "设计"},
				{url: 'images/cy_56.jpg', tp_width: 2570, tp_height: 3598, praise: 8406, browse: 86651,  sigm: "插画"},
				{url: 'images/cy_57.png', tp_width: 1000, tp_height: 1000, praise: 4346, browse: 40901,  sigm: "图标"},
				{url: 'images/cy_58.jpg', tp_width: 2100, tp_height: 1500, praise: 6404, browse: 61035,  sigm: "设计"},
				{url: 'images/cy_59.jpg', tp_width: 2667, tp_height: 2163, praise: 9784, browse: 99941,  sigm: "插画"},
				{url: 'images/cy_60.png', tp_width: 1024, tp_height: 1024, praise: 8061, browse: 88660,  sigm: "图标"},
				{url: 'images/cy_61.jpg', tp_width: 5456, tp_height: 3064, praise: 3333, browse: 33333,  sigm: "设计"},
				{url: 'images/cy_62.png', tp_width: 9780, tp_height: 6884, praise: 4444, browse: 44444,  sigm: "插画"},
				{url: 'images/cy_63.png', tp_width: 512,  tp_height: 512,  praise: 5555, browse: 55555,  sigm: "图标"},
				{url: 'images/cy_64.jpg', tp_width: 7491, tp_height: 4997, praise: 6666, browse: 66666,  sigm: "设计"},
				{url: 'images/cy_65.jpg', tp_width: 2800, tp_height: 2800, praise: 7777, browse: 77777,  sigm: "插画"},
				{url: 'images/cy_66.png', tp_width: 800,  tp_height: 800,  praise: 8400, browse: 88888,  sigm: "图标"},
				{url: 'images/cy_67.jpg', tp_width: 780,  tp_height: 1170, praise: 9879, browse: 99999,  sigm: "设计"},
				{url: 'images/cy_68.jpg', tp_width: 4272, tp_height: 2848, praise: 2640, browse: 22222,  sigm: "插画"},
				{url: 'images/cy_69.png', tp_width: 1000, tp_height: 1000, praise: 1099, browse: 11111,  sigm: "图标"},
				{url: 'images/cy_70.png', tp_width: 1920, tp_height: 1920, praise: 1288, browse: 12368,  sigm: "设计"},
				{url: 'images/cy_71.png', tp_width: 1920, tp_height: 1024, praise: 1193, browse: 12311,  sigm: "插画"},
				{url: 'images/cy_72.png', tp_width: 1024, tp_height: 1024, praise: 6381, browse: 68438,  sigm: "图标"},
			]
		}
		
		if (user.username === "guangying" && user.password === "4"){
			arr = [
				{url_1: 'images/tx_1.jpg',url_2: 'images/tx_1_1.png',url_3: 'images/tx_1_2.png',url_4: 'images/tx_1_3.png',
					praise: 778852,browse: 6433,
					name: "Beginning",
					xin: "帅哥"
				},
				{
					url_1: 'images/tx_2.jpg',url_2: 'images/tx_2_1.png',url_3: 'images/tx_2_2.png',url_4: 'images/tx_2_3.png',
					praise: 863351,browse: 8551,
					name: "窥视者",
					xin: "帅哥"
				},
				{
					url_1: 'images/tx_3.jpg',url_2: 'images/tx_3_1.png',url_3: 'images/tx_3_2.png',url_4: 'images/tx_3_3.png',
					praise: 557749,browse: 5842,
					name: "误入禁区、",
					xin: "美女"
				},
				{
					url_1: 'images/tx_4.jpg',url_2: 'images/tx_4_1.png',url_3: 'images/tx_4_2.png',url_4: 'images/tx_4_3.png',
					praise: 778852,browse: 6433,
					name: "路途",
					xin: "帅哥"
				},
				{
					url_1: 'images/tx_5.jpg',url_2: 'images/tx_5_1.png',url_3: 'images/tx_5_2.png',url_4: 'images/tx_5_3.png',
					praise: 778852,browse: 6433,
					name: "Cherry",
					xin: "美女"
				},
				{
					url_1: 'images/tx_6.jpg',url_2: 'images/tx_6_1.png',url_3: 'images/tx_6_2.png',url_4: 'images/tx_6_3.png',
					praise: 778852,browse: 6433,
					name: "Learning",
					xin: "帅哥"
				},
				{
					url_1: 'images/tx_7.jpg',url_2: 'images/tx_7_1.png',url_3: 'images/tx_7_2.png',url_4: 'images/tx_7_3.png',
					praise: 778852,browse: 6433,
					name: "嗒嗒嗒",
					xin: "美女"
				},
				{
					url_1: 'images/tx_8.jpg',url_2: 'images/tx_8_1.png',url_3: 'images/tx_8_2.png',url_4: 'images/tx_8_3.png',
					praise: 778852,browse: 6433,
					name: "雨声",
					xin: "帅哥"
				}
			]
		}
		if ((user.username === "15878162244" || user.username === "1111111111@qq.com" && user.password === "gy123456") || user.bak === "2020"){
			arr = {
				number: '15878162244',
				use: '1111111111@qq.com',
				pass: 'gy123456',
				name: '光影',
				head: 'images/tx_1.jpg',
				bak: "2020"
			}
		}
		
		ctx.body = arr
	})

	app.use(router.routes())

	app.listen(3000, () => console.log(`程序启动成功，监听在http://localhost:3000端口`))