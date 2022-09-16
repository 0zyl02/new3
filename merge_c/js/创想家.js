$("#img1").animate({
	top: "0rem",
	left: "0",
}, 1000)
$("#img2").animate({
	top: "0rem",
	left: "0",
}, 1000)
$("#img3").animate({
	bottom: "0"
}, 1000)
$("#img4").animate({
	bottom: "0",
	left: "0rem",
}, 1000)
$("#img5").animate({
	top: "1.4rem",
	left: "1.4rem",
}, 1000)
$("#img6").animate({
	top: "2.55rem",
	left: "1.7rem",
}, 1000)
$("#img7").animate({
	top: "2.2rem",
	left: "0rem",
}, 1000)
$("#img8").animate({
	left: "2.4rem",
	top: "0rem",
}, 1000)
$("#img9").animate({
	left: "3.3rem",
	top: "0rem",
}, 1000, function() {
	$("#img10").show()
	$("#img10").animate({
		opacity: "1",
		height: "1.3rem",
		left: "0.3rem",
		top: "2.45rem",
	}, 500, function() {
		$("#img11").show()
		$("#img11").animate({
			height: "3.95rem",
			opacity: "1",
			left: "1.45rem",
			bottom: "0"
		}, 500, function() {
			$("#img12").show()
			$("#img12").animate({
				opacity: "1",
				height: "1.85rem",
				top: "2.25rem",
				left: "2.4rem",
			}, 500, function() {
				$("#img13").show()
				$("#img13").animate({
					opacity: "1",
					width: "2.9rem",
					right: "0",
					top: "2.12rem",
				}, 500, function() {
					$("#img14").show()
					$("#img14").animate({
						opacity: "1",
						width: "4.6rem",
						bottom: "0",
						right: "0",
					}, 500, function() {
						// 显示下边字
						$("#img17").show(500)
						$("#img17").animate({
							width: "4rem",
							left: "-=0.5rem",
							// top:"-1=rem"
						}, 1000, function() {
							$("#img15,#img16").show(500)
							$("#img15").animate({
								right: "-=0.8rem",
								top: "+=0.5rem",
							}, 800)
							$("#img16").animate({
								top: "-=3rem",
								left: "-=1rem"
							}, 800)
						})
					})
				})
			})
		})
	})
})
var liu1 = document.getElementById("img18");
var liu2 = document.getElementById("img19");
var liu3 = document.getElementById("img20");
// 绿色流星
var l3Index = -2;
var l3Index1 = 3;
setInterval(function() {
	l3Index += 1;
	l3Index1 -= .5;
	if (l3Index > 50) {
		l3Index = -2;
		l3Index1 = 3;
	}
	liu3.style.right = l3Index + "rem";
	liu3.style.bottom = l3Index1 + "rem";
}, 100)
// 黄色流星
var l2Index = -2;
var l2Index1 = -2;
setInterval(function() {
	l2Index += .5;
	l2Index1 -= .2;
	if (l2Index > 30) {
		l2Index = -2;
		l2Index1 = -2;
	}
	liu2.style.right = l2Index + "rem";
	liu2.style.top = l2Index1 + "rem";
}, 100)
//红色流星
var l1Index = 0;
var l1Index1 = 2;
setInterval(function() {
	l1Index += 1;
	l1Index1 += .5;
	if (l1Index > 20) {
		l1Index = 0;
		l1Index1 = 2;
	}
	liu1.style.left = l1Index + "rem";
	liu1.style.top = l1Index1 + "rem";
}, 100)
var wrapOne = document.getElementById("wrapOne");
var wrapTwo = document.getElementById("wrapTwo");
var wrapThree = document.getElementById("wrapThree")
var wrapFour = document.getElementById("wrapFour")
// 关闭系统默认触摸效果
touch.on(wrapOne, "touchstart", function(e) {
	var event1 = window.event || e;
	event1.preventDefault();
})
// 添加向上轻扫手势
touch.on(wrapOne, "swipeup", function() {
	$("#wrapOne").slideUp(500);
	$("#wrapTwo").slideDown();
	$("#ww").show(1500);
	$("#www").show(1500);
})
// 地球转动
var earth = document.getElementById("earth");
var earthIndex = 1; //记录地球转动图片
var earthTimer = setInterval(function() {
	earthIndex++;
	earth.src = "img/pagetwo/diqiu/" + earthIndex + ".jpg"
	if (earthIndex == 47) {
		earthIndex = 1;
	}
}, 60)
// 关闭系统默认触摸效果
touch.on(wrapTwo, "touchstart", function(e) {
	var event1 = window.event || e;
	event1.preventDefault();
})
// 添加向上轻扫手势
touch.on(wrapTwo, "swipeup", function() {
	$("#wrapTwo").slideUp(500);
	$("#wrapThree").slideDown();
	$('.img').jqFloat({
		width: 10,
		height: 10,
		speed: 1000
	})
})
// 关闭系统默认触摸效果
touch.on(wrapThree, "touchstart", function(e) {
	var event1 = window.event || e;
	event1.preventDefault();
})
// 添加向上轻扫手势
touch.on(wrapThree, "swipeup", function() {
	$("#wrapThree").slideUp(500);
	$("#wrapFour").slideDown();
	$("#p1").fadeIn(300);
	$("#p1").animate({
		opacity: "1",
		left: "2.8rem"
	}, 300, function() {
		$("#p2").animate({
			opacity: "1"
		}, 500, function() {
			$("#bg1").animate({
				height: "13.3rem",
				left: "-1.5rem",
				top: "0rem"
			}, 800, function() {
				//线从外向里
				$("#cirxle").show(200)
				$("#circle").animate({
					width: ".5rem",
					height: "0.5rem",
					left: "3.1rem",
					top: "5.5rem",
				}, 1000)
			})
			//头像依次显示
			$("#img4_1").animate({
				width: "1.5rem",
				left: "2.5rem",
				top: "1.5rem"
			}, 1000);
			$("#img4_2").animate({
				width: "1.5rem",
				left: "0.8rem",
				top: "6rem"
			}, 1100);
			$("#img4_3").animate({
				width: "1.5rem",
				left: "5rem",
				top: "8rem"
			}, 1200);
			$("#img4_4").animate({
				width: "1.5rem",
				left: "4.5rem",
				top: "5.5rem"
			}, 1300);
			$("#img4_5").animate({
				width: "1.5rem",
				left: "5rem",
				top: "3rem"
			}, 1400);
			$("#img4_6").animate({
				width: "1.5rem",
				left: "0.2rem",
				top: "3.5rem"
			}, 1500);
			$("#img4_7").animate({
				width: "1.5rem",
				left: "0.7rem",
				top: "8rem"
			}, 1600);
			$("#img4_8").animate({
				width: "1.5rem",
				left: "2.5rem",
				top: "9.5rem",
			}, 1700, function() {
				$("#bottom").show(1000)
			});
		})
	})
})
// 点击显示大图
var i;
$(".imga").click(function() {
	$("#box4_2,#p1,#p2,#bottom").hide();
	$("#box4_3").show()
	$("#imgbox").animate({
		left: -$(this).index() * $("#imgWrap").width()
	}, 100);
	i = $(this).index();
	$("#ballbox").show(function() {
		$(".ball").animate({
			width: "0.6rem",
			height: "0.6rem",
		}, 1000)
	})
})
//轮播切换
$("#leftRow").click(function() {
	console.log("1")
	i--;
	if (i < 0) {
		i = 7;
	}
	$("#imgbox").animate({
		left: -i * $("#imgWrap").width()
	}, 200)
})
$("#rightRow").click(function() {
	i++;
	if (i > 7) {
		i = 0;
	}
	$("#imgbox").animate({
		left: -i * $("#imgWrap").width()
	}, 200)
})
$("#X").click(function() {
	$("#p1,#p2,#bottom").fadeIn(500);
	$("#box4_2").fadeIn(1000)
	$("#box4_3").hide();
})
// 添加向上轻扫手势
touch.on(wrapFour, "swipeup", function() {
	$("#wrapFour").slideUp(500);
	$("#wrapFive").slideDown(function() {
		$("#tamen").show();
		$(".imgDiv").show();
		$("#imgDiv10").animate({
			height: "2rem",
		}, 500, function() {
			$("#imgDiv9").animate({
				height: "2rem",
			}, 500)
			$("#gy10").show(200);
			$("#imgDiv10").animate({
				top: "-=0.5rem",
				left: "-=0.4rem"
			}, 500, function() {
				$("#imgDiv8").animate({
					height: "2rem",
				}, 500)
				$("#gy9").show(200);
				$("#imgDiv9").animate({
					top: "-=0.5rem",
					left: "-=0.4rem"
				}, 500, function() {
					$("#imgDiv7").animate({
						height: "2rem"
					}, 500)
					$("#gy8").show(200);
					$("#imgDiv8").animate({
						top: "-=0.5rem",
						left: "-=0.4rem"
					}, 500, function() {
						$("#imgDiv6").animate({
							height: "2rem"
						}, 500)
						$("#gy7").show(200);
						$("#imgDiv7").animate({
							top: "-=0.5rem",
							left: "-=0.4rem"
						}, 500, function() {
							$("#imgDiv5").animate({
								height: "2rem"
							}, 500)
							$("#gy6").show(200);
							$("#imgDiv6").animate({
								top: "-=0.5rem",
								left: "-=0.4rem"
							}, 500, function() {
								$("#imgDiv4").animate({
									height: "2rem"
								}, 500)
								$("#gy5").show(200);
								$("#imgDiv5").animate({
									top: "-=0.5rem",
									left: "-=0.4rem"
								}, 500, function() {
									$("#imgDiv3").animate({
										height: "2rem"
									}, 500)
									$("#gy4").show(200);
									$("#imgDiv4").animate({
										top: "-=0.5rem",
										left: "-=0.4rem"
									}, 500, function() {
										$("#imgDiv2").animate({
											height: "2rem"
										}, 500)
										$("#gy3").show(200);
										$("#imgDiv3").animate({
											top: "-=0.5rem",
											left: "-=0.4rem"
										}, 500, function() {
											$("#imgDiv1").animate({
												height: "2rem"
											}, 500)
											$("#gy2").show(200);
											$("#imgDiv2").animate({
												top: "-=0.5rem",
												left: "-=0.4rem"
											}, 500)
											$("#gy1").show(200);
											$("#imgDiv1").animate({
												top: "-=0.5rem",
												left: "-=0.4rem"
											}, 500, function() {
												$("#tap").show();
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	});
})


$(".imgDiv").click(function() {
	var j = $(this).index() + 1;
	$(".imgD").css("transform", "rotateZ(0deg)")
	$("#imgD" + j).show();

})
$(".fX").click(function() {
	$(".imgD").css("transform", "rotateZ(15deg)")
	$(".imgD").hide(500);
})
touch.on(wrapFive, "swipeup", function() {
	$("#wrapFive").slideUp(500);
	$("#wrapSix").slideDown(function() {
		$("#img6_1_1").animate({
			left: "0.5rem"
		}, 1000)
		$("#img6_1_2").animate({
			width: "2.5rem",
			left: "2.2rem",
			top: "0.8rem"
		}, 1000)
		$("#img6_1_3").animate({
			left: "4rem"
		}, 1000, function() {
			$("#img6_1_4").show(500)
		})
		$("#img6_1_6").animate({
			left: "-1rem"
		}, 1000)
		$("#img6_1_7").animate({
			left: "6.8rem"
		}, 1000)
		$("#img6_1_8").animate({
			left: "0rem"
		}, 1000)
		$("#img6_1_9").animate({
			left: "7.2rem"
		})
		$("#img6_1_10").animate({
			width: "0.6rem",
			left: "7rem",
			top: "10rem"
		}, 1000, function() {
			$("#img6_1_5").fadeIn(500)
			$("#img6_2_4").fadeIn(500)
			$("#img6_2_3").fadeIn(1000)
			$("#img6_2_6").fadeIn(1200)
			$("#img6_2_2").fadeIn(1500)
			$("#img6_2_1").fadeIn(2000)
			$("#img6_2_5").fadeIn(2800)
		})
	})
})
var wrapSix = document.getElementById("wrapSix");
touch.on(wrapSix, "swipeup", function() {
	$("#wrapSix").slideUp(500);
	$("#wrapSeven").slideDown(function() {
		$("#imgbox7_1").show();
		$(".img7").jqFloat({
			width: 10,
			height: 10,
			speed: 1000
		})
		$("#img7_1_6").fadeIn(1000, function() {
			$("#img7_1_7").show(1000)
			$("#imgbox7_3").show();
			$("#block").animate({
				top: "13rem",
			}, 4000)
			$("#img7_1_8,#img7_1_9,#img7_1_10").show()
			$("#img7_1_8").animate({
				left: "2.2rem",
			}, 1000)
			$("#img7_1_9").animate({
				left: "0.3rem",
			}, 2300)
			$("#img7_1_10").animate({
				left: "2.2rem",
			}, 3600)
		})
	})
})
var wrapSeven = document.getElementById("wrapSeven");
// 关闭系统默认触摸效果
touch.on(wrapSeven, "touchstart", function(e) {
	var event1 = window.event || e;
	event1.preventDefault();
})
touch.on(wrapSeven, "swipeup", function() {
	$("#wrapSeven").slideUp(500);
	$("#wrapEight").slideDown(function() {
		$("#imgbox8_1").show()
		$("#img8_1_1").animate({
			left: "0.5rem",
		}, 1000)
		$("#img8_1_2").animate({
			left: "1.8rem",
			top: "1.2rem"
		}, 1000)
		$("#img8_1_3").animate({
			left: "3.9rem",
			top: "1.1rem"
		}, 1000)
		$("#img8_1_4").animate({
			left: "5.6rem",
			top: "3rem"
		}, 1000)
		$("#img8_1_5").animate({
			left: "-0.3rem",
		}, 1000)
		$("#img8_1_6").animate({
			left: "6.5rem",
		}, 1000, function() {
			$("#img8_1_7").animate({
				left: "2rem"
			}, 1000, function() {
				$("#img8_2_1").show(500);
				$("#img8_2_2").fadeIn(800);
				$("#img8_2_3").animate({
					top: "9.3rem"
				}, 200, function() {
					$("#img8_2_4").animate({
						top: "9.3rem"
					}, 200, function() {
						$("#img8_2_5").animate({
							top: "9.3rem"
						})
					})
				})
			})

		})
	})
})

touch.on(wrapEight, "swipeup", function() {
	$("#wrapEight").slideUp(500);
	$("#wrapNine").slideDown();
})
