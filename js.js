const expand_Project = (num) => {
    let projectTitle1 = document.getElementById('projectTitle_1');
    let projectTitle2 = document.getElementById('projectTitle_2');
    let projectDesc2 = document.getElementById('projectDesc_2');
    let projectDesc1 = document.getElementById('projectDesc_1');
    let projectDisplay_1 = document.getElementById('projectDisplay_1');
    let projectDisplay_2 = document.getElementById('projectDisplay_2');
    let returnFromProjects = document.getElementById('returnFromProjects');


    returnFromProjects.style.display = 'flex';
    if (num == 1) {
    projectDisplay_1.classList.add('projectDisplayActive');
    projectTitle1.innerText = 'Fizz Buzz'
    projectDesc1.innerText = "Let's fire up the fizz buzz machine!"
    }
    if (num == 2) {
        projectDisplay_2.classList.add('projectDisplayActive');
        projectTitle2.innerText = 'Mad Lib'
        projectDesc2.innerText = "Will mad libs ever be 'uncool'? No..."  
    }
}

const returnFromProjects = (num) => {
    let projectDisplay_1 = document.getElementById('projectDisplay_1');
    let projectDisplay_2 = document.getElementById('projectDisplay_2');
    let outputFizzBuzz = document.getElementById('outputFizzBuzz');
    let returnFromProjects = document.getElementById('returnFromProjects');
    let madLibResults = document.getElementById('madLibResults');
    let madLib = document.getElementById('madLib');

    projectDisplay_1.classList.remove('projectDisplayActive');
    projectDisplay_2.classList.remove('projectDisplayActive');
    returnFromProjects.style.display = 'none';    
    outputFizzBuzz.innerText = '';
    madLibResults.innerText = '';
    madLib.style.display = 'flex';
    madLibResults.style.display = 'none';
}


const calculateFizzBuzz = () => {
    let fizz_Number1 = document.getElementById('fizz_Number1').value;
    let fizz_Number2 = document.getElementById('fizz_Number2').value;
    let outputFizzBuzz = document.getElementById('outputFizzBuzz');
    let fizzBuzz = [];

    if (fizz_Number1 < 0 || fizz_Number1 > 99 || 
        fizz_Number2 < 0 || fizz_Number2 > 99 ||
        fizz_Number1 > fizz_Number2 || fizz_Number1 == fizz_Number2)
        {
        alert('please enter valid ascending numbers')
        } 
    else {
        for (i = fizz_Number1; i <= fizz_Number2; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                fizzBuzz.push('FizzBuzz')
            }
            else if (i % 3 == 0) {
                fizzBuzz.push('Fizz')
            }
            else if (i % 5 == 0) {
                fizzBuzz.push('Buzz')
            }
            else {
                fizzBuzz.push(i)
            }
        }
        outputFizzBuzz.innerText = fizzBuzz;
    }
}

const composeMadLib = () => {
    let madLib = document.getElementById('madLib');
    let madLibResults = document.getElementById('madLibResults');
    let noun1 = document.getElementById('noun1').value;
    let noun2 = document.getElementById('noun2').value;
    let name1 = document.getElementById('name1').value;
    let adj1 = document.getElementById('adj1').value;
    let verb1 = document.getElementById('verb1').value;
    let verb2 = document.getElementById('verb2').value;

    madLib.style.display = 'none';
    madLibResults.style.display = 'flex';
    
    madLibResults.innerText = 'Long, long ago, there was a ' + noun1 +
    ' that went by the name of ' + name1 + '. Despite being so ' + adj1 + ', ' +
    name1 + ' always seemed to be ' + verb1 + '. When asked, the common explanation is that, '
    + ' "well, If theres a ' + noun2 + ' out there ' + verb2 + ' , then I will always be '
    + verb1 + '!'; 
}