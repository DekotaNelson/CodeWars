/*Description:

Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.

Links referring to logical operations: AND, OR and XOR.

First Example:

Input: true, true, false, operator: AND

Steps: true AND true -> true, true AND false -> false

Output: false

Second Example:

Input: true, true, false, operator: OR

Steps: true OR true -> true, true OR false -> true

Output: true

Third Example:

Input: true, true, false, operator: XOR

Steps: true XOR true -> false, false XOR false -> false

Output: false

Input:

boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

Output:

calculated boolean*/

//AND
function andCalc(array) {
	//confirm all are the same 
	if (array.every((x) => x===true) || array.every((x)=>x===false)) {
		 return array[0];
	} else {
		return false;
	}
}

//OR
function orCalc(array){
	//if prev and curr are the same, return first
	//if prev and curr are not the same, return true
	return array.reduce((x,y,z)=>{return x===y ? x : true;});
}

//XOR
function xorCalc(array) {
	return array.reduce((x,y,z)=>x!==y);
}

function logicalCalc(array,op) {
	if (op==='AND') {
		return andCalc(array);
	} else if (op === 'OR') {
		return orCalc(array);
	} else if (op === 'XOR') {
		return xorCalc(array);
	}
}

logicalCalc([ true, true, false, false ],'OR');