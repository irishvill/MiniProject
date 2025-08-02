// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...

     const uppercaseNames = students.map(student => student.name.toUpperCase());
    document.getElementById("uppercaseNames").innerHTML = uppercaseNames.join(", ");

    // Task 2: Students with grade ≥ 85
    const topStudents = students.filter(({ grade = 0 }) => grade >= 85);
    const topStudentNames = topStudents.map(s => s.name).join(", ");
    document.getElementById("topStudents").innerHTML = topStudentNames || "No students with grade ≥ 85.";

    // Task 3: Average grade
    const grades = students.map(({ grade = 0 }) => grade);
    const average = grades.reduce((sum, g) => sum + g, 0) / grades.length;
    document.getElementById("averageGrade").innerHTML = average.toFixed(2);

    // Task 4 & 5: Destructuring with default
    function displayStudent({ name, grade = 0 }) {
      return `${name}: ${grade}`;
    }

    const studentInfoStrings = students.map(displayStudent).join("<br>");
    document.getElementById("displayStudentInfo").innerHTML = studentInfoStrings;