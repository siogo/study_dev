// Your code here...
function getName(){
	var lastName = ['雨松','桐瑛','芷嫣','芷蝶','尔翠','馨蕊','妙榆','沛蓝','诗彤','桂菡','柳灵','娥君','俞冉','熙雯,翾忆','美萱','天瑜','怡江','馨嘉','思君','含香','易霜','柔君','凝易','问烟','梓霏','花邑','欢馨','雅静','凌菱','诗雁','书柳','香曼','倚梦','娟瑜','雁雪','优璇','初梅','萱霏','花悦','柏悦','春芙','醉安','含萱','梦瑶','纹妙','幻晴','孤秋','白桃','桐菱','凡雁','妙楠','香怡','俞菲','婉婷','梓滢','芬君','芸熙','雪慧','桂瑛','柳君','怡君','筱菱','思江','雅琳','飞凝','素冉','萱凝','寒春','玥婷','晓蝶','语巧','若云','书竹','素嫦','俞羽','桐滢','半香'];
	var firstName = ['赵','钱','孙','李','周','吴','郑','王','冯','陈','褚','卫','蒋','沈','韩','杨','朱','秦','尤','许','何','吕','施','张','孔','曹','严','华','金','魏','陶','姜','戚','谢','邹','喻','柏','水','窦','章','云','苏','潘','葛','奚','范','彭','郎','鲁','韦','昌','马','苗','凤','花','方','俞','任','袁','柳','酆','鲍','史','唐','费','廉','岑','薛','雷','贺','倪','汤','滕','殷','罗','毕','郝','邬','安','常','乐','于','时','傅','皮','卞','齐','康','伍','余','元','卜','顾','孟','平','黄']
	return firstName[Math.ceil(Math.random()*firstName.length)]+lastName[Math.ceil(Math.random()*lastName.length)];
}
function getPhone(){
	var start = [134,135,136,137,138,139,147,148,150,151,152,157,158, 159,182,183,184,187,188,178,198,130,131,132,140,145,146,155,156,166,185,186,175,176,133,149,153,180,181,189,177,173,174,199];
	var middle = Math.ceil(Math.random()*9999+1).toString();
	var end = Math.ceil(Math.random()*9999+1).toString();
	var phone = start[Math.ceil(start.length*Math.random())]+middle+end;
	phone.length !==11?phone = phone+'5':phone = phone;
	return phone;
}
function getResult(url){
	return new Promise(function(reject,resolve){
		const handler = function(){
			if(this.readyState !== 4){
				return ;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		}
		const client = new XMLHttpRequest();
		client.open('post',url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader("Accept", "application/json");

		client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		client.send('actId=20180709000207&salesCode=51302900002736&seq=1&salesName=何先渠&pubType=001&channel=PA&feedBackContent={"content":{"type":"01","1":"'+getName()+'","25":"'+getPhone()+'","19":"aaa","R1":"法国"},"actId":"20180709000207","seq":"1","salesCode":"51302900002736"}&feedBackContentP=&actType=020&actAddtionalType=002&openId=&uniqueId=')
	})
};
getResult('http://activity.e-chinalife.com/activity/action/addCustBack.do');