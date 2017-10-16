function deepEqual(val1, val2){
	if (val1===val2){
		return true;
	}
	if (val1==null || typeof val1 !="object" ||val2==null ||typeof val2 !="object"){
		return false
	}

	var propsA=0;
	var propsB=0;
	for (var props in val1){
		propsA+=1;
	}
	for (var props in val2){
		propsB+=1;
		if (!(props in val1) || deepEqual(val1[props],val2[props])){
			return false;
		}
		return propsA==propsB
	}
}