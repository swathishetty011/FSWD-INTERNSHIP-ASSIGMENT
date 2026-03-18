// Student data
let students = [
    {
        name: "Swathi",
        marks: [80, 85, 90]
    },
    {
        name: "Rahul",
        marks: [70, 75, 80]
    },
    {
        name: "Anita",
        marks: [90, 88, 92]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}

// Function to calculate grade
function calculateGrade(avg) {

    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else return "D";

}

// Display student details
students.forEach(student => {

    let avg = calculateAverage(student.marks);
    let grade = calculateGrade(avg);

    console.log("Student:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg);
    console.log("Grade:", grade);
    console.log("--------------------");

});

// Find top scorer
let topStudent = students[0];
let highestAvg = calculateAverage(topStudent.marks);

students.forEach(student => {

    let avg = calculateAverage(student.marks);

    if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student;
    }

});

console.log("Top Scorer:", topStudent.name);
console.log("Highest Average:", highestAvg);