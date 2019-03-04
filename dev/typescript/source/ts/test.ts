function timeout(ms){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,ms,'done');
	})
}

timeout(300).then((result)=>{
	console.log(result);
})