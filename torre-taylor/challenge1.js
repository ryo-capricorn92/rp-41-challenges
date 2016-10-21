//1.
function billTotal(subtotal){
    var totalTax = subtotal * .095;
    var totalTip = subtotal * .15;
    var total = totalTax + totalTip + subtotal;
    return total;
}
billTotal(10);
//2.
function animalNoise(animal, emotion){
    if(animal==="cat" && emotion ==="sad"){
        return "meowboohoo";
    } else if (animal==="dog" && emotion ==="happy"){
        return "bark bark barkity bark";
    } else {
        return "wrong combo";
    }
}
animalNoise("cat", "sad");
//3.
function digitalSum(num){
    var result = 0;
    while(num >= 1 ){
        result = result + num % 10;
        num = Math.floor(num / 10);
        }
    return result;

}
digitalSum(1100555);
