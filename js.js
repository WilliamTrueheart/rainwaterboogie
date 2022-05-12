const expand_Project = (num) => {
    let projectTitle1 = document.getElementById('projectTitle_1');
    let projectDesc1 = document.getElementById('projectDesc_1');
    let projectDisplay_1 = document.getElementById('projectDisplay_1');
    let returnFromProjects = document.getElementById('returnFromProjects');

    returnFromProjects.style.display = 'flex';
    if (num == 1) {
    projectDisplay_1.classList.add('projectDisplayActive');
    projectTitle1.innerText = 'Fizz Buzz'
    projectDesc1.innerText = "Let's fire up the fizz buzz machine!"
    }
}

const returnFromProjects = (num) => {
    let projectDisplay_1 = document.getElementById('projectDisplay_1');
    let outputFizzBuzz = document.getElementById('outputFizzBuzz');
    let returnFromProjects = document.getElementById('returnFromProjects');

    projectDisplay_1.classList.remove('projectDisplayActive');
    returnFromProjects.style.display = 'none';    
    outputFizzBuzz.innerText = '';
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