function billTotal(subtotal){

	/* given subtotal of restaurant bill, return total with 15% tip on subtotal and 9.5% tax on subtotal
	*/
	return subtotal + (subtotal*0.15) + (subtotal*.095);

}
billTotal(10);

function animalNoise(animal, emotion) {

var noise;

if(animal === "cat"){
	if(emotion === "angry" || emotion === "happy" || emotion ==="sad" || emotion =="surprised"){
			noise = "the sound a sociopath makes before killing for sport";
		}
	}
else if (animal === "dog"){
	if (emotion === "angry"){
		noise = "bark"

	} else if(emotion ==="happy"){
		noise = "bark!";

	} else if(emotion==="sad"){
		noise = "bark!!";

	} else if(emotion ==="surprised"){
		noise = "bark!!!";
	} else {
		noise = "ruff";
	}

}else{
	noise = "** silence **";
}


return noise;

}
animalNoise("dog", "surprised"); //bark!!!
animalNoise("duck", "angry"); // ** silence **
animalNoise("dog", "sad"); //bark!!
animalNoise("dog", "happy"); //bark!
animalNoise("dog", "supersurprised") // ruff
animalNoise("cat", "surprised"); //the sound a sociopath makes before killing for sport
animalNoise("dog", "angry"); //bark
animalNoise("cat", "sad"); //the sound a sociopath makes before killing for sport
animalNoise("cat", "happy"); //the sound a sociopath makes before killing for sport
animalNoise("cat", "angry"); //the sound a sociopath makes before killing for sport


function digitalSum(n) {
	//gameplan: combine modulo , /, and math.floor to reduce n to zero
	// 1337 % 10 = 7.  Subtract result from n and add to total
	// 1330
var total=0;
var rem = 10;
while(n%10 >0){
	total += n%10;
	n = n- n%10;
	alert("total is " + total + " and n remaining is " + n);
	}

while(n%100>0){
	total += (n%100)/10;
	n = n- n%100;
	alert("total is " + total + " and n remaining is " + n);

}
while(n%1000>0){
	total += (n%1000)/100;
	n = n- n%100;
	alert("total is " + total + " and n remaining is " + n);

}
while(n%10000>0){
	total += (n%10000)/1000;
	n = n- n%100;
	alert("total is " + total + " and n remaining is " + n);

}
return total;
}
digitalSum(1337); // return 14



digitalSum(123213); // return 12
