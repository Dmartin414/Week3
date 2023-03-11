//Q1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Q1b
console.log(ages[ages.length - 1] - ages[0]);

//q1C
ages.push(16);
console.log(ages[ages.length - 1] - ages[0])

//Q1C
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i]
    console.log(i);
}

console.log(sum / ages.length);


//Q2
let name = ['Sally', 'Tommy', 'Tim', 'Sam', 'Buck', 'Bob']

//Q2a
sum = 0
for (let i = 0; i < name.length; i++) {

    sum = sum + name[i].length
}

console.log(sum / name.length);

//Q2b
let output = ''
for (let i = 0; i < name.length; i++) {
    output += name[i] + ' ';

}
console.log(output);

//Q3
//array.latIndexOf() // array[array.legnth - 1]

//Q4
//array.indexOf() // array[0]

//Q5
let nameLengths = []
for (let i = 0; i < name.length; i++) {
    nameLengths.push(name[i].length)

}
console.log(nameLengths);

//Q6
sum = 0
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]
}
console.log(sum)

//Q7
function repeat (word, n) {

    let output = ''
    for (let i = 0; i < n; i++) {
        output += word;
    }
    return output; 
}

//Q8
function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}

//Q9
function isGreaterThanHundred(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum > 100;
}
console.log(isGreaterThanHundred([50, 55]));

//Q10
function average(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
}   
console.log(average([3, 5, 10, 8]));

//Q11
function greaterAverage(numbers1, numbers2) {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    let average1 = sum / numbers1.length;

    let sum2 = 0;
    for( let i = 0; i < numbers2; i++) {
        sum2 += numbers2[i];
    }
    let average2 = sum2 / numbers2.length;

    return average1 > average2;
}
console.log(greaterAverage([1,1], [11,11]))

//Q12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside) {
        if (moneyInPocket > 10.50) {
            return true
        }
    }
    return false
}
console.log( willBuyDrink(false, 9))

/*
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

*/

//Q13
function findDevin(names) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === "Devin") {
            return "Devin's a loser"; 
        }  
    } 
    return "Devin's okay"
}
console.log(findDevin(["Court", 'Katie', 'Devinne']));