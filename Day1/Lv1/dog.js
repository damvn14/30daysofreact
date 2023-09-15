// Tạo một đối tượng trống tên là 'dog'
const dog = {};

// In đối tượng con chó trên bảng điều khiển
console.log(dog);

// Thêm các thuộc tính vào đối tượng con chó
dog.name = 'Husky';
dog.legs = 4;
dog.color = 'Xám';
dog.age = 3;

// Thêm phương thức 'bark' vào đối tượng con chó
dog.bark = function () {
  return 'Hu hu hu';
};

// In thông tin về đối tượng con chó
console.log(`Tên: ${dog.name}`);
console.log(`Số chân: ${dog.legs}`);
console.log(`Màu sắc: ${dog.color}`);
console.log(`Tuổi: ${dog.age}`);
console.log(`Vỏ cây: ${dog.bark()}`);

// Đặt thuộc tính mới 'breed' cho đối tượng con chó
dog.breed = 'Husky Sirbi';

// Tạo phương thức 'getDogInfo' để trả về thông tin về con chó
dog.getDogInfo = function () {
  return `Tên: ${this.name}, Số chân: ${this.legs}, Màu sắc: ${this.color}, Tuổi: ${this.age}, Giống: ${this.breed}`;
};

// In thông tin về con chó sử dụng phương thức 'getDogInfo'
console.log(dog.getDogInfo());