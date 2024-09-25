// Task # 1
// Problem: Student Attendance Tracker
// Write a JavaScript program to track student attendance in a class using an array. The program should:

// Ask the user (teacher) to enter the number of students in the class.
// Use a for loop to prompt the teacher to enter the student's name and whether the student is "Present" or "Absent".
// Store the names of absent students in an array.
// At the end, display a message showing how many students are present and the names of the absent students.
// Requirements:
// Use an array to store student names.
// Use a for loop to get attendance for each student.
// Use if-else statements to check whether a student is present or absent.
// Use nested if statements to ensure valid input (e.g., "Present" or "Absent" only).

var stds = [];
var absent = [];
var present = [];
alert("Welcome To Student Attendance Tracker");
var numStds = parseInt(prompt("Enter the number of students in the class:"));

for (var i = 0; i < numStds; i++) {
  var name = prompt("Enter the student's name:");

  var status = prompt(
    "Enter " +
      name +
      "'s status (Present/Absent). Press 'P' for Present or 'A' for Absent:");
  status = status.toUpperCase();

  while (status !== "P" && status !== "A") {
    alert("Invalid input. Please enter 'P' for Present or 'A' for Absent.");
    status = prompt("Enter " + name + "'s status (Present/Absent). Press 'P' for Present or 'A' for Absent:");
    status = status.toUpperCase();
  }

  if (status === "P") {
    present.push(name);
  } else {
    absent.push(name);
  }
}

var totalStds = numStds;
var absentStds = absent.length;
var presentStds = present.length;

var message = "📋 Attendance Summary:\n";
message += "----------------------------------\n";
message += "👥 Total Students: " + totalStds + "\n";
message += "✅ Present Students: " + presentStds + "\n";
message += "❌ Absent Students: " + absentStds + "\n";
message += "----------------------------------\n";

if (absentStds > 0) {
  message += "❌ Absent Students List:\n";
  for (var j = 0; j < absent.length; j++) {
    message += j + 1 + ". " + absent[j] + "\n";
  }
} else {
  message += "🎉 All students are present!\n";
}

alert(message);
