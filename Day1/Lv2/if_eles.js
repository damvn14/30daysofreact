    //Lấy điểm của học sinh (có thể thay đổi giá trị này)
    const score = 90;
    let grade;
    if (score >= 80 && score <= 100) {
    grade = "A";
    } else if (score >= 70 && score < 80) {
    grade = "B";
    } else if (score >= 60 && score < 70) {
    grade = "C";
    } else if (score >= 50 && score < 60) {
    grade = "D";
    } else if (score >= 0 && score < 50) {
    grade = "F";
    } else {
    grade = "Invalid score"; // Handle scores outside the specified range
    }

    console.log(`Student's grade: ${grade}`);

    // Xuân hạ thu đông rồi lại xuân!
    // Lấy đầu vào của người dùng
    const userInput = prompt("Nhập 1 tháng bất kỳ: ");

    // Chuyển đổi chữ hoa chữ thường/so sánh
    const month = userInput.toLowerCase();
    // Xác định mùa theo tháng
    let season;

    switch (month) {
    case "september":
    case "october":
    case "november":
        season = "Autumn";
        break;
    case "december":
    case "january":
    case "february":
        season = "Winter";
        break;
    case "march":
    case "april":
    case "may":
        season = "Spring";
        break;
    case "june":
    case "july":
    case "august":
        season = "Summer";
        break;
    default: // Xử lý đầu vào không hợp lệ
        season = "Invalid month";
    }

    console.log(`The season is ${season}`);

    // Nhận ngày đầu vào từ người dùng
    const usersInput = prompt("Hôm nay là thứ mấy?");

    // Chuyển đổi ngày đầu vào thành chữ thường để so sánh không phân biệt chữ hoa/chữ thường
    const day = usersInput.toLowerCase();

    // Kiểm tra xem ngày là ngày cuối tuần hay ngày làm việc
    if (day === 'saturday' || day === 'sunday') {
    console.log(`${usersInput} is a weekend.`);
    } else {
    console.log(`${usersInput} is a working day.`);
    }
