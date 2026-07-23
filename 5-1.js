// =====================
// Base Class: Person
// =====================
class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            console.log("Invalid email");
        }
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            console.log("Invalid ID");
        }
    }

    describeRole() {
        console.log(`${this.name} is a school member.`);
    }
}

// =====================
// Principal Class
// =====================
class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(`${member.name} added successfully.`);
    }

    removeMember(memberId) {
        this.members = this.members.filter(
            member => member.id !== memberId
        );
        console.log(`Member with ID ${memberId} removed.`);
    }

    listMembers() {
        console.log("School Members:");

        this.members.forEach(member => {
            console.log(
                `Name: ${member.name} | ID: ${member.id}`
            );
        });
    }

    describeRole() {
        console.log(`${this.name} is the Principal and manages the school.`);
    }
}

// =====================
// Teacher Class
// =====================
class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }

    gradeStudent(studentName, grade) {
        this.grades.push({
            studentName,
            grade
        });

        console.log(
            `${studentName} received grade ${grade} in ${this.subject}`
        );
    }

    listGradedStudents() {
        console.log(`Grades for ${this.subject}:`);

        this.grades.forEach(student => {
            console.log(
                `${student.studentName}: ${student.grade}`
            );
        });
    }

    describeRole() {
        console.log(
            `${this.name} teaches ${this.subject}.`
        );
    }
}

// =====================
// Student Class
// =====================
class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }

    enrollSubject(subject) {
        this.subjects.push(subject);
        console.log(
            `${this.name} enrolled in ${subject}`
        );
    }

    viewSubjects() {
        console.log(`${this.name}'s Subjects:`);

        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }

    describeRole() {
        console.log(
            `${this.name} is a student and attends classes.`
        );
    }
}

// =====================
// Create Objects
// =====================

const principal = new Principal(
    "Mr. Ahmed",
    "principal@school.com",
    1
);

const teacher1 = new Teacher(
    "Sara",
    "sara@school.com",
    2,
    "Mathematics"
);

const student1 = new Student(
    "Mohamed",
    "mohamed@student.com",
    3
);

const student2 = new Student(
    "Ali",
    "ali@student.com",
    4
);

// =====================
// Principal Actions
// =====================

principal.addMember(teacher1);
principal.addMember(student1);
principal.addMember(student2);

principal.listMembers();

// =====================
// Teacher Actions
// =====================

teacher1.gradeStudent("Mohamed", 95);
teacher1.gradeStudent("Ali", 88);

teacher1.listGradedStudents();

// =====================
// Student Actions
// =====================

student1.enrollSubject("Mathematics");
student1.enrollSubject("Physics");

student1.viewSubjects();

// =====================
// Shared Method Demo
// =====================

const schoolMembers = [
    principal,
    teacher1,
    student1,
    student2
];

console.log("\n=== Role Descriptions ===");

schoolMembers.forEach(member => {
    member.describeRole();
});