//Khai báo một hàm fullName và nó lấy FirstName, LastName làm tham số và trả về tên đầy đủ của bạn.

function fullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
  }
  
  // Example usage:
  const firstName = 'Ngoc Dam';
  const lastName = 'Vu';
  
  const myFullName = fullName(firstName, lastName);
  console.log(`Họ tên đầy đủ của tôi là: ${myFullName}`);
  