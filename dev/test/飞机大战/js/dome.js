// JavaScript Document
var Game = {
	
	init : function(){
		
		this.spendTime = 3*1000;
		this.runTime = 2;
		this.interface = $("#interface");
		this.createScore();
		this.createAir();
		
		var This = this;
		this.eTimer = setInterval(function(){
			This.ceateEnemyAir();
		},This.spendTime)
		
		this.life = true;
		this.ishuaxin = false;
		this.ishaveboss = false;
	},
	
	createScore : function(){//创建积分
		var score = $('<div class="score">积分：<span>0</span></div>');
		
		$(this.interface).before($(score));
		this.garde = $(score).children('span');
	},
	
	refreshGarde : function() //刷新分数
	{
		var btn = false;
		
		var garde = parseInt($(this.garde).html());
			
		if(this.ishuaxin)
		{
			garde = parseInt(garde+1); 
			$(this.garde).html(garde); //分数刷新
		}
		
		if(garde===2)
		{
			btn = true;
			clearInterval(this.eTimer);//关掉小飞机
		}
		if(btn)
		{
			this.createBoss(); // 创建boss
			this.ishaveboss = true;
		}
	},
	
	ceateEnemyAir : function(){ //随机创建敌机
		var This = this;
		//this.e1 = null ;
		//var box = [];
		//this.box = box;
		//clearInterval(timer);
		//开启创建敌机定时器
		//this.eTimer = setInterval(function(){
			this.randomBuilder1 = parseInt(Math.random()*286);
			this.randomBuilder2 = parseInt(Math.random()*297);
			var e1 = $("<div class='enemy1' style='position:absolute;top:0px;left:"+this.randomBuilder1+"px;'></div>"); 
			var e2 = $("<div class='enemy2' style='position:absolute;top:0px;left:"+this.randomBuilder2+"px;'></div>");
			//var e1 = $("<img src='images/enemy1_fly_1.png' style='position:absolute;top:0px;left:"+this.randomBuilder+"px;'>")
 			
			$(This.interface).append($(e1));
			$(This.interface).append($(e2));
			this.e1 = e1;
			this.e2 = e2;
			//box.push(e1,e2);
			
			//开启敌机运动定时器
			this.eRuntimer = setInterval(function(){
				/*for(var i=0;i<box.length;i++)
				{
					
					This.airRun(box[i]);
				}*/
				This.airRun(e1);
				This.airRun(e2);
			},This.runTime)
			
		//},This.spendTime);
		//clearInterval(e1._timer);
		
		//开启敌机运动定时器
		
		
	},
	
	airRun : function(obj){ //敌机移动
		var _top = parseInt($(obj).css("top"));
		_next =  _top + 1;

		if(_next>544)
		{
			$(obj).remove();
				
			obj = null;
			//clearInterval(this.eRuntimer);
		}
		$(obj).css("top",_next);
		
		if(this.life)
		{
			if(this.crash(obj,this.air))
			{
				//this.xueliang --;
				//if(this.xueliang==0)
				//{
				this.life = false;
				alert('游戏结束');
				window.location.reload();
				//}
			}
		
			if(this.crash(obj,this.bullet))
			{
				$(obj).remove();
				console.log($(obj).css("top"));
				$(this.bullet).remove();
				this.bullet = null;	
				obj = null;
				this.ishuaxin = true;
				this.refreshGarde();
			}
			
			if(this.crash(obj,this.bomb))
			{
				this.ishuaxin = true;
				this.refreshGarde();
				$(obj).remove();
				obj = null;
			}
		}
	},
	
	createAir : function(){//创建飞机
		var air = $("<div class='air1'></div>");
		this.air = air;
		this.xueliang = 2;
		$(this.interface).append($(air));
		this.bindAir(air);
	},

	bindAir : function(obj){//操作飞机
		var This = this;
		
		document.onkeydown = keyDown;
		
		document.onkeyup = keyUp;
		
		//for(var i=0;i<This.box.length;i++)
		//{
			
		//}
		
		function keyDown(e){
			var e = e || window.event;
			var _left = parseInt($(obj).css('left'));
			var _top = parseInt($(obj).css("top"));
			
			if(e.keyCode == 39)
			{
				_left_next = _left+10;
				if(_left>275){
					$(obj).css('left',_left);
				}else{
					$(obj).css('left',_left_next);
				}
				
			}
			else if(e.keyCode == 37)
			{
				_left_next = _left-10;
				if(_left<3){
					$(obj).css('left',_left);	
				}else{
					$(obj).css('left',_left_next);
				}	
			}
			else if(e.keyCode == 38)
			{
				_top_next = _top - 10;
				if(_top<0){
					$(obj).css("top",_top);	
				}else{
					$(obj).css("top",_top_next);
				}
			}
			else if(e.keyCode == 40)
			{
				_top_next = _top + 10;
				if(_top>510){
					$(obj).css("top",_top)
				}else{
					$(obj).css("top",_top_next);
				}
			}
			else if(e.keyCode == 65)
			{
				//setInterval(function(){
					This.skill();
				//},500)
			}
		}
		
		function keyUp(e){
			var e = e || window.event;
			
			if(e.keyCode == 32){ //发射子弹
			
				This.createBullet();

			}
		}
				
	},
	
	createBullet : function(){//创建子弹
		//var pox = [];
		var This = this;
		
		var bullet = $("<div class='bullet'><div>");
		
		$(this.interface).append($(bullet));
		this.bullet = bullet;
		
		var b_left = parseInt($(this.air).width())/2+parseInt($(this.air).css("left"))-parseInt($(bullet).width())/3;
		var b_top = parseInt($(this.air).css("top"))-parseInt($(bullet).height());
		
		$(bullet).css({
			left : b_left,
			top : b_top
		});
		//pox.push(bullet);
		
		this.bulletimer = setInterval(function(){
			//for(var i=0;i<pox.length;i++)
			//{
				This.bulletRun(bullet);
			//}
		},1)
	},  
	
	skill : function(){
		var bomb = $("<div class='bomb' style='top:532px;'></div>");
		$(this.interface).append(bomb);
		this.bomb = bomb;
		
		setInterval(function(){
			var top_ = parseInt($(bomb).css("top"));
			top_next = top_ - 1;
			$(bomb).css("top",top_next);
			
			if(top_next<0)
			{
				$(bomb).remove();
				obj = null;
			}
			
		},2)
		
		
	}
	,
	
	bulletRun : function(obj){//子弹运动
		//var enemy = this.box;
		var shot = 0;
		this.shot = shot;
		
		//var garde = parseInt($(This.garde).html());
		//var bombimg = $("<div class='e_bomb'><div>")

		//obj.timer = setInterval(function(){

			var top_ = parseInt($(obj).css("top"));
			top_next = top_ - 1;
			$(obj).css("top",top_next);
			
			if(top_next<0)
			{
				$(obj).remove();
				obj = null;
			}			
				
			//for(var i=0;i<enemy.length;i++)
			//{
				/*if(This.crash(obj,this.e1))
				{
					//clearInterval(obj.timer);
					garde = parseInt(garde+1); 
					$(This.garde).html(garde); //分数刷新
						
					if(garde===2)
					{
						btn = true;
						clearInterval(This.eTimer);//关掉小飞机
					}
					if(btn)
					{
						This.createBoss(); // 创建boss
					}

					 
					
					//$(enemy[i]).get(0).style.background.url = "images/enemy1_blowup_3.png";
					//enemy[i] = $("<div class='e_bomb'></div>");
					//$(This.interface).append(enemy[i]);
					//$(enemy[i]).attr("src","images/enemy1_blowup_3.png");
					
					$(this.e1).remove();
					$(obj).remove();
					
				}*/
				
			//}
			
			if(this.ishaveboss)
			{
				if(this.crash(obj,this.boss))
				{
					this.shot+=1;
					$(obj).remove();
					obj = null;
					
					console.log(this.shot);	
					if(this.shot === 2)
					{
						$(This.boss).remove();
						$(This.zidan1).remove();
						$(This.zidan2).remove();
						clearInterval(this.bossTimer);
					}
				}
			}
			//btn = false;*/	
		
		//},1)
		
	},
	
	crash : function(obj1,obj2){//碰撞
		var top_1 = parseInt($(obj1).css("top"));
		var height_1 = parseInt($(obj1).height());
		var left_1 = parseInt($(obj1).css("left"));
		var width_1 = parseInt($(obj1).width());
		
		var top_2 = parseInt($(obj2).css("top"));
		var height_2 = parseInt($(obj2).height());
		var left_2 = parseInt($(obj2).css("left"));
		var width_2 = parseInt($(obj2).width());
		if(top_1<(top_2+height_2) && (left_1+width_1)>left_2 && top_2<(top_1+height_1) && (left_2+width_2)>left_1)
			return true;
		return false;	
	},
	
	createBoss : function(){//创建boss
	
		var boss = $("<div class='boss' style='position:absolute;top:0px;left:105px;'></div>");
		
		$(this.interface).append(boss);
		this.boss = boss;
		
		this.runBoss();

	},
	
	runBoss : function(){//boss移动
		var This = this;
		var bianliang = 10;
		var L = 0;
		var R = parseInt($(this.interface).width()) - parseInt($(this.boss).width());
		
		this.bossTimer = setInterval(function(){
			var Left = parseInt($(This.boss).css("left"));
			if(Left>R)
			{
				bianliang *= -1; 
				//$(This.boss).css("left",Left-10)
			}
			else if(Left<L)
			{
				bianliang *= -1;
			}
			$(This.boss).css("left",Left+bianliang);
			
			This.createBossZidan();
			
		},1000)
		
	},
	
	createBomb : function(){
		var bomb = $("<div class='enemy3'></div>");
		$(this.interface).append($(bomb));
		this.bomb = bomb;
			
	},
	
	createBossZidan : function(){
		var This = this;
		
		var zidan1 = $("<div class='zidan' style='position:absolute;'></div>");
		var zidan2 = $("<div class='zidan' style='position:absolute;'></div>");
		
		this.zidan1 = zidan1;
		this.zidan2 = zidan2;
		$(this.interface).append(zidan1);
		$(this.interface).append(zidan2);
		
		var zidan_top = parseInt($(this.boss).css("top"))+parseInt($(this.boss).height());
		var zidan_left1 =  parseInt($(this.boss).css("left"))+parseInt($(this.boss).width())*1/4;
		var zidan_left2 =  parseInt($(this.boss).css("left"))+parseInt($(this.boss).width())*3/4;
	
		$(zidan1).css({
			"top" :zidan_top,
			"left" :zidan_left1
		});
		$(zidan2).css({
			"top" :zidan_top,
			"left" :zidan_left2
		});	
		
		this.zidanTimer = setInterval(function(){
			This.zidanRun(zidan1);
			This.zidanRun(zidan2);
		},10)
		
			
	},
	
	zidanRun : function(obj){	
		var _top = parseInt($(obj).css("top"));
		_next =  _top + 1;
		if(_next>544)
		{
			$(obj).remove();	
		}
		$(obj).css("top",_next);
		
		if(this.life)
		{
			if(this.crash(obj,this.air))
			{
				//this.xueliang -= 1;
				//console.log(this.xueliang);
				//if(this.xueliang == 0)
				//{
					this.life = false;
					alert('游戏结束');
					window.location.reload();
				//}
				
			}
		}
	}
	
	
};