
//Lấy điểm của học sinh (có thể thay đổi giá trị này)
const score = 90;
let grade;
if (score >= 80 && score <= 100) {
    grade = 'A';
  } else if (score >= 70 && score < 80) {
    grade = 'B';
  } else if (score >= 60 && score < 70) {
    grade = 'C';
  } else if (score >= 50 && score < 60) {
    grade = 'D';
  } else if (score >= 0 && score < 50) {
    grade = 'F';
  } else {
    grade = 'Invalid score'; // Handle scores outside the specified range
  }
  
  console.log(`Student's grade: ${grade}`);