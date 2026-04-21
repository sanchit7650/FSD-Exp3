class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "Person";
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getRole() {
    return "Student";
  }

  getDescription() {
    return `${this.name} is a student of ${this.course} and is ${this.age} years old.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getRole() {
    return "Teacher";
  }

  getDescription() {
    return `${this.name} teaches ${this.subject} and is ${this.age} years old.`;
  }
}

const people = [
  new Person("Aman Verma", 40),
  new Student("Riya Sharma", 20, "Computer Science"),
  new Teacher("Neha Kapoor", 35, "Mathematics"),
  new Student("Karan Mehta", 22, "Business Analytics"),
  new Teacher("Arjun Singh", 45, "Physics")
];

const cardContainer = document.getElementById("cardContainer");

function renderCards() {
  cardContainer.innerHTML = people
    .map((person) => {
      const role = person.getRole();
      const roleClass = role.toLowerCase();

      return `
        <div class="person-card">
          <span class="role-tag ${roleClass}">${role}</span>
          <h3>${person.name}</h3>
          <p><strong>Age:</strong> ${person.age}</p>
          <p>${person.getDescription()}</p>
        </div>
      `;
    })
    .join("");
}

renderCards();