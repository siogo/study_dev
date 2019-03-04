function fib(max){
	let n = 0;
	let a = 0;
	let b = 1;
	while(n<max){
		console.log(b)
		let a1 = a;
		let b1 = b;
		a = b;
		b = a1+b1;
		n = n+1;
	}
	return 'done'
}

fib(6)