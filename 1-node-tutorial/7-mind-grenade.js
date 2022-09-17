const num1 =5;
const num2 = 10;

function addValue(){
    console.log("the sum is: " + (num1 + num2));
}
// If we invoke the function here, then this will run right at the time another module invoke this.
addValue()