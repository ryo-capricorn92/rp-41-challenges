// 1.
function billTotal(subtotal) {
    if (subtotal > 0) {
        tip = .15*subtotal;
        tax = 0.095*subtotal;
        return subtotal + tip + tax;
    }
    return subtotal
}
// 2.
function animalNoise(animal, emotion) {
    if (animal === 'Dog' && emotion === 'Happy') {
        return 'Woof! Woof!';
    }
    else if (animal === 'Cat' && emotion === 'Hungry') {
        return 'Meoooowwwwww...';
    }
    else {
        return 'No idea';
    }
// 3.
function digitalSum(n) {
    var result = 0;
    if (Math.floor(n % 10) > 0) {
        var one = n % 10
        result += one
        n = Math.floor(n / 10)
        return result += one
    }
    return result
}
