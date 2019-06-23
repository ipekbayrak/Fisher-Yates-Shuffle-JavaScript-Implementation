// needs prng.js

function shuffle_string(str, int_key) {
	
 

	console.log("--- Fonksiyon Başlangıç ---");
	 
	var number = new Random(int_key).next();
	var number_str = ""
	
	if (str.length < 10 ){
		number_str = number.toString(str.length);
	} else {
		number_str = number.toString();
	}

	
	if (str.length === number_str.length){
		
	} else if (str.length > number_str.length) {
		while (number_str.length >= str.length) {
			number_str += number_str;
			console.log("number_str: " + number_str);
			console.log("str_______: " + str);
		}
		if (number_str.length > str.length) {
			number_str = number_str.substring(0,str.length);
		}
	} else {
		number_str = number_str.substring(0,str.length)
		console.log("number_str: " + number_str);
		console.log("str_______: " + str);
	}
	
	console.log("artık rakam dizisi ve string eşit uzunlukta");
	
 

	var strArray = str.split('');
	for (i = str.length; i >= 0; i-- ) {
		var temp = strArray[i] ;
		strArray[i] = strArray[ number_str[i] ];
		strArray[ number_str[i] ] = temp;
		
		console.log("number_str: " + number_str);
		console.log("str_______: " + strArray);
	}
	
	return strArray.join("");
}


function decode_string(str, int_key) {
	
 

	console.log("--- Fonksiyon Başlangıç ---");
	 
	var number = new Random(int_key).next();
	var number_str = ""
	
	if (str.length < 10 ){
		number_str = number.toString(str.length);
	} else {
		number_str = number.toString();
	}

	
	if (str.length === number_str.length){
		
	} else if (str.length > number_str.length) {
		while (number_str.length >= str.length) {
			number_str += number_str;
			console.log("number_str: " + number_str);
			console.log("str_______: " + str);
		}
		if (number_str.length > str.length) {
			number_str = number_str.substring(0,str.length);
		}
	} else {
		number_str = number_str.substring(0,str.length)
		console.log("number_str: " + number_str);
		console.log("str_______: " + str);
	}
	
	console.log("artık rakam dizisi ve string eşit uzunlukta");
	
 

	var strArray = str.split('');
	for (i = 0 ; i <= str.length ; i++ ) {
		var temp = strArray[i] ;
		strArray[i] = strArray[ number_str[i] ];
		strArray[ number_str[i] ] = temp;
		
		console.log("number_str: " + number_str);
		console.log("str_______: " + strArray);
	}
	
	return strArray.join("");
}