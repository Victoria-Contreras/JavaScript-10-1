//1
function largerNum() {
    let num1 = 42
    let num2 = 102

    if (num1 > num2) {
        return num1;
    } else if(num2 > num1){
        return num2;
    } else {
        return 'They are equal'
    }
}
//console.log(largerNum());

//2

function findTheSign() {
    const a = 3
    const b = -7
    const c = 2

    if (a+b+c > 0) {
        return `the sign is positive`
    } else {
        return `the sign is negative`
    }  
}
//console.log(findTheSign());

//3
function largestToSmallest() {
    let x = 0
    let y = -1 
    let z = 4

    if (x > y && x > z) {
        if (y>z) {
            console.log(`${x}, ${y}, ${z}`)
        } else {
            console.log(`${x}, ${z}, ${y}`)
        }
    } else if (y > x && y > z) {
        if (x > z) {
            console.log(`${y}, ${x}, ${z}`)
        } else {
            console.log(`${y}, ${z}, ${x}`)
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(`${z}, ${x}, ${y}`)
        } else {
            console.log(`${z}, ${y}, ${z}`)
        }
    }
}
//console.log(largestToSmallest());

//4
function isLargest() {
    const numbersArray = [-5, -2, -6, 0, -1]
    let largest = -5

    let n = 0
    while (n < numbersArray.length) {
        if (numbersArray[n] > largest) {
            //console.log(numbersArray[n])
            largest = numbersArray[n]
        }
        n++
    }
    return largest;
}
//console.log(isLargest());

//5
function isEvenOrOdd() {
    for (let i = 0; i < 16; i++){
    if (i % 2 === 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }
}
//console.log(isEvenOrOdd());

//6 Im making this extra complicated for extra practice 
const studentsGrades = {
    David: {
        marks: 80,
    },

    Vinoth: {
        marks: 77,
    },

    Divya: {
        marks: 88,
    },

    Ishitha: {
        marks: 95,
    },

    Thomas: {
        marks: 68,
    }
}

function checkGrade() {
    let count = 0 
    for (let key in studentsGrades) {
        //console.log(studentsGrades[key].marks)
        if (studentsGrades[key].marks > 89) {
            studentsGrades[key].grade = "A"
        } else if (studentsGrades[key].marks > 79) {
            studentsGrades[key].grade = "B"
        } else if (studentsGrades[key].marks > 69) {
            studentsGrades[key].grade = "D"
        } else {
            studentsGrades[key].grade = "F"
        }
        count++
    }

}


checkGrade()

console.log(studentsGrades);

// I am now realizing that I read the instructions wrong and this is not what they wanted :D but hey at least I refreshed my brain on nested objects.
