/*
const birthYear = [1994, 1997, 1998, 2000]

let calcAge = birthYear.map( (x, index) => `${index + 1} Age is: ${2020 - x}`)
console.log(calcAge)

    //console.log(calcAge);
  


const years = [1990, 1965, 1982, 1937];

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

// Lexical 'this'
/*
var kayoColor = {
    color: 'Green',
    position: 1,
    click: function(){
                document.querySelector('.green').addEventListener('click', () => {
                    alert(`This is ${this.color} is at ${this.position}st position` );
                    })
            }
               
}
kayoColor.click();
-----------Lexical This 
var friends = ['Saumil', 'Akshay','Ankit'];

var Name = function (name){
 this.name = name;
}

Name.prototype.myFriends= function(friendArray){
    var newArray = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(newArray);
}

 new  Name ('Shivani').myFriends(friends);

 var friends = ['Saumil', 'Akshay','Ankit'];

var Name = function (name){
 this.name = name;
}

Name.prototype.myFriends= function(friendArray){
    var newArray = friends.map(function(el){ 
         return `${this.name} is friends with ${el}`});
    console.log(newArray);
}

 new  Name ('Shivani').myFriends(friends);
 
//Destructuring BY RETURNING ARRAY

const birthYear = [1994, 1997, 1998];

function calc(year){
const age =year.map(el => new Date().getFullYear()- el);
return[[age], [age.map(el => 60-el)]]
}
const [[age], [rYears]] = calc(birthYear);
console.log(age);
console.log(rYears);


//-----------ARRAY inES6
//Converting list to array by using 'from' function

const listOfDOM = document.querySelectorAll('.box');
const arrOfDOM = Array.from(listOfDOM);
console.log(arrOfDOM);

for (const el of arrOfDOM){
    if (el.className.includes('blue')){
        continue;
    }
    el.textContent ='BOOM' ;
}

//SPREAD operator
const header = document.querySelector('h1');
const listOfBox = document.querySelectorAll('.box');
const all = [header, ...listOfBox];
all.forEach(el => el.style.color = 'pink')

function restoreOperator (limit, ...years){
     years.forEach(el => console.log(
      ( new Date().getFullYear()-el)>= limit))
}
restoreOperator(21, 1994,1991,1997,2000);

//-------------------------------


function restoreOperator1 (limit, ...years){
    return years.map(el => 
      ( new Date().getFullYear() - el)>= limit)
}
const y = restoreOperator1 (21, 1994,1991,1997,2000);
console.log(y)

//===========================
const birthYear = [1994, 1997, 1998];

function calc(year){
const age =year.map(el => new Date().getFullYear()- el);
return [age, ...age.map(el => 60-el), 99]
}
const [age, ...rYears] = calc(birthYear); 
console.log(age);
console.log(rYears);

//===========MAPS==========================

const question = new Map();
question.set('question', 'What is my fav dessert?');
question.set(1,'Dark Chocolate delicasies')
question.set(2,'Gajar halwo');
question.set(3,'Gulab Jamun');
question.set(4,'Mango Matho');
question.set('correct',3)
question.set(true, 'BINGO!!You know a lot about Shivani!');
question.set(false, 'You GHANTA do not know anything about me!');
//question.forEach((key, value) => console.log(`The Key ${key} is set to ${value}`) );
console.log(`${question.get('question')}`)
for(let [key,value] of question.entries()){
    if (typeof (key) === 'number'){
        console.log(`${value}`);
        
    } 
   
}
const ans = parseInt (prompt (`${question.get('question')}`));
console.log(question.get(ans === question.get('correct')))


//Declaring a constructor for Park and street
class townData {
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

// Declaring sub classes to create separate space for Parks and Street with required entities 
class Park extends townData {
    constructor (name, buildYear, numOfTree, parkArea, ){
        super(name, buildYear);
        this.numOfTree = numOfTree;
        this.parkArea = parkArea;
    }
    calcAge(bldYear){
       let age = new Date().getFullYear() - bldYear;
        //console.log(age);
        return age;
    }
    calcTreeDesity(nOfTrees, prkArea){
        let treeDensity = nOfTrees/prkArea;
        return treeDensity;
    }
}

class Street extends townData {
    constructor (name, buildYear, length, size = 'Normal'){
        super(name, buildYear)
        this.length = length;
        this.size = size;
        
    }
}

//Creating Parks with reference to the constructors created above 
const butterflyPark = new Park ('Butterfly', 2000, 1000, 900);
let butterflyParkAge = butterflyPark.calcAge(butterflyPark.buildYear);
let butterflyParkTreeDesity = butterflyPark.calcTreeDesity(butterflyPark.numOfTree, butterflyPark.parkArea);




const cherryBlossomPark = new Park ('cherryBlossom', 1994, 850, 850);

const pinkHeavenPark = new Park('pinkHeaven', 1991, 500, 1000);

//Creating Parks with reference to the constructors created above
const ottawaStreet = new Street('Ottawa', 2001, 500, 'Small');

const dougallStreet = new Street('Dougall', 1990, 1500, 'Huge');

const philipStreet = new Street('Philip', 2010, 650, 'Normal');

const kingsvilleStreet = new Street ('kingsville', 2004, 800, 'Big');

const rainbowStreet = new Street('Rainbow', 1880, 600);
*/
let intAge, streetLength = 0;
class townData {
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends townData {
    constructor (name, buildYear, numOfTree, parkArea, ){
        super(name, buildYear);
        this.numOfTree = numOfTree;
        this.parkArea = parkArea;
    }
    calcAge(bldYear){
       let age = new Date().getFullYear() - bldYear;
       return age;
    }
    calcTreeDesity(nOfTrees, prkArea){
        let treeDensity = nOfTrees/prkArea;
        return treeDensity;
    }
}
class Street extends townData {
    constructor (name, buildYear, length, size = 'Normal'){
        super(name, buildYear)
        this.length = length;
        this.size = size;
        
    }
}

//Creating Parks with reference to the constructors created above 
const butterflyPark = new Park ('Butterfly Park', 2000, 1000, 900);
const cherryBlossomPark = new Park ('cherry Blossom Park', 1994, 850, 850);
const pinkHeavenPark = new Park('pink Heaven Park', 1991, 500, 1000);

//Creating Parks with reference to the constructors created above
const ottawaStreet = new Street('Ottawa', 2001, 500, 'Small');
const dougallStreet = new Street('Dougall', 1990, 1500, 'Huge');
const philipStreet = new Street('Philip', 2010, 650, 'Normal');
const kingsvilleStreet = new Street ('kingsville', 2004, 800, 'Big');
const rainbowStreet = new Street('Rainbow', 1880, 600);

//Array containing all the parks and streets in the town
const parksArray = [butterflyPark, cherryBlossomPark,pinkHeavenPark];
const streetsArray = [ottawaStreet, dougallStreet, philipStreet, kingsvilleStreet, rainbowStreet];

console.log('--------------Data of PARKS across the town--------------');
//Print the name of Park with more than 1000 trees
parksArray.map(el => {
    if(el.numOfTree >= 1000) {
        console.log(`${el.name} has more than 1000 trees!`);
    }
});
//Calculate average age of Parks
parksArray.map(el =>{
    let age = el.calcAge(el.buildYear);
    intAge = age + intAge
})
let averageAge = ( intAge/(parksArray.length));
console.log(`Average age of all 3 parks is ${averageAge} years.`);
//Calculate and print tree desnity for each parksArray
parksArray.map(el =>{
    let treednsty =  el.calcTreeDesity(el.numOfTree,el.parkArea)
     console.log(`${el.name} has a tree density of ${treednsty} trees per square km.`)
})

console.log('--------------Data of STREETS across the town--------------');
//Calculate and print total and average length of streets in the townData
streetsArray.map(el =>{
    streetLength = el.length + streetLength;
})
let streetAverage = (streetLength / (streetsArray.length))
console.log(`The total length of streets across the town is ${streetLength}kms, whereas the average length of all the streets is ${streetAverage} kms.`)
//Print the name of each street with its size, if the size is not provided, print 'normal' as default
streetsArray.map(el =>{
    console.log(`${el.name}, built in ${el.buildYear}, is a ${el.size} street.`);
})
