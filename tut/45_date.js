const now = new Date();
console.log(now.toString()); // Current date and time

console.log('년: ', now.getFullYear()); // Year
console.log('월: ', now.getMonth() + 1); // Month (0-11, so add 1)
console.log('일: ', now.getDate()); // Date (1-31)

const birthday = new Date(2000, 6, 28);
console.log(`생일: ${birthday.toDateString()}`); // Date string

const passed_time = now.getTime();
console.log(passed_time); // Current time in milliseconds since 1970-01-01T00:00:00Z

const birthday_time = birthday.getTime();
const diff_days = Math.floor((passed_time - birthday_time) / (1000 * 60 * 60 * 24));
console.log(`태어난지 ${diff_days}일 지났습니다.`); // Days until birthday