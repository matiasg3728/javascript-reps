// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"

function lengths(arrayOfStrings) {
	var nArray = [];
  // we can log out our "arrayOfStrings"
  console.log(arrayOfStrings);
  for(i=0; i< arrayOfStrings.length;i++ ){

  	nArray.push(arrayOfStrings[i].length);

  }

  // now, we want to "return" something... but what?

  return nArray;

}


function transmogrifier(a, b, c){

	return(Math.pow((a*b), c))
}

function toonify(accent, pString){

	if(accent == "daffy"){
		return pString.replace("s", "th");
	}
	else if(accent == "elmer"){
		return pString.replace("r", "w");
	}

}

function wordReverse(pString){

	var rString = pString.split(" ");

	rString.reverse();

	var nString = "";

	for(i in rString){

		nString += rString[i] + " ";

	}
	return nString;
}

// function letterReverse(pString){

// 	var nString=""
// 	for(i = pString.length; i>=0; i--){

// 		nString+= pString.substring(i, i-1)

// 	}
// 	return nString;

// }

function letterReverse(pString){

	var nArray=pString.split(" ")
	var nString=""
	for(i in nArray ){

		var q = nArray[i].split();
		q.reverse();
		for(i=0; i<q.length;i++){
			nString += q;
		}
	}
	return nString;

}

function longest(pArray){
	var longest = "";
	for (var i = 0; i < pArray.length; i++) {

		if(pArray[i].length > longest.length)
	 	longest = pArray[i];
	};
	return longest;
}

function repMaster( pString, pFunction){
	return pFunction(pString) + " proves that I am the rep MASTER!"
}