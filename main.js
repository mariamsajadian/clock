// how to get data from an object

// date and time are object and we use object constrautor
const now = new Date();
// console.log(now);
// console.log(typeof now);

//seperate year, months, day, time
const year = now.getFullYear();
// console.log("this year is:" , year);
const month = now.getMonth();
// console.log("this month is:" , month);
const day = now.getDay();
// console.log("today is: ", day);
// for day of weeks and months name it gives you number






//timestamps
const before = new Date('February 1 2019 7:30:59');
const now1 = new Date();
// const timeStamp = now.getTime();
// console.log(timeStamp);milisecond 

const diff = now1.getTime() - before.getTime();
console.log(diff);
const min = Math.round(diff / 1000 / 60);
const hours = Math.round(min / 60);
const days = Math.round(hours / 24);
console.log(`The blog was written ${days} ago.`)

const timestamp = 91858917483;
const convertTodate = new Date(timestamp);// we change the number to an object and then display that.
console.log(convertTodate);