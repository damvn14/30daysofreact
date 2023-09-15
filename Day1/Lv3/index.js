//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sắp xếp mảng
ages.sort((a, b) => a - b);

//Tìm tuổi tối thiểu và tối đa
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

//Tìm tuổi trung niên
const middle = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middle - 1] + ages[middle]) / 2 : ages[middle];

//Tìm tuổi trung bình
const sum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sum / ages.length;

//Tìm phạm vi độ tuổi
const ageRange = maxAge - minAge;

//// So sánh giá trị (min - Average) và (max - Average) sử dụng abs()
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log('Mảng đã sắp xếp:', ages);
console.log('Tuổi tối thiểu:', minAge);
console.log('Tuổi tối đa:', maxAge);
console.log('Tuổi trung niên:', medianAge);
console.log('Tuổi trung bình:', averageAge);
console.log('Phạm vi độ tuổi:', ageRange);
console.log('Min - Average:', minDiff);
console.log('Max - Average:', maxDiff);

//Slice mười quốc gia đầu tiên từ mảng quốc gia

const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

