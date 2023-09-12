const arr = Array()
console.log(arr)

//Lấy mục đầu tiên, mục giữa và mục cuối cùng của mảng
// const myArray = [1, 2, 3, 4, 5];

// const firstItem = myArray[0];

// const middleIndex = Math.floor(myArray.length / 2);
// const middleItem = myArray[middleIndex];


// const lastIndex = myArray.length - 1;
// const lastItem = myArray[lastIndex];

// console.log("First item:", firstItem);
// console.log("Middle item:", middleItem);
// console.log("Last item:", lastItem);


const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
//lấy số lượng công ty

console.log(itCompanies.length);

const numberOfCompanies = itCompanies.length;
console.log(numberOfCompanies);

//in công ty đầu, giữa và cuối

const firstCompany = itCompanies[0];
console.log(firstCompany);

const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompany = itCompanies[middleIndex];
console.log(middleCompany)
const lastCompany = itCompanies[itCompanies.length -1];
console.log(lastCompany)
//In ra từng công ty
itCompanies.forEach(function(company) {
    console.log(company)
})

//Thay đổi từng tên công ty thành chữ hoa và in chúng ra
itCompanies.forEach(function(company){
    const uppercaseCompany = company.toUpperCase();
    console.log(uppercaseCompany)
})

//In mảng như một câu: Facebook, Google, Microsoft, Apple, IBM,Oracle và Amazon là những công ty CNTT lớn.

const sentence = itCompanies.join(', ')+ ' là những công ty CNTT lớn.'
console.log(sentence)

const companyNameToFind = "Facebook";
if(itCompanies.includes(companyNameToFind)){
    console.log(`${companyNameToFind} tồn tại.`);
} else {
    console.log(`${companyNameToFind} không tồn tại`)
}
// Sắp xếp mảng itCompanies theo thứ tự từ A đến Z
itCompanies.sort();

console.log(itCompanies);
// Từ Z về A
itCompanies.reverse();
console.log(itCompanies);
// Loại bỏ 3 công ty đầu 
itCompanies.splice(0, 3);
console.log(itCompanies);

// Cắt bỏ 3 công ty cuối cùng khỏi mảng
itCompanies.splice(-3);
console.log(itCompanies);
// Loại bỏ các công ty CNTT trung gian khỏi mảng
// Xóa tên cty đầu tiên
itCompanies.shift();

console.log(itCompanies);

// Xóa tất cả công ty
itCompanies.splice(0);
console.log(itCompanies.splice())