let customerPoints = 0;
let regBtn = document.getElementById('regBtn');
let age = document.getElementById('age');
let Country = document.getElementById('Country');
let Gender = document.getElementById('Gender');
let amountError = document.getElementById('amountError');
let students = ["Biology", "Physics", "Chemistry", "CRS", "GEO", "Computer"]
let studentsView = document.getElementById("studentsView")
let selectStudents = document.getElementById("selectStudents")
let selectStudents2 = document.getElementById("selectStudents2")
let selectStudents3 = document.getElementById("selectStudents3")
let selectStudents4 = document.getElementById("selectStudents4")
let selectStudents5 = document.getElementById("selectStudents5")
let selectStudents6 = document.getElementById("selectStudents6")
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let score3 = document.getElementById("score3")
let score4 = document.getElementById("score4")
let score5 = document.getElementById("score5")
let score6 = document.getElementById("score6")
let Average
let userName = document.getElementById("userName")
let userLast = document.getElementById("userLast")
let userNumber = document.getElementById("userNumber")
let agePoints =0;
let countryPoints=0;
let subjectPoints=0;
let averageScore





selectStudents.addEventListener("change", function () {
  let studentIndex = selectStudents.value
  students.splice(studentIndex, 1)//Remove data from any point of an array
  loopStudents2()
  loopStudents3()
  loopStudents4()
  loopStudents5()
  loopStudents6()

})

selectStudents2.addEventListener("change", function () {
  let studentIndex = selectStudents2.value
  students.splice(studentIndex, 1)//Remove data from any point of an array
  loopStudents3()
})

selectStudents3.addEventListener("change", function () {
  let studentIndex = selectStudents3.value
  students.splice(studentIndex, 1)
  loopStudents4()
})


selectStudents4.addEventListener("change", function () {
  let studentIndex = selectStudents4.value
  students.splice(studentIndex, 1)
  loopStudents5()
})


selectStudents5.addEventListener("change", function () {
  let studentIndex = selectStudents5.value
  students.splice(studentIndex, 1)
  loopStudents6()
})


selectStudents6.addEventListener("change", function () {
  let studentIndex = selectStudents5.value
  students.splice(studentIndex, 1)
  loopStudents()
})





// //Loop an array
loopStudents()
loopStudents2()
loopStudents3()
loopStudents4()
loopStudents5()
loopStudents6()
function loopStudents() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  } selectStudents.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
  loopStudents2()
  loopStudents3()
}

function loopStudents2() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  } selectStudents2.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
  loopStudents3()
}

function loopStudents3() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  }
  selectStudents3.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
}


function loopStudents4() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  }
  selectStudents4.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
}



function loopStudents5() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  }
  selectStudents5.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
}



function loopStudents6() {
  let allOptions = ""
  for (let a = 0; a < students.length; a++) {
    allOptions += ` <option value="${a}"> ${students[a]}</option>`
  }
  selectStudents6.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`
}




  regBtn.addEventListener('click', function () {
    ageGrade();
  }); 
    
  


//stuff



function ageGrade() {
  if (age.value == '18 – 24') {
    agePoints =agePoints + 100;
    console.log('age 100 points')
  } else if (age.value == '25 – 30') {
    agePoints =agePoints  + 80;
    console.log('age 80 points')
  }
  else if (age.value == '31 – 35') {
    agePoints =  agePoints+ 50;
    console.log('age 50 points')
  }
  else if (age.value == '36 – 40') {
    agePoints = agePoints + 30;
    console.log('age 30 points')
  }
  else if (age.value == '41 and above') {
    agePoints = agePoints+ 10;
    console.log('age 10 points')
  }
    countryLocated()
  } 



//country




function countryLocated() {
  if (Country.value == "Africa") {
    countryPoints =countryPoints + 50;
    console.log('country 50 points')
  } else if (Country.value == 'Asia') {
    countryPoints = countryPoints + 40;
    console.log('country 40 points')
  }
  else if (Country.value == 'South America') {
    countryPoints = countryPoints + 30;
    console.log('country 30 points')
  }
  else if (Country.value == 'North America') {
    countryPoints = countryPoints + 20;
    console.log('country 20 points')
  }
  else if (Country.value == 'Anywhere') {
    countryPoints = countryPoints + 10;
    console.log('country 10 points')
  }
    subjectScore() 
}


//country

function subjectScore() {
  let score

  score = parseInt(score1.value) + parseInt(score2.value) + parseInt(score3.value) + parseInt(score4.value) + parseInt(score5.value) + parseInt(score6.value)
  console.log("subject Total Score= " + score);
  averageScore = (score)/8
  console.log("average"+averageScore);
if(averageScore<=100 && averageScore>=90) {
  subjectPoints=subjectPoints + 150;
  console.log('subject point 150 ')
}else if (averageScore<=89 && averageScore>=85) {
  subjectPoints= subjectPoints +140;
  console.log('subject point 140 ')
}else if (averageScore<=84 && averageScore>=75) {
  subjectPoints= subjectPoints +120;
  console.log('subject point 120 ')
}else if (averageScore<=74 && averageScore>=65) {
  subjectPoints= subjectPoints +100;
  console.log('subject point 100 ')
}else if (averageScore<=64 && averageScore>=60) {
  subjectPoints= subjectPoints +80;
  console.log('subject point 80 ')
}
requiementChech()
}
//chart

function chart(){
const labels = [
  'age',
  'Country',
  'subject',
  
  
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(47, 71, 189, 0.507), rgb(255, 99, 167), rgb(255, 99, 120)',
    borderColor: ['rgb(254, 99, 152)'],
    data: [agePoints,countryPoints,subjectPoints ],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {}
};



const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
}


function requiementChech() {
  if (agePoints + countryPoints +subjectPoints >= 180) {
    alert(
      ' you are eligible for this loan and your application is successful'
    );
    chart()
  } else if (agePoints + countryPoints +subjectPoints <= 180) {
    alert('Sorry, you do not meet up with the requirement ');
    console.log(
      'Sorry, you do not meet up with the requirement '
    );
  }
}