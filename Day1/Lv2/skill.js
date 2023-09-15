const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let proSkills;
let maxSkills = 0;

for (const user in users) {
  //hasOwnProperty : Để kiểm tra xem một khóa hoặc thuộc tính cụ thể
  if (users.hasOwnProperty(user)) {
    //có tồn tại trong một đối tượng không
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      proSkills = user;
    }
  }
}

console.log(
  `Người có nhiều kỹ năng nhất là ${proSkills} với ${maxSkills} kỹ năng.`
);

//// Tìm những người là nhà phát triển ngăn xếp MERN
const mernDevelopers = [];

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const skills = users[user].skills;
    if (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      skills.includes("Node")
    ) {
      mernDevelopers.push(user);
    }
  }
}

console.log("Những người là nhà phát triển ngăn xếp MERN:", mernDevelopers);

/// Đặt tên của bạn trong đối tượng người dùng mà không sửa đổi đối tượng người dùng ban đầu
const updatedUsers = { ...users };

// Thông tin của bạn
updatedUsers["Damvn14"] = {
  email: "damvn14@gamil.com",
  skills: [
    "Html",
    "css",
    "PHP",
    "JavaScript",
    "ES6",
    "TypeScript",
    "ReactJs",
    "Tailwind",
  ],
  age: 20,
  isLoggedIn: true,
  points: 30,
};

console.log(updatedUsers);

// Nhận tất cả các khóa (thuộc tính) của đối tượng người dùng
const keys = Object.keys(users);
console.log(keys);

// Lấy tất cả giá trị của đối tượng user
const values = Object.values(users);
console.log(values);