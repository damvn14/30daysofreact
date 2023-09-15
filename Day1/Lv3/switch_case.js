    //Viết chương trình tính số ngày trong một tháng, xét năm nhuận.
    // Nhập một tháng từ người dùng
    const userInput = prompt("Nhập bất kỳ 1 tháng:");
    const month = userInput.toLowerCase();

    // Xác định số ngày trong tháng
    let daysInMonth;

    switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        daysInMonth = 31;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        daysInMonth = 30;
        break;
    case 'february':
        // Kiểm tra năm nhuận // đoạn này e có tham khảo trên mạng
        const year = new Date().getFullYear();
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth = 29;
        } else {
        daysInMonth = 28;
        }
        break;
    default:
        daysInMonth = 'Invalid month';
        break;
    }

    console.log(`${userInput} has ${daysInMonth} days.`);