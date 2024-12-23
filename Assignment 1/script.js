// 1.Create variables with different data types available in JS and print their data types along with each variable name in the console.
const Name = "Akshay";
console.log(Name + " has the datatype: " + typeof Name);

let age = 22;
console.log(age + " has the datatype: " + typeof age);

let price = 30.15;
console.log(price + " has the datatype: " + typeof price);

let Bool = false;
console.log(Bool + " has the datatype: " + typeof Bool);

const languages = ["Malayalam", "English", "Hindi", "Tamil"];
console.log("languages has the datatype: " + typeof languages);

let x;
console.log("x has the datatype: " + typeof x);

let a = null;
console.log(a + " has the datatype: " + typeof a);

const trainee = {
    name: "akshay",
    age: 22,
    place: "Calicut"
}
console.log("trainee has the datatype:" + typeof trainee);

const sample_array =["Akshay",22,30.15,false,null,undefined,NaN];
sample_array.forEach(value => {
    console.log(value,typeof value);
});

//2.Write a JS program to show an alert message on the loading of the website.
alert("The Website is Loading.Please Wait");

//3a. Remove number "6" from the array and console the length of the array.
const array = ["1", "2", "3", "4", "5", "6", "7"];
array.splice(5, 1);
console.log(array);
console.log("length of array is : " + array.length);

//3b.Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
const arr = ["1", "2", "3", "4", "5", "6", "7"];
arr.forEach((element) => {
    element=parseInt(element);
    console.log(typeof element);
});

//3c.Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
const array3 = ["1", "2", "3", "4", "5", "6", "7"];
array3.splice(4, 3);
console.log(array3);
array3.unshift("one", "two");
console.log(array3);

//3d.Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
const array4 = ["1", "2", "3", "4", "5", "6", "7"];
let result = "";
array4.forEach((element) => {
    result+=element;
});
console.log(result);

let sum = 0;
array4.forEach((element) => {
    element=parseInt(element);
    sum+=element;
});
console.log(sum);

//3e.Filter out item "3" from the array and console the array (use array method)
const array5 = ["1", "2", "3", "4", "5", "6", "7"];
array5.splice(2, 1);
console.log(array5);

//3f.Iterate the array and console the item, when item is either "3", "6" or "7"
let array6 = ["1", "2", "3", "4", "5", "6", "7"];
array6.forEach((element) => {
    if(element==3 || element==6 || element==7){
        console.log(element);
    }
});

//3g.[1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
let array_string = ["1", "2", "3", "4", "5", "6", "7"];
let array_string2 = [1, 2, "3", 4, 5, 6, "7"];

for (let value1 of array_string) {
    for (let value2 of array_string2) {
        if (typeof value1 === typeof value2) {
            console.log(value2);
        }
    }
    break;
}

//3h.[0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
const nums = [0, 2, 3, 7, 5, 6, 8];
for (let i = 0; i < nums.length; i++) {
    nums[i] *= i;
    if (nums[i] > 40) {
        console.log(nums[i]);
    }
}

//3i.Create two arrays with five items each and merge the array into a single array and then console it.
const even = [0, 2, 4, 6, 8];
const odd = [1, 3, 5, 7, 9];
const whole_numbers = even.concat(odd);
console.log(whole_numbers);
