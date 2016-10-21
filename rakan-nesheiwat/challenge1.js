function billTotal(subTotal){
	return parseFloat((subTotal * 1.095 + subTotal * .15).toFixed(2), 10);
}


function animalNoise(animal, emotion){
	if(emotion === 'happy'){
		if(animal==='cat'){
			return "Meowwwwwww";
		}
		else if(animal === 'dog'){
			return "Woof Woof Woof";
		}else `${animal} is not registered yet..maybe next time`;

	}else if(emotion === 'angry'){
		if(animal==='cat'){
			return "Rawrrrr";
		}
		else if(animal === 'dog'){
			return "Arf Arf";
		}else `${animal} is not registered yet..maybe next time`;

	}else if(emotion === 'sad'){
		if(animal==='cat'){
			var noise = prompt("Do you know what a sad cat sounds like?");
			return `:(.. ${noise}`;
		}
		else if(animal === 'dog'){
			var noise = prompt("Do you know what a sad dog sounds like?");
			return `:(.. ${noise}`;
		}else `${animal} is not registered yet..maybe next time`;

	}else return `${emotion} is not registered yet..maybe next time`;
}

function digitalSum(n){
	if(n % 10 === n){
		return n;
	}else {
		return (n % 10) + digitalSum(Math.floor(n / 10));
	}
}
