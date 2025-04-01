const students = [
  {
    name: "John",
    age: 30,
    courses: ["Math", "Science", "History"],
    studentType: 0, // Undergraduate
    isAlumni: 1, // Graduated
    faulty: "Science",
    gender: "Male"
  },
  {
    name: "Jane",
    age: 25,
    courses: ["English", "Art", "Biology"],
    studentType: 1, // Master
    isAlumni: 0, // Current Student
    faulty: "Arts",
    gender: "Female"
  },
  {
    name: "Danny",
    age: 28,
    courses: ["Physics", "Chemistry", "Math"],
    studentType: 2, // PhD
    isAlumni: 0, // Current Student
    faulty: "Science",
    gender: "Male"
  },
  {
    name: "Stanley",
    age: 22,
    courses: ["Computer Science", "Math", "Statistics"],
    studentType: 0, // Undergraduate
    isAlumni: 0, // Current Student
    faulty: "Engineering",
    gender: "Male"
  },
  {
    name: "Amy",
    age: 24,
    courses: ["Biology", "Chemistry", "Physics"],
    studentType: 1, // Master
    isAlumni: 0, // Current Student
    faulty: "Science",
    gender: "Female"
  },
  {
    name: "Bella",
    age: 27,
    courses: ["Literature", "History", "Philosophy"],
    studentType: 2, // PhD
    isAlumni: 1, // Graduated
    faulty: "Arts",
    gender: "Female"
  },
  {
    name: "Cinder",
    age: 21,
    courses: ["Engineering", "Math", "Physics"],
    studentType: 0, // Undergraduate
    isAlumni: 0, // Current Student
    faulty: "Engineering",
    gender: "Female"
  },
  {
    name: "Peter",
    age: 29,
    courses: ["Business", "Economics", "Finance"],
    studentType: 1, // Master
    isAlumni: 1, // Graduated
    faulty: "Business",
    gender: "Male"
  },
  {
    name: "Dianna",
    age: 23,
    courses: ["Dentistry"],
    studentType: 0, // Undergraduate
    isAlumni: 0, // Current Student
    faulty: "Dentistry",
    gender: "Female"
  },
  {
    name: "Victoria",
    age: 26,
    courses: [
      "Diagnostic Radiology", 
      "Clinical Oncology",
      "Microbiology",
      "Obstetrics and Gynaecology",
      "Orthopaedics and Traumatology",
      "Pathology",
      "Pharmacology and Pharmacy",
      "Surgery"
    ],
    studentType: 1, // Master
    isAlumni: 0, // Current Student
    faulty: "Medicine",
    gender: "Female"
  }
];

// Convert the array of objects to a JSON string
const jsonString = JSON.stringify(students, null, 2);

console.log(jsonString);
