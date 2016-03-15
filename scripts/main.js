// Question 1

//setting both variables equal to zero
var total = 0;
var average = 0;

//calling the function called averageNum and passing in array as an argument
function averageNum(array){
// saying that total = total + array.price
 total += array.price;
 //returning what the total variable is now equal to
 return total;
}

//going through each object and gettng the price for that object
items.forEach(averageNum);

//calculating the average and console.logging the average price
average = (total /items.length).toFixed(2);
console.log('The average price is $'+average+'.');



//Question 2
// going through each item and running the returnArrayOfItems function
items.forEach(returnArrayOfItems);
//creating a function and giving it the current value, index, and array arguments
function returnArrayOfItems(currentValue, index, array) {
//creating an if statement to check if the price is between 14 and 18
    if(currentValue.price >= parseFloat(14) && currentValue.price <= parseFloat(18)) {
//console.logging the entire object if it is
        console.log(currentValue);
    }
}

//Question 3
// going through each item and running the findGBP function
items.forEach(findGBP);

function findGBP(currentValue) {
//creating a function and giving it the currentValue argument
	if(currentValue.currency_code === 'GBP') {
//checking to see if the currency code of any objects are equal to GBP and if 
//they are console.logging their title and price
		console.log(currentValue.title);
		console.log(currentValue.price);
		console.log(currentValue.title + ' costs £'+ currentValue.price);
	}
}


//Question 4
//going through each item and running the madeOfWood function
items.forEach(madeOfWood);
//creating a function and giving it the currentValue argument
function madeOfWood(currentValue) {
// please show me how I can do this without using an || statement
	if(currentValue.materials[0] === 'wood' || currentValue.materials[5] === 'wood' || currentValue.materials[1] === 'wood') {
		console.log(currentValue.title);
	}
}


//Question 5
//going through each item and running the eightOrMore function
items.forEach(eightOrMore);
//creating a function and giving it the currentValue argument
function eightOrMore(currentValue) {
//saying if each array or materials has more than eight items, then console.log the statements below
	if(currentValue.materials.length >= 8) {
		console.log(currentValue.title)
		console.log(currentValue.materials);
	}
}


//Question 6
// declaring a variable and setting it equal to 0
var seller = 0;
//going through each item and running theSeller function
items.forEach(theSeller)
//creating a function and giving it the currentValue argument
function theSeller(currentValue) {
//asking if currentValue.who_made is equal to i_did and if so then seller should increase by 1
	if (currentValue.who_made === 'i_did') {
		seller++;
	}
}

//console.logging my total number of sellers who made their item themselves
console.log(seller);
console.log(seller + ' were made by their sellers');






