function curry(callback) {
	const collected=[];
	
	function curried(...args) {
		if(args.length===0){
			const result=callback(...collected);
			collected.length=0;
			return result;
		}

		collected.push(...args);
		return curried;
	}

	return curried;
}

module.exports=curry
