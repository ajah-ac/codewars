/*const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  subject: "Mathematics",
};

getStudentInfo(student) // should return "Student Alice is studying Mathematics."*/


function getStudentInfo({name,subject}=obj){
    
    return `Student ${name} is studying ${subject}.`
}
const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  subject: "Mathematics",
};

console.log(getStudentInfo(student))